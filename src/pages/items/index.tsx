import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { listItemsService } from '../../services/item'
import { styled } from '../../theme'
import { Item } from '../../types'

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

const ItemsList: NextPage = () => {
  const [items, setItems] = useState<Item[]>([])

  const router = useRouter();

  const getItemsList = async () => {
    const { data } = await listItemsService();

    setItems(data);
  }

  useEffect(() => {
    getItemsList();
  }, [])

  return (
    <Flex css={{ width: '100%', height: '100%', backgroundColor: '$black', justifyContent: 'center', overflow: 'auto' }}>
      <Flex css={{ width: '100%', maxWidth: '720px', flexDirection: 'column', padding: '$md' }}>
        <Flex css={{ flexDirection: 'column', marginBottom: '$md' }}>
          <Title>Items</Title>
          <Text css={{ color: '$gray700'}}>That&apos;s all your items</Text>
        </Flex>
        <Flex css={{ justifyContent: 'flex-end', marginBottom: '$lg' }}>
          <Button onClick={() => router.push('/items/create')}>New +</Button>
        </Flex>
        <Table>
          <thead>
            <TableRow>
              <TableTh>#</TableTh>
              <TableTh>Description</TableTh>
              <TableTh>Price</TableTh>
            </TableRow>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableTd>{item.id}</TableTd>
                <TableTd>{item.description}</TableTd>
                <TableTd>{item.referencePrice ?? '-'}</TableTd>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Flex>
    </Flex>
  )
}

export default ItemsList
