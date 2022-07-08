import { Order } from '../../types';
import { apiClient } from '../client';

export type CreateOrderPayload = Omit<Order, 'id' | 'createAt' | 'updatedAt'>;

export const createOrderService = async (
  payload: CreateOrderPayload,
) =>
  apiClient<CreateOrderPayload, Order>({
    url: '/order',
    method: 'POST',
    data: payload,
  });

export type UpdateOrderPayload = Order;

export const updateOrderService = async (
  payload: UpdateOrderPayload,
) =>
  apiClient<UpdateOrderPayload, Order>({
    url: `/order/${payload.id}`,
    method: 'POST',
    data: payload,
  });

export const deleteOrderService = async (id: string) =>
  apiClient<unknown, unknown>({
    url: `/order/${id}`,
    method: 'DELETE',
  });