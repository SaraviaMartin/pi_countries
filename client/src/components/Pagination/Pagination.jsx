import React from "react";

 function Pagination({ countriesPerPage, allCountries, paged, currentPage }){
    let pageNumbers = [];
  if (Array.isArray(allCountries)) {
    for (
      let i = 1;
      i <= Math.ceil((allCountries.length - 9) / (countriesPerPage + 1)) + 1;
      i++
    ) {
      pageNumbers = [...pageNumbers, i];
    }
  } else {
    pageNumbers = [1];
  }
  if (pageNumbers.length > 1) {
    return (
      <div>
        {pageNumbers &&
          pageNumbers.map((num) => (
            <button
              key={"paged" + num}
              onClick={() => {
                paged(num);
              }}
              value={num}
              className={currentPage}
            >
              {" "}
              {num}{" "}
            </button>
          ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Pagination;
