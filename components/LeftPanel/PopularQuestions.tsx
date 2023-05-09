import { FC, useState } from "react";
import ReactPaginate from "react-paginate";

interface Props {
  questions: string[];
  onQuestionClick: (message: string) => void;
}

const PopularQuestions: FC<Props> = ({ questions, onQuestionClick }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const questionsPerPage = 5;
  const pageCount = Math.ceil(questions.length / questionsPerPage);
  const offset = currentPage * questionsPerPage;
  const paginatedQuestions = questions.slice(
    offset,
    offset + questionsPerPage
  );

  const renderPageNumbers = () => {
    return (
      <div className="flex items-center space-x-2">
        <ReactPaginate
          previousLabel={"←"}
          nextLabel={"→"}
          pageCount={pageCount}
          breakLabel="..."
          onPageChange={handlePageClick}
          containerClassName={"pagination flex justify-center mt-4"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
        />
      </div>
    );
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4">Popular Questions</h3>
      {paginatedQuestions.map((question, index) => (
        <button
          key={index}
          className="text-sm sm:text-sm text-blueqa-900 font-medium rounded-lg px-4 py-2 bg-blueqa-200 hover:bg-blueqa-300 focus:outline-none mb-2 w-full"
          onClick={() =>
            onQuestionClick({ role: "user", content: question })
          }
        >
          {question}
        </button>
      ))}
      {pageCount > 1 && renderPageNumbers()}
    </div>
  );
};

export default PopularQuestions;
