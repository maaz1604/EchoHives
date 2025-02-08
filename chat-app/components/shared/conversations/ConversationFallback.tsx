import { Card } from '@/components/ui/card'
import React from 'react'

const ConversationFallback = () => {
  return (
    <Card className='hidden lg:flex h-full w-full items-center justify-center p-2 bg-secondary text-secondary-foreground'>
        Select/Start a conversation to get started!
    </Card>
)
}

export default ConversationFallback