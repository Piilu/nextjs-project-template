import { motion } from 'framer-motion'
import React, { type ReactElement, type FC, useState } from 'react'

type SegmentedTabData = {
    label: ReactElement | string,
    value: string,
}

type SegmentedTabsProps = {
    data: SegmentedTabData[],
    defaultValue?: string,
    id: string,
    onChange?: (value: string) => void;
}

const SegmentedTabs: FC<SegmentedTabsProps> = (props) =>
{
    const { data, defaultValue, id, onChange } = props
    const [value, setValue] = useState<string>(defaultValue ?? "")
    return (
        <div className='flex rounded-md p-1 bg-muted'>
            {data.map((item, index) =>
            {
                return (
                    <button  type='button' aria-label={item.value} onClick={() => { setValue(item.value); onChange !== undefined ? onChange(item.value) : "" }} className={`relative w-[100%] rounded-md p-2 select-none`} key={`ticket-type-${index.toString()}`
                    }>
                        {value === item.value && (
                            <motion.div transition={{ duration: 0.2 }} layoutId={`active-pill-${id}`} style={{ borderRadius: "calc(var(--radius) - 2px)" }} className='absolute shadow-md inset-0 bg-white dark:bg-accent' />
                        )}
                        <span className='relative z-10'>{item.label}</span>
                    </button>
                )
            })}

        </div >
    )
}

export default SegmentedTabs