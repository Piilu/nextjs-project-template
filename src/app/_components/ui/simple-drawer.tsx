import React, { type ReactNode } from 'react'
import
{
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
}
    from './drawer';
import { cn } from '~/lib/utils';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

type SimpleDrawerProps = {
    trigger?: string | ReactNode,
    triggerClassName?: string,
    className?: string,
    title?: string | ReactNode,
    children?: string | ReactNode,
    footer?: string | ReactNode,
    description?: string | ReactNode,
    open?: boolean
    onOpenChange?: (value: boolean) => void;
}

export function SimpleDrawer(props: SimpleDrawerProps)
{
    const { title,
        children,
        footer,
        triggerClassName,
        trigger,
        description,
        className,
        open,
        onOpenChange
    } = props;

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerTrigger className={cn(triggerClassName)} asChild>
                {trigger}
            </DrawerTrigger>
            <DrawerContent className={cn('p-1 pb-2', className)}>
                <VisuallyHidden>
                    <DrawerTitle>{title ? title : "-"}</DrawerTitle>
                    <DrawerDescription>{description ? description : "-"}</DrawerDescription>
                </VisuallyHidden>
                {
                    title ?? description ?
                        <DrawerHeader>
                            {
                                title &&
                                <DrawerTitle>{title}</DrawerTitle>
                            }
                            {description &&
                                <DrawerDescription>{description}</DrawerDescription>
                            }
                        </DrawerHeader>
                        : null}
                {children}
                <DrawerFooter>
                    {footer}
                </DrawerFooter>
            </DrawerContent>
        </Drawer >

    )
}
