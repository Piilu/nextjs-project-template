"use client";
import React, { type ReactNode } from 'react'
import { Label } from './label';
import { RadioGroupItem } from './radio-group';
import { cn } from '~/lib/utils';

type FancyRadioGroupItemProps = {
    title: string,
    description: string,
    value: string,
    icon?: ReactNode,
    className?: string,
    contentClassName?: string,
    checked?: boolean,
}

export function FancyRadioGroupItem(props: FancyRadioGroupItemProps)
{
    const { title, description, checked, value, icon, className, contentClassName } = props;
    return (
        <div className={cn('w-full', className)}>
            <RadioGroupItem
                value={value}
                checked={checked}
                id={value}
                className="peer sr-only"
                aria-label={value}
            />
            <Label
                htmlFor={value}
                className={cn("flex h-full rounded-md justify-between gap-3 items-center border-2 border-muted bg-transparent p-4 hover:bg-accent", checked && "bg-accent border-primary")}>
                <div className={cn('flex flex-col gap-3', contentClassName)}>
                    <h4 className='text-xl  tracking-tight'>{title}</h4>
                    {description && <small className='text-sm text-muted-foreground'>{description}</small>}
                </div>
                <span>
                    {icon}
                </span>
            </Label>
        </div>
    )
}
