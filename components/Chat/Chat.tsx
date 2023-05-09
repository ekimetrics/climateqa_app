import { Message } from "@/types";
import { FC, useState } from "react";
import { ChatInput } from "./ChatInput";
import { ChatLoader } from "./ChatLoader";
import { ChatMessage } from "./ChatMessage";
import ChatConfig from "./ChatConfig"; // Import the ChatConfig component
import Select from "react-select";
import makeAnimated from "react-select/animated";

interface Props {
  messages: Message[];
  loading: boolean;
  onSend: (message: Message) => void;
  onReset: () => void;
}

const animatedComponents = makeAnimated();

const sourcesOptions = [
  { value: "IPCC", label: "IPCC" },
  { value: "IPBES", label: "IPBES" },
];

const complexityOptions = [
  { value: "children", label: "For children" },
  { value: "experts", label: "For experts" },
];

export const Chat: FC<Props> = ({ messages, loading, onSend, onReset }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [sources, setSources] = useState([{ value: "IPCC", label: "IPCC" }, { value: "IPBES", label: "IPBES" }]);
  const [complexity, setComplexity] = useState({ value: "children", label: "For children" });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleSourcesChange = (selectedSources: any) => {
    setSources(selectedSources);
  };

  const handleComplexityChange = (selectedComplexity: any) => {
    setComplexity(selectedComplexity);
  };

  return (
    <>
      {/* <div className="flex flex-col h-full relative px-2 sm:p-4 sm:border border-neutral-300"> */}
      <div className="flex flex-col h-full relative px-2 sm:p-4">
        <div className="overflow-auto h-screen-custom">
          {messages.map((message, index) => (
            <div key={index} className="my-1 sm:my-1.5">
              <ChatMessage message={message} first={index===0} onSend={onSend} />
            </div>
          ))}
          {loading && (
            <div className="my-1 sm:my-1.5">
              <ChatLoader />
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <ChatConfig
            isEditing={isEditing}
            sources={sources}
            complexity={complexity}
            handleEditClick={handleEditClick}
            handleSaveClick={handleSaveClick}
            handleSourcesChange={handleSourcesChange}
            handleComplexityChange={handleComplexityChange}
            onReset={onReset}
          />
          <ChatInput onSend={onSend} />
        </div>
      </div>
    </>
  );
};
