import React from "react";

const PageIndicator = ({ currentPage, totalPages }) => {
  const pageIndicators = [];
  for (let i = 0; i < totalPages; i++) {
    pageIndicators.push(
      <span
        key={i}
        className={`h-4 w-4 rounded-full ${
          currentPage === i ? "bg-accent h-3 w-3" : "bg-secondary"
        }`}
      />
    );
  }

  return (
    <div className="w-full flex items-center justify-center gap-1 mt-4">
      {pageIndicators}
      <br />
    </div>
  );
};

export default PageIndicator;
