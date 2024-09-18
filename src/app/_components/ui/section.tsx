import React, { type ReactNode } from 'react'
import { cn } from '~/lib/utils';
import { Separator } from './separator';

type ContentProps = {
  children: ReactNode;
  title: string;
  actions?: ReactNode;
  titleClass?: string;
  className?: string;
  description?: string;
}

export default function Section(props: ContentProps)
{
  const
    {
      children,
      title,
      actions,
      titleClass,
      className,
      description
    } = props;
  return (
    <div className={cn('flex flex-col gap-3 ')}>
      <div className="flex gap-1 flex-col justify-between">
        <div className='flex flex-col'>
          <h2 className={cn("text-xl font-semibold", titleClass)}>{title}</h2>
          {description ?
            <small>{description}</small>
            : null}
        </div>
        <div>
          {actions}
        </div>
        <Separator />
      </div>
      <div className={cn('flex flex-col gap-3', className)}>
        {children}
      </div>
    </div>
  )
}