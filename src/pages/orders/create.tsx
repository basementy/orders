import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

import { listItemsService } from '../../services'
import { styled } from '../../theme'
import { Item, OrderItem } from '../../types/'

const Flex = styled('div', {
  display: 'flex'
})

const Title = styled('h1', {
  fontSize: '24px',
})

const Text = styled('span', {
  fontSize: '16px',
})

const Button = styled('button', {
  fontSize: '16px',
  padding: '16px',
  paddingBlock: '10px',
  backgroundColor: '$white',
  color: '$black',
  border: 'none',
  borderRadius: '$xs',
  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  }
})

const Input = styled('input', {
  fontSize: '16px',
  padding: '16px',
  paddingBlock: '10px',
  border: '1px solid',
  borderColor: '$white',
  backgroundColor: '$transparent',
  outline: 'none',
})

const SelectContainer = styled('div', {
  width: '240px',
  fontSize: '16px',
  padding: '16px',
  border: '1px solid',
  paddingBlock: '10px',
  borderColor: '$white',
  backgroundColor: '$transparent',
  outline: 'none',
})

const Select = styled('select', {
  width: '100%',
  fontSize: '16px',
  border: 'none',
  backgroundColor: '$transparent',
  outline: 'none',
})

const OrderCreate: NextPage = () => {
  const router = useRouter();

  const [items, setItems] = useState<Item[]>([])

  const [description, setDescription] = useState('');
  const [orderItems, setOrderItems] = useState<Omit<OrderItem, 'id' | 'order' | 'createdAt' | 'updatedAt'>[]>([]);

  const getItemsList = async () => {
    const { data } = await listItemsService();

    setItems(data);
  }

  const handleInsertItem = () => {
    setOrderItems((values) => [...values,
      {
        item: undefined,
        price: 0
      }
    ]);
  }

  const handleUpdateItem = (index: number, value: Omit<OrderItem, 'id' | 'order' | 'item' | 'createdAt' | 'updatedAt'> & { item?: { id: number } }) => {
    setOrderItems((values) => {
      const newValues = [...values];
      const getItem = items.find(item => item.id === value.item?.id);

      newValues[index] = { ...value, item: getItem };

      return newValues;
    });
  }

  const handleDeleteItem = (index: number) => {
    setOrderItems((values) => [...values.slice(0, index), ...values.slice(index + 1)]);
  }

  const hasValidForm = useMemo(() => !!description && orderItems.length > 0, [description, orderItems])

  useEffect(() => {
    getItemsList();
  }, [])

  return (
    <Flex css={{ width: '100%', height: '100%', backgroundColor: '$black', justifyContent: 'center' }}>
      <Flex css={{ width: '100%', maxWidth: '720px', flexDirection: 'column', padding: '$md' }}>
        <Flex css={{ flexDirection: 'column', marginBottom: '$md' }}>
          <Title>Create order</Title>
          <Text css={{ color: '$gray700'}}>Fill the fields below to create your order</Text>
        </Flex>
        <Flex css={{ flexDirection: 'column', gap: '$md' }}>
          <Flex css={{ flexDirection: 'column', gap: '$md' }}>
            <Text>Description</Text>
            <Input placeholder="Set order description..." value={description} onChange={({ target }) => setDescription(target.value)} />
          </Flex>
          <Flex css={{ flexDirection: 'column', gap: '$md' }}>
            <Flex css={{ justifyContent: 'space-between' }}>
              <Text>Items</Text>
              <Text css={{ textDecoration: 'underline', color: '$gray700', cursor: 'pointer' }} onClick={() => handleInsertItem()}>Add new +</Text>
            </Flex>
            {orderItems.map((orderItem, idx) => (
              <Flex key={idx} css={{ flexDirection: 'column', gap: '$sm' }}>
                <Flex css={{ justifyContent: 'space-between'}}>
                  <SelectContainer>
                    <Select
                      value={orderItem?.item?.id}
                      onChange={({ target }) => handleUpdateItem(idx, {
                        ...orderItem,
                        item: {
                          id: Number(target.value),
                        }
                      })}
                    >
                      <>
                        <option disabled>Select an item</option>
                        {items.map((item) => (
                          <option key={item.id} value={item.id}>{item.description}</option>
                        ))}
                      </>
                    </Select>
                  </SelectContainer>
                  <Flex css={{ alignItems: 'center', gap: '$md'}}>
                    <Text>Valor</Text>
                    <Input
                      type="number"
                      value={orderItem.price}
                      css={{ width: '100px' }}
                      onChange={({ target }) => handleUpdateItem(idx, {
                        ...orderItem,
                        price: Number(target.value),
                      })}
                    />
                  </Flex>
                </Flex>
                <Text css={{ textDecoration: 'underline', color: '$gray700', cursor: 'pointer' }} onClick={() => handleDeleteItem(idx)}>Remove item</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex css={{ justifyContent: 'flex-end', marginTop: '$lg', gap: '$md' }}>
          <Button
            css={{ border: '1px solid', borderColor: '$white', backgroundColor: '$transparent', color: '$white' }}
            onClick={() => router.push('/orders')}
          >
            Cancel
          </Button>
          <Button disabled={!hasValidForm}>Submit</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default OrderCreate
