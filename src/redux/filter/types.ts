import { SortValueType } from "../../components/Sort/Sort";

export type FilterTypeSlice = {
  categoryId: number;
  sort: SortValueType;
  page: number;
};
