import React from 'react'

type Props = {
    children: React.ReactNode
}

export const StickyWrapper = ({children}: Props) => {
  return (
    <main className='hidden lg:block w-[368px] sticky self-end bottom-6'>
        <section className='min-h-[calc(100dvh-48px)] sticky top-6 flex flex-col gap-y-4'>
            {children}
        </section>
    </main>
  )
}
