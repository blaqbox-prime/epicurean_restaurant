/* eslint-disable jsx-a11y/anchor-is-valid */
import { ServiceProps } from '@/types'
import Link from 'next/link'
import React, { HTMLProps } from 'react'

function Service({title, linkText, imgUrl, width = 285, height = 336, alt, link} : ServiceProps) {
  return (
    <li>
                <div className="service-card">
                  <Link href={link} className="has-before hover:shine">
                    <figure className="card-banner img-holder" >
                      <img src={imgUrl} alt={alt} width={width} height={height} loading="lazy" className="img-cover" />
                    </figure>
                  </Link>
                  <div className="card-content">
                    <h3 className="title-4 card-title">
                      <a href="#">{title}</a>
                    </h3>

                    <Link href={link} className="btn-text hover-underline label-2">{linkText}</Link>
                  </div>
                </div>
              </li>
  )
}

export default Service