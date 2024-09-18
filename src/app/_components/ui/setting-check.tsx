import React from 'react'
import { Switch } from './switch';
import { Label } from './label';
import Loader from './loader';

type SettingCheckProps = {
    onChange?: (value: boolean) => void,
    checked?: boolean | null,
    label?: string
    id?: string
    isLoading?: boolean
}

export default function SettingCheck(props: SettingCheckProps)
{
    const { checked, id, onChange, label, isLoading } = props;
    return (
        <div className="flex items-center justify-between gap-2 relative">
            <Label className='w-full text-md' htmlFor={id}>{label}</Label>
            <Switch disabled={isLoading} onCheckedChange={(value) => onChange && onChange(value)} checked={checked ?? false} id={id} />
            {isLoading && <Loader className='absolute right-10' />}
        </div>
    )
}
