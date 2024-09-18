import React from 'react'
import { cn } from '~/lib/utils'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from './button'

type FilterCheckboxProps = {
    className?: string
    label?: string,
    checked?: boolean,
    onChange: (checked: boolean) => void;
}
export default function FilterCheckbox(props: FilterCheckboxProps)
{
    const { className, label, checked, onChange } = props;
    return (
        <Button size={"sm"} onClick={() => onChange(!checked)} variant={checked ? "default" : "outline"} className={cn("rounded-sm justify-start p-2", className)}>
            <div className='flex items-center justify-between gap-1'>
                {
                    checked &&
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        layoutId='check'>
                        <Check className='h-5 w-5' />
                    </motion.div>
                }
                <motion.span layoutId='check-button'>
                    {label}
                </motion.span>
            </div>
        </Button>
    )
}
