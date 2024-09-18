import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { helper } from '~/lib/helper'

type SimpleAvatarProps = {
  src?: string | undefined | null,
  alt?: string,
  fallback?: string,
  className?: string
}

export default function SimpleAvatar(props: SimpleAvatarProps)
{
  const { src, alt, fallback, className } = props

  return (
    <Avatar className={className}>
      <AvatarImage src={src ?? ""} alt={alt} />
      <AvatarFallback className="uppercase">{helper.getFirstLetter(fallback ?? "?")}</AvatarFallback>
    </Avatar>
  )
}
