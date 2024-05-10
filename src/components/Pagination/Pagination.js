"use client";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import AllBlogPost from "../AllNews/AllBlogPost";
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, i) => (
          <div key={i}>
            <AllBlogPost />
          </div>
        ))}
    </>
  );
}
const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <div>
        <Items currentItems={currentItems} />
      </div>
      <div>
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          pageLinkClassName="page-link  "
          previousClassName="hidden  "
          nextClassName="next  flex items-center text-[#212529] px-4 border border-solid border-[#F0F0F0]"
          breakClassName="page-item mt-[19px]"
          breakLinkClassName="page-link "
          containerClassName="flex flex-wrap gap-x-3.5 "
          pageClassName="page-item block py-2.5 px-4 md:my-0 my-3 border border-solid border-[#F0F0F0]  font-normal text-sm text-titleColor"
          activeClassName="active block py-2.5 px-4 border border-solid border-[#F0F0F0]  font-normal text-sm bg-[#157EFB] text-white "
        />
        {/* <p className=" text-sm font-normal text-titleColor md:mt-5  lg:mt-0">
          Products from {itemOffset} to {itemOffset + itemsPerPage} of{" "}
          {items.length}
        </p> */}
      </div>
    </>
  );
};

export default Pagination;
