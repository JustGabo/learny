import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SidebarItem from './sidebar-item'
import {ClerkLoading, ClerkLoaded, UserButton} from '@clerk/nextjs'
import {Loader} from 'lucide-react'

type Props ={
  className?: string
}

export const Sidebar = ({className}: Props) => {
  return (
    <nav className={cn('h-full  lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col ', className)}>
      <Link href='/learn'>
      <article className="pt-8 pl-4 pb-7 flex items-center gap-x-3 ">
        <Image src="/mascot.svg" height={36} width={36} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">
            Learny
          </h1>
        </article>
      </Link>
      <section className='flex flex-col gap-y-2 flex-1'>
        <SidebarItem label='Learn' href='/learn' iconSrc='/learn.svg'/>
        <SidebarItem label='Leaderboard' href='/leaderboard' iconSrc='/leaderboard.svg'/>
        <SidebarItem label='Quests' href='/quests' iconSrc='/quests.svg'/>
        <SidebarItem label='Shop' href='/shop' iconSrc='/shop.svg'/>
      </section>
      <section className='p-4 pb-10'>
        <ClerkLoading>
          <Loader className='h-5 w-5 text-muted-foreground animate-spin'/>
        </ClerkLoading>
          <ClerkLoaded>
            <UserButton afterSignOutUrl='/'/>
          </ClerkLoaded>
      </section>
    </nav>
  )
}
