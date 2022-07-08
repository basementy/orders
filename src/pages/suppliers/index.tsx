import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { styled } from '../../theme'
import { Supplier } from '../../types'

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

const SuppliersList: NextPage = () => {
  const router = useRouter();

  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  return (
    <Flex css={{ width: '100%', height: '100%', backgroundColor: '$black', justifyContent: 'center' }}>
      <Flex css={{ width: '100%', maxWidth: '720px', flexDirection: 'column', padding: '$md' }}>
        <Flex css={{ flexDirection: 'column', marginBottom: '$md' }}>
          <Title>Suppliers</Title>
          <Text css={{ color: '$gray700'}}>That&apos;s all your suppliers</Text>
        </Flex>
        <Flex css={{ justifyContent: 'flex-end', marginBottom: '$lg' }}>
          <Button onClick={() => router.push('/suppliers/create')}>New +</Button>
        </Flex>
        <Table>
          <thead>
            <TableRow>
              <TableTh>#</TableTh>
              <TableTh>Name</TableTh>
              <TableTh>Orders</TableTh>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableTd>-</TableTd>
              <TableTd>-</TableTd>
              <TableTd>-</TableTd>
            </TableRow>
          </tbody>
        </Table>
      </Flex>
    </Flex>
  )
}

export default SuppliersList
