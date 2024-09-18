import React from 'react'
import
{
  DelayedSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
}
  from './select'
import { cn } from '~/lib/utils';
import type { NameValue } from '~/lib/type';

type SimpleSelectProps = {
  className?: string,
  triggerClassName?: string,
  value?: string,
  placeholder?: string,
  id?: string,
  data?: NameValue[] ,
  onValueChange?: (value: string) => void;
  isLoading?: boolean;
  defaultValue?: string,
  disabled?: boolean
}

export default function SimpleSelect(props: SimpleSelectProps)
{
  const {
    triggerClassName,
    className,
    id,
    value,
    data,
    placeholder,
    onValueChange,
    isLoading,
    defaultValue,
    disabled
  } = props;

  return (
    <DelayedSelect disabled={disabled} onValueChange={onValueChange} value={value} defaultValue={defaultValue}>
      <SelectTrigger className={cn(triggerClassName)}>
        <SelectValue id={id} placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={cn(className)}>
        {data?.map(item =>
        {
          return (
            <SelectItem className='py-3' key={`${item.value}`} value={item.value}>
              <div className='flex items-center gap-2'>
                {item.name}
              </div>
            </SelectItem>
          )
        })}
        {data?.length === 0 ? <p className="px-2">Ei leitud</p> : null}
        {isLoading && "Loading..."}
      </SelectContent>
    </DelayedSelect>
  )
}