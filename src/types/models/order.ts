import { OrderItem } from "./order-item";
import { Supplier } from "./supplier";

export interface Order {
  id: number;
  items: OrderItem[];
  supplier: Supplier;
  description: string;
  createdAt: string;
  updatedAt: string;
}