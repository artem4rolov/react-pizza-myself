import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";

import { setPage } from "../../redux/slices/filterSlice";

import s from "./Pagination.module.scss";

const Pagination = () => {
  const dispatch = useDispatch();

  const changePage = ({ selected }) => {
    dispatch(setPage(selected));
  };

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={3}
      onPageChange={changePage}
      containerClassName={s.navigationButtons}
      previousLinkClassName={s.previousButton}
      nextLinkClassName={s.nextButton}
      disabledClassName={s.navigationDisabled}
      activeClassName={s.navigationActive}
    />
  );
};

export default Pagination;
