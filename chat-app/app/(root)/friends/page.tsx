import ConversationFallback from '@/components/shared/conversations/ConversationFallback'
import ItemList from '@/components/shared/item-list/ItemList'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Friendpage = (props: Props) => {
  return (
    <>
      <ItemList title="Freinds">
        Friends Page
      </ItemList>
      <ConversationFallback/>
    </>
  )
}

export default Friendpage