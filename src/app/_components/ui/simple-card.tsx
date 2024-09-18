import React, { type ReactNode } from 'react'
import
{
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from './card'
import { cn } from '~/lib/utils';
import SimpleTooltip from './simple-tooltip';

type SimpleCardProps = {
  title?: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
  className?: string;
  mainClassName?: string;
  titleClassName?: string;
  headerClassName?: string;
  footer?: ReactNode;
  footerClassName?: string;
  outsideLabel?: string;
  onClick?: () => void;
}

export default function SimpleCard(props: SimpleCardProps)
{
  const {
    title,
    description,
    children,
    className,
    titleClassName,
    headerClassName,
    footer,
    mainClassName,
    footerClassName,
    outsideLabel,
    onClick } = props;

  return (
    <div>
      {
        outsideLabel &&
        <small className='ml-1 text-sm'>{outsideLabel}</small>
      }
      <Card onClick={onClick} className={cn(mainClassName, outsideLabel && "mt-1")}>
        {title ?? description ?
          <CardHeader className={cn('p-5 mb-0 pb-0 m-0', headerClassName)}>
            <CardTitle className={cn("pb-0 mb-0", titleClassName)}>{title}</CardTitle>
            {
              description ?

                <CardDescription className={cn("truncate", titleClassName)}>
                  <SimpleTooltip label={description ?? ""}>
                    {description}
                  </SimpleTooltip>
                </CardDescription>
                : null
            }
          </CardHeader>
          : null
        }
        {children ?
          <CardContent className={cn("flex flex-col gap-3 p-5", className)}>
            {children}
          </CardContent>
          : null}
        {footer ?
          <CardFooter className={footerClassName}>{footer}</CardFooter>
          : null}
      </Card>
    </div>
  )
}
