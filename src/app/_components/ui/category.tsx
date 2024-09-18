import React, { type ReactNode } from 'react'

type CategoryProps = {
    label: string,
    children: ReactNode
}
export default function Category(props: CategoryProps)
{
    const { children, label } = props;
    return (
        <div className='flex flex-col gap-1'>
            <small className='text-sm'>{label}</small>
            {children}
        </div>
    )
}
