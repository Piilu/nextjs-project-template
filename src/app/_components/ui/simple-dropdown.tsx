"use client"

import { type ReactNode } from "react";
import
{
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/app/_components/ui/dropdown-menu"
import { cn } from "~/lib/utils";


type SimpleDropdownProps = {
  trigger: ReactNode,
  data: ReactNode,
  showVersion?: boolean,
  className?: string,
}

export function SimpleDropdown(props: SimpleDropdownProps)
{
  const { data, trigger, showVersion } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72" loop>
        {data}
        {
          showVersion &&
          <>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="w-full flex text-xs p-1 opacity-60 justify-center">Versioon {process.env.NEXT_PUBLIC_APP_VERSION?.replace("v", "")}</DropdownMenuLabel>
          </>
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export interface DropdownData
{
  name?: string,
  info?: string,
  isVisible?: boolean,
  isLabel?: boolean
  path?: string,
  icon?: ReactNode
  onClick?: () => void,
  className?: string
  isSeparator?: boolean,
}

export function convertDataToNode(data: DropdownData[])
{
  return (
    <>
      {data?.filter(item => item.isVisible).map((item, index) =>
      {
        if (item.isLabel)
        {
          return <DropdownMenuLabel key={`${item.name}-nav-label-pro-${index}`} className={cn("text-xs opacity-70", item.className)}>
            <div className="flex items-center gap-3 ">
              {item.icon && item.icon}
              <div className="flex flex-col gap-0">
                {item.name}
                {item.info &&
                  <small className="m-0">{item.info}</small>
                }
              </div>
            </div>
          </DropdownMenuLabel>
        }
        // if (item.isSeparator)
        // {
        //   return(
        //     <DropdownMenuSeparator/>
        //   )
          
        // }
        if (item.path)
        {
          return (
            <a href={item.path} key={`${item.name}-nav-label-link-pro-${index}`}>
              <DropdownMenuItem
                className="flex items-center gap-3 hover:cursor-pointer"
                onClick={item.onClick}
                key={`${item.name}-nav-info-pro-${index}`}>
                {item.icon} {item.name}
              </DropdownMenuItem>
            </a>
          );
        }
        return (
          <DropdownMenuItem
            className={cn("flex items-center gap-3 hover:cursor-pointer", item.className)}
            onClick={item.onClick}
            key={`${item.name}-nav-button-pro-${index}`}>
            {item.icon} {item.name}
          </DropdownMenuItem>
        );
      })}
    </>
  )
}