import { Item } from "./item";
import { Order } from "./order";

export interface OrderItem {
  id: number;
  item?: Item;
  order?: Order;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}