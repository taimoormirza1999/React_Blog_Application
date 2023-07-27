import { React, useState, useContext } from "react";
import SearchBox from "./SearchBox";
import BlogListCard from "./BlogListCard";
import LinkButton from "./LinkButton";
import ShadowContext from '../context/ShadowContext';

const postsPerPage = 8;
const maxPageLinksToShow = 5; // Set the maximum number of pagination links to show at once

export default function BlogList(props) {
  const shadow = useContext(ShadowContext);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(props.filteredData.length / postsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPaginationRange = () => {
    const middleLink = Math.floor(maxPageLinksToShow / 2);
    let startPage, endPage;

    if (currentPage <= middleLink) {
      startPage = 1;
      endPage = Math.min(maxPageLinksToShow, totalPages);
    } else if (currentPage + middleLink >= totalPages) {
      startPage = Math.max(totalPages - maxPageLinksToShow + 1, 1);
      endPage = totalPages;
    } else {
      startPage = currentPage - middleLink;
      endPage = currentPage + middleLink;
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.filteredData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      {/* Serach Box  */}
      <SearchBox
        searchHandle={props.handleSearch}
        searchKeyword={props.searchKeyword}
      />

      {/* Map Results */}
      <div className="w-11/12 mx-auto mt-6">
        <div className="flex justify-between">
          <h1 className="mb-4 text-xl font-extrabold  text-slate-300 md:text-2xl lg:text-3xl "> Blog Posts </h1>{" "}
          <div className="my-5">
            {/* <LinkButton to="/blog/manage" title="Create Post"/> */}
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 my-5 justify-items-center">
          {props.data === "true" ? (
            <>
              {currentPosts.length === 0 && (
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">Sorry No results found!</p>
              )}
              <BlogListCard filteredData={currentPosts} shadows={shadow} />
            </>
          ) : (
            <div className="mb-2 font-light text-gray-500 dark:text-gray-400">Loading...</div>
          )}
        </div>
      </div>
      {/* Pagination */}
      <section className="flex justify-center mt-4">
        {props.filteredData.length > postsPerPage && (
          <nav className="flex items-center">
            {currentPage > 1 && (
              <button
                onClick={handlePrevPage}
                className={`${shadow} mx-1 px-3 py-2 rounded-full bg-gray-200 text-gray-700`}
              >
                Previous
              </button>
            )}

            {getPaginationRange().map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageClick(pageNumber)}
                className={`${shadow} mx-1 px-3 py-2 rounded-full ${
                  pageNumber === currentPage ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                {pageNumber}
              </button>
            ))}

            {currentPage < totalPages && (
              <button
                onClick={handleNextPage}
                className={`${shadow} mx-1 px-3 py-2 rounded-full bg-gray-200 text-gray-700`}
              >
                Next
              </button>
            )}
          </nav>
        )}
      </section>
    </>
  );
}
