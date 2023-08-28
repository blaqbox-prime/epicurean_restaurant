import { LinkButtonProps } from '@/types'
import React from 'react'

export const LinkButton = ({href, classes, text} : LinkButtonProps) => {
  return (
    <a href={href} className={`btn btn-secondary ${classes}`}>
            <span className="text text-1">{text}</span>
            <span className="text text-2" aria-hidden="true">{text}</span>
    </a>
  )
}
