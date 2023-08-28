import { ButtonProps } from '@/types'
import React from 'react'

export const Button = ({type, classes, text, onclick, disabled} : ButtonProps) => {
  return (
    <button type={type} className={`btn btn-secondary ${classes}`} onClick={() => { onclick && onclick() }} >
            <span className="text text-1">{text}</span>
            <span className="text text-2" aria-hidden="true">{text}</span>
    </button>
  )
}
