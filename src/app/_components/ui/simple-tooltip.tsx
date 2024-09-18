import React, { type ReactNode } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

type SimpleTooltipProps = {
  children: ReactNode,
  label: string | ReactNode,
}

export default function SimpleTooltip(props: SimpleTooltipProps)
{
  const { label, children } = props;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent className="w-max-48">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  )
}
