import { LoadingProps } from '@/types'
import React from 'react'

function Loading({loaded} : LoadingProps) {
    return (
        <div className={`preload ${loaded && "loaded"}`} id='data-preload'>
                <div className="circle"></div>
                <div className="text">Epicurean</div>
            </div>
      )
}

export default Loading