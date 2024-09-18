"use client"

import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Button, buttonVariants } from "./button"
import { cn } from "~/lib/utils"
import { dateHelper } from "~/lib/date-helper"
import { Calendar } from "./calendar"
import { CalendarIcon } from "lucide-react"
import { et } from "date-fns/locale/et"
import { useWindowSize } from "usehooks-ts"
import { useEffect, useState } from "react"
import { SimpleDrawer } from "./simple-drawer"
import { constant } from "~/lib/constant"

type DatePickerProps = {
  value?: Date | undefined,
  required?: boolean,
  onSelect?: (value: Date | undefined) => void;
}

export function DatePicker(props: DatePickerProps)
{
  const { value, onSelect, required } = props;
  const { width = 0 } = useWindowSize()
  const [isMobile, setMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() =>
  {
    if (width < constant.mobileWidth)
    {
      setMobile(true);
    }
    else
    {
      setMobile(false);
      setOpen(false);
    }
  }, [width])

  function handleDrawerSubmit(date?: Date)
  {
    onSelect ? onSelect(date) : null;
    setOpen(false);

  }

  if (isMobile)
  {
    return (
      <SimpleDrawer
        open={open}
        onOpenChange={(value) => setOpen(value)}
        trigger={
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? dateHelper.formatDate(value) : <span>Vali kuupäev</span>}
          </Button>
        }
      >
        <Calendar
          mode="single"
          defaultMonth={value}
          className="h-full w-full flex"
          classNames={{
            nav_button_next: "absolute right-1 -top-1 w-[3rem] h-[2.5rem]",
            nav_button_previous: "absolute -top-1  left-1 w-[3rem] h-[2.5rem]",
            nav: "mb-6",
            months:
              "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
            month: "space-y-4 w-full flex flex-col",
            table: "w-full h-full border-collapse space-y-1",
            day: cn(
              buttonVariants({ variant: "ghost" }),
              "h-10 w-[100%] p-0 font-normal aria-selected:opacity-100"
            ),
            head_row: "",
            row: "w-full mt-2",
          }}
          disabled={{
            before: dateHelper.today()
          }}
          required={required}
          selected={value}
          locale={et}
          onSelect={handleDrawerSubmit}
          initialFocus
        />
      </SimpleDrawer>
    )
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? dateHelper.formatDate(value) : <span>Vali kuupäev</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          disabled={{
            before: dateHelper.today()
          }}
          required={required}
          selected={value}
          defaultMonth={value}
          locale={et}
          onSelect={(date) => onSelect ? onSelect(date) : undefined}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
