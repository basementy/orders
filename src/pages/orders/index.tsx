import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { listOrdersService } from '../../services'
import { styled } from '../../theme'
import { Order } from '../../types'

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
  cursor: 'pointer'
})

const Table = styled('table', {
  width: '100%',
  fontSize: '16px',
})

const TableTh = styled('th', {
  padding: '8px',
  textAlign: 'left',
  verticalAlign: 'top',
  fontSize: '16px',
})

const TableTd = styled('td', {
  padding: '8px',
  textAlign: 'left',
  verticalAlign: 'top',
  fontSize: '16px',
})

const TableRow = styled('tr')

const OrdersList: NextPage = () => {
  const [orders, setOrders] = useState<Order[]>([])

  const router = useRouter();

  const getOrdersList = async () => {
    const { data } = await listOrdersService();

    setOrders(data);
  }

  const getOrderTotal = (order: Order) => {
    return order.items.reduce((acc, item) => {
      return acc + item.price * 1;
    }, 0);
  }

  useEffect(() => {
    getOrdersList();
  }, [])

  return (
    <Flex css={{ width: '100%', height: '100%', backgroundColor: '$black', justifyContent: 'center' }}>
      <Flex css={{ width: '100%', maxWidth: '720px', flexDirection: 'column', padding: '$md' }}>
        <Flex css={{ flexDirection: 'column', marginBottom: '$md' }}>
          <Title>Orders</Title>
          <Text css={{ color: '$gray700'}}>That&apos;s all your orders</Text>
        </Flex>
        <Flex css={{ justifyContent: 'flex-end', marginBottom: '$lg' }}>
          <Button onClick={() => router.push('/orders/create')}>New +</Button>
        </Flex>
        <Table>
          <thead>
            <TableRow>
              <TableTh>#</TableTh>
              <TableTh>Description</TableTh>
              <TableTh>Items</TableTh>
              <TableTh>Total</TableTh>
            </TableRow>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableTd>{order.id}</TableTd>
                <TableTd>{order.description}</TableTd>
                <TableTd>{order.items.length}</TableTd>
                <TableTd>{getOrderTotal(order)}</TableTd>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Flex>
    </Flex>
  )
}

export default OrdersList
