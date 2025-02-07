import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = React.PropsWithChildren<{}>

const Conversationslayout = ({children}: Props) => {
  return (
    <div>{children}</div>
  )
}

export default Conversationslayout