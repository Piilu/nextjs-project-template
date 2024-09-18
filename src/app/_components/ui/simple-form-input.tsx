import React, { type ReactNode } from 'react'
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from './form'
import { Asterisk, CircleAlert, CircleCheck } from 'lucide-react';

type SimpleFormItemProps = {
  label: string,
  description?: string,
  children: ReactNode,
  required?: boolean,
  error?: string,
  success?: string,
}

export default function SimpleFormItem(props: SimpleFormItemProps)
{
  const {
    label,
    description,
    children,
    required,
    error,
    success
  } = props;

  return (
    <FormItem className="w-full">
      <FormLabel
        className="relative">
        {label}
        {required ?
          <Asterisk
            className="h-4 w-4 absolute top-0 right-[-1.2em] text-destructive" />
          : null}
      </FormLabel>
      <FormControl className="border">
        <>
          {children}
          {error &&
            <small className="text-destructive flex items-center gap-1 text-xs"><CircleAlert className="h-3 w-3" />{error}</small>
          } 
          {success &&
            <small className=" text-green-500 flex items-center gap-1 text-xs"><CircleCheck className="h-3 w-3" />{success}</small>
          }
        </>
      </FormControl>
      {description ?
        <FormDescription>{description}</FormDescription>
        : null}
      <FormMessage />
    </FormItem>
  )
}
