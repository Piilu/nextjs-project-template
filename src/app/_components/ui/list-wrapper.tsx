import React, { type ReactNode } from 'react'
import { type PageMeta } from '~/server/service/paginate-service'
import SimplePagination from './simple-pagination';
import UniversalError from './universal-error';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type ListProps = {
    children: ReactNode,
    meta?: PageMeta
    onPageChange: (page: number) => void;
    id: string,
    top?: boolean,
    bottom?: boolean,
    isLoading?: boolean,
    loader?: ReactNode,
    empty?: ReactNode,
    actions?: ReactNode
    error?: {
        code?: number,
        message?: string
    }
}

export default function ListWrapper(props: ListProps)
{
    const
        {
            children,
            meta,
            actions,
            onPageChange,
            id,
            top,
            bottom,
            isLoading,
            loader,
            empty,
            error } = props;

    const [list] = useAutoAnimate();
    if (isLoading) return loader;
    if (error?.code) return <UniversalError code={error.code} />
    if (!meta) return children;
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex sm:flex-nowrap flex-wrap gap-3 sm:gap-0 '>
                {top &&
                    <SimplePagination id={`${id}-top`} onPageChange={onPageChange} meta={meta} justify='start' />
                }
                {actions}
            </div>
            <div ref={list} className='flex flex-col gap-3'>
                {meta.total == 0 && empty}
                {children}
            </div>
            {bottom &&
                <SimplePagination id={`${id}-bottom`} onPageChange={onPageChange} meta={meta} justify='start' />
            }
        </div>
    )
}
