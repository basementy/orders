import { Order } from "./order";

export interface Supplier {
  id: number;
  name: string;
  orders: Order[];
  createdAt: Date;
  updatedAt: Date;
}