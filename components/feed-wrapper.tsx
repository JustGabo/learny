
import React from 'react'

type Props = {
    children: React.ReactNode
}

export const FeedWrapper = ({children}: Props) => {
  return (
    <main className='flex-1 relative top-0 pb-10'>{children}</main>
  )
}
