import { Chat } from "@/components/Chat/Chat";
import { Layout } from '@/components/Layout/Layout';
import { SourceCard } from "@/components/SourceCard";
import LeftPanel from "@/components/LeftPanel/LeftPanel";

import { Message } from "@/types";
import { useEffect, useRef, useState } from "react";


const message=`Hi there! I'm ClimateQ&A, an AI assistant designed to answer climate and biodiversity related questions using references to the IPCC and IPBES reports. Ask me anything in the chat below or use popular questions!`


export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async (message: Message) => {
    const updatedMessages = [...messages, message];

    setMessages(updatedMessages);
    setLoading(true);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: updatedMessages
      })
    });

    if (!response.ok) {
      setLoading(false);
      throw new Error(response.statusText);
    }

    const data = response.body;

    if (!data) {
      return;
    }

    setLoading(false);

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let isFirst = true;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      if (isFirst) {
        isFirst = false;
        setMessages((messages) => [
          ...messages,
          {
            role: "assistant",
            content: chunkValue
          }
        ]);
      } else {
        setMessages((messages) => {
          const lastMessage = messages[messages.length - 1];
          const updatedMessage = {
            ...lastMessage,
            content: lastMessage.content + chunkValue
          };
          return [...messages.slice(0, -1), updatedMessage];
        });
      }
    }
  };

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content: message,
        followupQuestions:["What are the IPCC reports?","IPBES?"]
      }
    ]);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: message,
        followupQuestions:["What are the IPCC reports?","IPBES?"]
      }
    ]);
  }, []);


  return (
    <Layout title="ClimateQ&A" description="Ask climate-related questions to the IPCC reports with AI">
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="hidden md:block md:w-1/4 p-4">
        {/* <div className="w-full md:w-1/4 p-4 md:order-1 order-2"> */}
          <LeftPanel onReset={handleReset} onQuestionClick={handleSend} />
        </div>
        <div className="w-full h-full md:w-1/2 px-2 md:px-0 pt-4 pb-0">
          {/* Center panel */}
          <Chat
            messages={messages}
            loading={loading}
            onSend={handleSend}
            onReset={handleReset}
          />
          <div ref={messagesEndRef} />
        </div>
        <div className="hidden md:block md:w-1/4 p-4">
          <h3 className="text-lg font-semibold mb-4">Sources</h3>
          <SourceCard
            title="Doc 1 - Sample - Page 1"
            content="Full Report. In: Climate Change 2022: Mitigation of Climate Change. Contribution of the WGIII to the AR6 of the IPCC page 506 [...] low-carbon as part of the country development objectives (Box 4.5)."
            footerText="IPCC AR6 WGIII - 2021.pdf"
            pdfLink="https://example.com/sample.pdf"
            pageNumber={1}
          />
        </div>
      </div>
    </Layout>

  );
}
