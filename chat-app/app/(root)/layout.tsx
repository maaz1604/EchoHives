import SidebarWrapper from '@/components/shared/sidebar/SidebarWrapper'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = React.PropsWithChildren<{}>

const Layout = ({children}: Props) => {
    return (
        <>
        <SidebarWrapper>
        {children}
        </SidebarWrapper>
        </>
)
}

export default Layout