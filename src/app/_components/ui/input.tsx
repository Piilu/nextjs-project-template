import { Loader2Icon, Check } from "lucide-react";
import * as React from "react"

import { cn } from "~/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>
{
  isLoading?: boolean;
  success?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) =>
  {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />

        {props.isLoading &&
          <span className="absolute inset-0 m-auto mr-1 h-10 w-[3em] rounded-3xl text-green-400 flex items-center justify-center">
            <Loader2Icon className="animate-spin" />
          </span>
        }
        {props.success &&

          <span
            className="absolute inset-0 m-auto mr-1 h-10 w-[3em] rounded-3xl text-green-400 flex items-center justify-center">
            <Check />
          </span>
        }
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
