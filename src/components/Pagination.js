import React, { useState } from "react";

const Paginate = ({
  currentPage,
  itemPerPage,
  totalItems,
  paginate,
  setCurrentPage,
}) => {
  // state
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumber, setMaxPageNumber] = useState(5);
  const [minPageNumber, setMinPageNumber] = useState(0);
  const pageNumbers = [];

  //number of page condition
  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  // nextpage
  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumber) {
      setMaxPageNumber(maxPageNumber + pageNumberLimit);
      setMinPageNumber(minPageNumber + pageNumberLimit);
    }
  };

  // prevpage
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumber(maxPageNumber - pageNumberLimit);
      setMinPageNumber(minPageNumber - pageNumberLimit);
    }
  };

  return (
    <div className="pagination-container">
      <ul className="pagination">
        <li>
          <button
            className="prev-btn"
            onClick={handlePrevbtn}
            disabled={currentPage == pageNumbers[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageNumbers.map((number) => {
          if (number < maxPageNumber + 1 && number > minPageNumber) {
            return (
              <li
                key={number}
                onClick={() => paginate(number)}
                className={
                  currentPage == number ? "page-number active" : "page-number"
                }
              >
                {number}
              </li>
            );
          }
        })}
        <li>
          <button
            className="next-btn"
            onClick={handleNextbtn}
            disabled={
              currentPage == pageNumbers[pageNumbers.length - 1] ? true : false
            }
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
