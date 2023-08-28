import React, { ReactElement, RefObject } from 'react'
import { IoChevronUp } from 'react-icons/io5'


export interface BackToTopProps {
  classes? : string
}

const BackToTop = ({classes} : BackToTopProps) => {
  return (
    <a href="#top" className={`back-top-btn ${classes} `} aria-label="back to top" data-back-top-btn
      >
        <IoChevronUp aria-hidden="true"/> 
      </a>
  )
}

export default BackToTop