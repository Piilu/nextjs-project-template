import React from 'react'
import { Label } from './label'
import { Input } from './input'
import { Asterisk } from 'lucide-react';

type SimpleInputProps = {
  placeholder?: string;
  error?: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  id?: string;
  value?: string;
  required?: boolean
  onChange?: (value: string) => void,
}

export default function SimpleInput(props: SimpleInputProps)
{
  const {
    id,
    type,
    label,
    placeholder,
    error,
    value,
    required,
    onChange
  } = props;
  return (
    <div className='w-full'>
      <Label className='relative' htmlFor={id}>{label}
        {required ?
          <Asterisk
            className="h-4 w-4 absolute top-0 right-[-1.2em] text-destructive" />
          : null}
      </Label>
      <Input
        className='mt-2'
        onChange={(e) => onChange ? onChange(e.currentTarget.value) : null}
        type={type}
        value={value}
        id={id}
        placeholder={placeholder} />
      {error ?
        <p className="text-destructive">{error}</p>
        : null}
    </div>
  )
}
