import React, { ReactNode } from 'react'
import SimpleCard from './simple-card';

type MobileBottomMenuProps = {
    children: ReactNode
}
export default function MobileBottomMenu(props: MobileBottomMenuProps)
{
    const { children } = props;
    return (
        <SimpleCard
            className='px-3 py-3'
            mainClassName='fixed w-full left-0 z-10 bottom-0 rounded-none border-none h-30' >
            {children}
        </SimpleCard>
    )
}
