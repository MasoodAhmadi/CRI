"use client";
import React from "react";
import _ from "lodash"; // make sure lodash is installed
import {
  ChevronDoubleLeft,
  ChevronLeft,
  ChevronRight,
  ChevronDoubleRight,
} from "react-bootstrap-icons";

export default function PaginationComponent({
  pageSize,
  itemsCount,
  currentPage,
  onPageChange,
}) {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        {/* First Page */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(1)}
            aria-label="First"
          >
            <ChevronDoubleLeft />
          </button>
        </li>

        {/* Previous Page */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>
        </li>

        {/* Page Numbers */}
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}

        {/* Next Page */}
        <li
          className={`page-item ${
            currentPage === pagesCount ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            aria-label="Next"
          >
            <ChevronRight />
          </button>
        </li>

        {/* Last Page */}
        <li
          className={`page-item ${
            currentPage === pagesCount ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(pagesCount)}
            aria-label="Last"
          >
            <ChevronDoubleRight />
          </button>
        </li>
      </ul>
    </nav>
  );
}
