import { Order } from '../../types';
import { apiClient } from '../client';

export const getOrderService = async (id: string) =>
  apiClient<unknown, Order>({
    url: `/order/${id}`,
    method: 'GET',
  });

export const listOrdersService = async () =>
  apiClient<unknown, Order[]>({
    url: '/order',
    method: 'GET',
  });