import React, { type ReactNode } from 'react'
import { cn } from '~/lib/utils';

type EmptyListProps = {
    className?: string,
    icon?: ReactNode,
    label?: string,
}

export default function EmptyList(props: EmptyListProps)
{
    const { className, label, icon } = props;
    return (
        <div className={cn('flex h-32 items-center justify-center', className)}>
            <div className='flex flex-col items-center gap-3'>
                {icon}
                <p >{label}</p>
            </div>
        </div>
    )
}
