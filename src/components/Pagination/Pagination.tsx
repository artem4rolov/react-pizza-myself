import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

import { setPage } from "../../redux/slices/filterSlice";

import s from "./Pagination.module.scss";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state: any) => state.filter);

  const changePage = (selected) => {
    dispatch(setPage(selected));
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
