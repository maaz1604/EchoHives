import ItemList from '@/components/shared/item-list/ItemList'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = React.PropsWithChildren<{}>

const Conversationslayout = ({ children }: Props) => {
  return (
    <>
      <ItemList title='Conversations'>Conversations Page</ItemList>
      {children}</>
  )
}

export default Conversationslayout