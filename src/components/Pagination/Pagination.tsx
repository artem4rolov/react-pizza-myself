import React from "react";
import ReactPaginate from "react-paginate";

import { setPage } from "../../redux/slices/filterSlice";

import s from "./Pagination.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.filter);

  // @ts-ignore
  const changePage = (selected) => {
    dispatch(setPage(selected.selected));
  };

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={3}
      initialPage={page}
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