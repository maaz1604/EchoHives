import React from 'react'
import DesktopNav from './nav/DesktopNav'
import MobileNav from './nav/MobileNav'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = React.PropsWithChildren<{}>

const SidebarWrapper = ({children}:Props) => {
  return (
    <div className='h-full w-full flex flex-col lg:flex-row p-4 gap-4'>
        <MobileNav/>
        <DesktopNav/>
        <main className='h-[calc(100%-80px)] lg:h-full w-full gap-4 flex'>
        {children}
        </main>
    </div>
  )
}

export default SidebarWrapper