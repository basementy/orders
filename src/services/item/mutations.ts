import { Item } from '../../types';
import { apiClient } from '../client';

export type CreateItemPayload = Omit<Item, 'id' | 'orderItems' | 'createdAt' | 'updatedAt'>;

export const createItemService = async (
  payload: CreateItemPayload,
) =>
  apiClient<CreateItemPayload, Item>({
    url: '/item',
    method: 'POST',
    data: payload,
  });

export type UpdateItemPayload = Item;

export const updateItemService = async (
  payload: UpdateItemPayload,
) =>
  apiClient<UpdateItemPayload, Item>({
    url: `/item/${payload.id}`,
    method: 'POST',
    data: payload,
  });

export const deleteItemService = async (id: string) =>
  apiClient<unknown, unknown>({
    url: `/item/${id}`,
    method: 'DELETE',
  });