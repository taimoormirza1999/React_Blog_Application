import React from "react";
import SearchBox from "./SearchBox";
import BlogListCard from "./BlogListCard";
import LinkButton from "./LinkButton";
import Heading from "./Heading";
import Text from "./Text";
import ReactPaginate from "react-paginate";
import { useState } from "react";

export default function BlogList({
  filteredData,
  handleSearch,
  searchKeyword,
  isPending,
}) {

 
  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* Serach Box  */}
      <SearchBox searchHandle={handleSearch} searchKeyword={searchKeyword} />

      {/* Map Results */}
      <div className="w-11/12 mx-auto mt-6">
        <div className="flex justify-between">
          <Heading text="Blog" />{" "}
          <div className="mt-4">
            <LinkButton to="/blog/manage" title="Create Post" />
          </div>
        </div>
        <div className=" my-5 ">
          {isPending===false ? (
            <>
              {currentItems.length === 0 && (
                <Text size="sm" text="Sorry No results found!" />
              )}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto pb-3">
                <BlogListCard filteredData={currentItems} />
              </div>

              <ReactPaginate
                className="text-white flex p-5 gap-1 mx-auto my-5 justify-center"
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                pageLinkClassName=" p-3 m-1 border b-2 rounded-md"
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                activeLinkClassName={"bg-slate-500"}
                previousLinkClassName="border b-2 rounded-md  px-3 py-2 mx-2 font-bold"
                nextLinkClassName="border b-2 rounded-md px-3 py-2 mx-2 font-bold"
                disabledLinkClassName="bg-slate-100 text-slate-900 "
              />
            </>
          ) : (
            <Text size="sm" text="Loading..." />
          )}{" "}
        </div>
      </div>
    </>
  );
}
