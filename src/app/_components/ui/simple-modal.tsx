import React, { type ReactNode } from 'react'
import
{
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
}
  from './dialog'
import { cn } from '~/lib/utils';

type SimpleModalProps = {
  footer?: ReactNode;
  children?: ReactNode;
  title?: string | ReactNode;
  description?: string | ReactNode;
  open?: boolean;
  trigger?: ReactNode;
  className?: string;
  stickyHeader?: boolean;
  preventOutsideClose?: boolean,
  noClose?: boolean,
  onOpenChange?: (open: boolean) => void;
}

export default function SimpleModal(props: SimpleModalProps)
{
  const
    {
      footer,
      children,
      title,
      open,
      description,
      onOpenChange,
      className,
      stickyHeader,
      preventOutsideClose,
      noClose,
      trigger } = props;

  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      {trigger ?

        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        : null
      }
      <DialogContent
        noClose={noClose}
        onInteractOutside={(e) => preventOutsideClose ? e.preventDefault() : null}
        className={cn("lg:max-w-screen-lg overflow-y-scroll max-h-screen md:py-7 py-20", className)}>
        {
          title ?? description ?
            <DialogHeader className={stickyHeader ? "sticky top-0 z-10 bg-background" : ""}>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>
                {description}
              </DialogDescription>
            </DialogHeader>
            : null}

        {children}
        {footer ?
          <DialogFooter>
            {footer}
          </DialogFooter>
          : null
        }
      </DialogContent>
    </Dialog>

  )
}
