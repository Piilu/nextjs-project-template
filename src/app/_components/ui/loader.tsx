
import { Loader2Icon } from 'lucide-react'
import React from 'react'
import { cn } from '~/lib/utils';

type LoaderProps = {
    className?: string
}

export default function Loader(props: LoaderProps)
{
    const { className } = props;
    return (
        <Loader2Icon className={cn("mr-2 h-4 w-4 animate-spin", className)} />
    )
}
