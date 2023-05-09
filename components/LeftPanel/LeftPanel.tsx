import { FC } from "react";
import ConfigurationCard from "./ConfigurationCard";
import PopularQuestions from "./PopularQuestions";

interface Props {
    onReset: () => void;
    onQuestionClick: (message: string) => void;
  }
const popularQuestions = [
    "What is climate change?",
    "How does global warming affect the environment?",
    "What can we do to stop climate change?",
    "What are the main causes of climate change?",
    "How do greenhouse gases affect the Earth's temperature?",
    "Is climate change caused by humans?",
    "What evidence do we have of climate change?",
    "What are the impacts of climate change?",
    "Can climate change be reversed?",
    "What is the difference between climate change and global warming?",
    "What can individuals do to address climate change?",
    "What are the main causes of climate change?",
    "What is the Paris Agreement and why is it important?",
    "Which industries have the highest GHG emissions?",
    "Is climate change a hoax created by the government or environmental organizations?",
    "What is the relationship between climate change and biodiversity loss?",
    "What is the link between gender equality and climate change?",
    "Is the impact of climate change really as severe as it is claimed to be?",
    "What is the impact of rising sea levels?",
    "What are the different greenhouse gases (GHG)?",
    "What is the warming power of methane?",
    "What is the jet stream?",
    "What is the breakdown of carbon sinks?",
    "How do the GHGs work ? Why does temperature increase ?",
    "What is the impact of global warming on ocean currents?",
    "How much warming is possible in 2050?",
    "What is the impact of climate change in Africa?",
    "Will climate change accelerate diseases and epidemics like COVID?",
    "What are the economic impacts of climate change?",
    "How much is the cost of inaction ?",
    "What is the relationship between climate change and poverty?",
    "What are the most effective strategies and technologies for reducing greenhouse gas (GHG) emissions?",
    "Is economic growth possible? What do you think about degrowth?",
    "Will technology save us?",
    "Is climate change a natural phenomenon ?",
    "Is climate change really happening or is it just a natural fluctuation in Earth's temperature?",
    "Is the scientific consensus on climate change really as strong as it is claimed to be?",
];

const LeftPanel: FC<Props> = ({ onReset, onQuestionClick }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="w-full mb-8">
        <PopularQuestions questions={popularQuestions} onQuestionClick={onQuestionClick} />
      </div>
      {/* <div className="w-full mb-8">
        <PopularQuestions questions={popularQuestions} onQuestionClick={onQuestionClick} />
      </div> */}
      {/* <div className="w-full mb-8">
        <ConfigurationCard onReset={onReset} />
      </div> */}
    </div>
  );
};

export default LeftPanel;
