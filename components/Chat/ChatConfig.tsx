// ChatConfig.tsx
import { FC, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const sourcesOptions = [
  { value: "IPCC", label: "IPCC" },
  { value: "IPBES", label: "IPBES" },
];

const complexityOptions = [
  { value: "children", label: "For children" },
  { value: "experts", label: "For experts" },
];

interface ChatConfigProps {
  isEditing: boolean;
  sources: any;
  complexity: any;
  handleEditClick: () => void;
  handleSaveClick: () => void;
  handleSourcesChange: (selectedSources: any) => void;
  handleComplexityChange: (selectedComplexity: any) => void;
  onReset: () => void;
}

export const ChatConfig: FC<ChatConfigProps> = ({
  isEditing,
  sources,
  complexity,
  handleEditClick,
  handleSaveClick,
  handleSourcesChange,
  handleComplexityChange,
  onReset,
}) => {
  return (
    <div className="flex items-center justify-between px-2 py-1 bg-neutral-100 text-sm shadow">
      {!isEditing ? (
        <div className="flex justify-between items-center w-full">
          <div className="text-left mr-2">
            Sources: {sources.map((source) => source.label).join(", ")} - Complexity: {complexity.label}
          </div>
          <div className="flex items-end">
            <button className="text-blueqa-900 hover:underline mr-2" onClick={handleEditClick}>
              Edit
            </button>
            <button className="text-blueqa-900 hover:underline" onClick={onReset}>
              Reset
            </button>
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-col sm:flex-row items-center">
          <label className="mr-2">Sources:</label>
          <Select
            className="mr-4 mb-2 sm:mb-0"
            isMulti
            closeMenuOnSelect={false}
            components={animatedComponents}
            value={sources}
            onChange={handleSourcesChange}
            options={sourcesOptions}
            menuPlacement="top"
          />
          <label className="mr-2">Complexity:</label>
          <Select
            className="mr-4 mb-2 sm:mb-0"
            value={complexity}
            onChange={handleComplexityChange}
            options={complexityOptions}
            menuPlacement="top"
          />
          <button className="bg-blueqa-500 text-white rounded px-2 py-1 hover:bg-blueqa-600 mb-2 sm:mb-0" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatConfig;
