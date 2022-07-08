import { OrderItem } from "./order-item";

export interface Item {
  id: number;
  description: string;
  referencePrice: number;
  orderItems: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
}