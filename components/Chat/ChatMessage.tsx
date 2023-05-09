import { Message } from "@/types";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";


interface Props {
  message: Message;
  first: boolean;
  onSend: (message: Message) => void;
}

export const ChatMessage: FC<Props> = ({ message,first,onSend}) => {
  const handleThumbsUp = () => {
    alert("Thumbs up!")
    // Handle thumbs up action here
  };

  const handleThumbsDown = () => {
    alert("Thumbs down!")
    // Handle thumbs down action here
  };

  const handleClickFollowupQuestion = (question: string) => {
    if (typeof onSend === "function") {
      onSend({ role: "user", content: question });
    } else {
      console.error("onSend is not a function");
    }
  };

  return (
    <div className={`flex flex-col mb-4 ${message.role === "assistant" ? "items-start" : "items-end"}`}>
      <div
        className={`text-base flex flex-col ${message.role === "assistant" ? "bg-grayqa text-neutral-900" : "bg-blueqa-500 text-white mr-2"} rounded-2xl px-3 py-2 max-w-[85%] whitespace-pre-wrap`}
        style={{ overflowWrap: "anywhere" }}
      >
        <div className="flex items-center">{message.content}</div>
        {!first && message.role === "assistant" && (
          <div className="flex items-center justify-end mt-1 space-x-1">
            <button onClick={handleThumbsUp}>
              <FontAwesomeIcon icon={faThumbsUp} className="text-sm hover:text-blueqa-500 text-neutral-500" width="10" height="10" />
            </button>
            <button onClick={handleThumbsDown}>
              <FontAwesomeIcon icon={faThumbsDown} className="text-sm hover:text-blueqa-500 text-neutral-500" width="10" height="10" />
            </button>
          </div>
        )}
        {message.role === "assistant" && message.followupQuestions && message.followupQuestions.length > 0 && (
          <div className="mt-2 text-xs">
            <div>Follow-up questions:</div>
            <div className="flex flex-wrap mt-1">
              {message.followupQuestions.map((question, index) => (
                <button 
                key={index}
                onClick={() => handleClickFollowupQuestion(question)} 
                className="bg-white hover:bg-blueqa-300 text-neutral-800 px-2 py-1 rounded-md mr-1 mb-1">
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};