import React from "react";
import SearchBox from "./SearchBox";
import BlogListCard from "./BlogListCard";
import LinkButton from "./LinkButton";
import Heading from "./Heading";
import Text from "./Text";
export default function BlogList(props) {
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
          <Heading text="Blog Posts" />{" "}
          <div className="mt-4">
            <LinkButton to="/blog/manage" title="Create Post" />
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-5 ">
          {props.data == "true" ? (
            <>
              {props.filteredData.length === 0 && (
                <Text size="sm" text="Sorry No results found!" />
              )}
              <BlogListCard filteredData={props.filteredData} />
            </>
          ) : (
            <Text size="sm" text="Loading..." />
          )}{" "}
        </div>
      </div>
    </>
  );
}
