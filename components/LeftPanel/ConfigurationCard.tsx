import { FC,useState     } from "react";
import { ResetChat } from "../Chat/ResetChat";

import Select from "react-select";
import makeAnimated from "react-select/animated";



interface Props {
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

export const ConfigurationCard: FC<Props> = ({ onReset }) => {
  const [collapseOpen, setCollapseOpen] = useState(true);

  return (
    <div className="w-full bg-blueqa-200 p-4 rounded-lg shadow-lg">
      <div className="w-full flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Configure the assistant</h2>
        <button
          className="text-lg"
          onClick={() => setCollapseOpen(!collapseOpen)}
        >
          {collapseOpen ? "-" : "+"}
        </button>
      </div>
      {collapseOpen && (
        <>
          <div className="mb-4">
            <ResetChat onReset={onReset} />
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sources
            </label>
            <Select
              isMulti
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={sourcesOptions}
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Level of complexity
            </label>
            <Select options={complexityOptions} />
          </div>
        </>
      )}
    </div>
  );
};

export default ConfigurationCard;
