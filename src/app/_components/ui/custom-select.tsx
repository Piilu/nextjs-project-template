"use client";
import React, { useEffect, useState } from 'react'
import { NameValue } from '~/lib/type'
import SimpleSelect from './simple-select'
import { useWindowSize } from 'usehooks-ts';
import { constant } from '~/lib/constant';
import { SimpleDrawer } from './simple-drawer';
import { Button } from './button';
import { cn } from '~/lib/utils';
import { ChevronDown } from 'lucide-react';
import { DrawerClose } from './drawer';
import DirectionArrow from './direction-arrow';

type DirectionSelectProps = {
    value?: string,
    onValueChange?: ((value: string) => void) | undefined
    data?: NameValue[]
    placeholder?: string
}

export default function CustomSelect(props: DirectionSelectProps)
{
    const { value, onValueChange, data, placeholder } = props;
    const { width = 0 } = useWindowSize()
    const [isMobile, setMobile] = useState(false);


    useEffect(() =>
    {
        if (width < constant.mobileWidth)
        {
            setMobile(true);
        }
        else
        {
            setMobile(false);
        }
    }, [width])

    if (!isMobile)
    {

        return (
            <SimpleSelect
                onValueChange={onValueChange}
                value={value}
                data={data}
                placeholder={placeholder} />
        )
    }

    return (
        <SimpleDrawer
            title="Vali suund"
            className='p-3'
            trigger={
                <Button
                    size={"lg"}
                    variant={"outline"}
                    className={cn(
                        "justify-start text-left font-normal p-3 py-6 relative"
                    )}
                >
                    {!value ? placeholder : data?.find(item => item.value === value)?.name}
                    <ChevronDown className='h-4 w-4 right-3 opacity-50 absolute' />
                </Button>
            }>
            <div className='flex flex-col gap-3'>
                {data?.map(item =>
                {
                    const start = item.name.split("-")[0];
                    const end = item.name.split("-")[1];
                    return (
                        <DrawerClose key={`${item.value}`} asChild>
                            <Button
                                className='justify-between items-center px-5 py-6'
                                onClick={() => onValueChange ? onValueChange(item.value) : null}
                                size={"lg"}
                                variant={item.value === value
                                    ? "default"
                                    : "outline"}>
                                <span className='w-32 text-md text-left'>
                                    {start}
                                </span>
                                <DirectionArrow />
                                <span className='w-32 text-md text-right'>
                                    {end}
                                </span>
                            </Button>
                        </DrawerClose>
                    )
                })}
            </div>
        </SimpleDrawer>
    )
}
