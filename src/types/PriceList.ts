export type PriceListItem = {
  commodity: string;
  variety: string;
  minPrice: number;
  maxPrice: number;
  averagePrice: number;
};

export type PriceList = {
  _id: string;
  name: string;
  date: string;
  yardName: string;
  items: PriceListItem[];
  createdAt: string;
  updatedAt: string;
};
