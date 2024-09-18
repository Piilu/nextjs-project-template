import React, { type ReactNode } from 'react'
import { cn } from '~/lib/utils';

type ContentProps = {
  children: ReactNode;
  title: string;
  actions?: ReactNode;
  titleClass?: string;
  className?: string;
  description?: string;
}

export default function Content(props: ContentProps)
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
    <div className={cn('flex flex-col gap-3', className)}>
      <div className="flex justify-between mb-3">
        <div>
          <h2 className={cn("text-2xl font-semibold", titleClass)}>{title}</h2>
          {description ?
            <small>{description}</small>
            : null}
        </div>
        <div>
          {actions}
        </div>
      </div>
      {children}
    </div>
  )
}