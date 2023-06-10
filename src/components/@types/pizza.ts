export type PizzaType = {
  id: number;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  title: string;
  imageUrl: string;
  count?: number;
};

export type CartItem = {
  id: number;
  types: string;
  sizes: string;
  price: number;
  category: number;
  rating: number;
  title: string;
  imageUrl: string;
  count?: number;
};
