import { FC } from "react";

interface SourceCardProps {
  title: string;
  content: string;
  footerText: string;
  pdfLink: string;
  pageNumber: number;
}

export const SourceCard: FC<SourceCardProps> = ({
  title,
  content,
  footerText,
  pdfLink,
  pageNumber,
}) => {
  return (
    <div className="bg-blueqa-200 rounded-lg shadow-md overflow-hidden flex flex-col m-4">
      <div className="p-4">
        <h2 className="text-sm font-bold mb-2 mt-0 text-blueqa-900">{title}</h2>
        <p className="text-xs mb-0">{content}</p>
      </div>
      <div className="bg-grayqa text-xs p-2 flex justify-between items-center">
        <span className="text-gray-600">{footerText}</span>
        <a
          href={`${pdfLink}#page=${pageNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center ml-auto text-decoration-none text-sm"
        >
          <span role="img" aria-label="Open PDF">
            🔗
          </span>
        </a>
      </div>
    </div>
  );
};
