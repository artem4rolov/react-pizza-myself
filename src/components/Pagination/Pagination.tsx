import React from "react";
import ReactPaginate from "react-paginate";

import { setPage } from "../../redux/filter/slice";

import s from "./Pagination.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const Pagination = () => {
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
