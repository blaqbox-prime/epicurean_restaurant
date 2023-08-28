"use client"

import React, { useEffect, useState } from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import Strip from './Strip';

const MenuStrips = ({strips}: {strips: any[]}) => {


   

  return (
    <div className='menu-strips w-full'>
        {strips.map((strip: any) => (
          <Strip
          key={strip.name} 
          className={strip.className}
          imgUrl={strip.imgUrl}
          title={strip.title}
          subtitle={strip.subtitle}
          link={strip.link}
          />
        ))}

    </div>
  )
}

export default MenuStrips