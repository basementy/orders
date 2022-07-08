import { Item } from '../../types';
import { apiClient } from '../client';

export const getItemService = async (id: string) =>
  apiClient<unknown, Item>({
    url: `/item/${id}`,
    method: 'GET',
  });

export const listItemsService = async () =>
  apiClient<unknown, Item[]>({
    url: '/item',
    method: 'GET',
  });