import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { styled } from '../../theme'
import { OrderItem } from '../../types'

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

const TableRow = styled('tr', {
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

const TextArea = styled('textarea', {
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

const SupplierCreate: NextPage = () => {
  const router = useRouter();

  const [description, setDescription] = useState();
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

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
            <Input placeholder="Set order description..." />
          </Flex>
          <Flex css={{ flexDirection: 'column', gap: '$md' }}>
            <Flex css={{ justifyContent: 'space-between' }}>
              <Text>Items</Text>
              <Text css={{ textDecoration: 'underline', color: '$gray700', cursor: 'pointer' }}>Add new +</Text>
            </Flex>
            <Flex css={{ justifyContent: 'space-between'}}>
              <SelectContainer>
                <Select>
                  <option disabled>Select an item</option>
                </Select>
              </SelectContainer>
              <Flex css={{ alignItems: 'center', gap: '$md'}}>
                <Text>Valor</Text>
                <Input type="number" css={{ width: '100px'}} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex css={{ justifyContent: 'flex-end', marginTop: '$lg', gap: '$md' }}>
          <Button
            css={{ border: '1px solid', borderColor: '$white', backgroundColor: '$transparent', color: '$white' }}
            onClick={() => router.push('/orders')}
          >
            Cancel
          </Button>
          <Button>Submit</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SupplierCreate
