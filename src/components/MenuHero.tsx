"use client"

import React, {useEffect, useState} from 'react'
import MenuStrips from './MenuStrips';
import { Hero, Slide, Slider } from '@/components'
import Strip from '@/components/Strip'
import { urlFor } from '@/utils/sanity';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { SlideProps } from '@/types';

function MenuHero({menu} : {menu: any}){

  console.log(menu);

  const strips = [
    {
      className:"breakfast-strip active",
      title: menu.Breakfast?.details.title,
      subtitle: menu.Breakfast?.details.subtitle,
      imgUrl: urlFor(menu.Breakfast?.details?.stripImage)?.url(),
      link: "#breakfast"
    },

       {
         className:"lunch-strip",
         imgUrl:urlFor(menu.Lunch?.details?.stripImage)?.url(),
         title: menu.Lunch?.details.title,
         subtitle: menu.Lunch?.details.subtitle,
         link: "#lunch-menu"

       },

        {
          imgUrl:urlFor(menu.Dinner?.details?.stripImage)?.url(),
          title: menu.Dinner?.details.title,
          subtitle: menu.Dinner?.details.subtitle,
          className: "Dinner-strip",
          link: "#dinner-menu"
        },

        {
          className: "bakery-strip",
          imgUrl: urlFor(menu.Bakery?.details?.stripImage)?.url(),
          title: menu.Bakery?.details.title,
          subtitle: menu.Bakery?.details.subtitle,
          link: "#bakery-menu"
        }
  ];

  const slides : SlideProps[] = [];

  Object.values(menu).forEach((menu: any, idx: number) => {
  
    const {coverImage, sectionSubtitle, headline, _id, slug, title, subtitle} = menu.details;
  
      if(coverImage !== null){
        const slide = {
          imageUrl: urlFor(coverImage).url(),
          title1: title,
          title2: '',
          subtitle: subtitle,
          text: "",
          link: `/menu/#${slug}`,
          linkText: "View Menu",
          secondary: false,
          active: idx == 0 ? true : false,
        } 
        
        slides.push(slide);
      }
   
  });

  return (
    <header className="menu-header">

        <MenuStrips strips={strips}/>
        
        <Hero page='menu' slides={slides} className="menu-slider" />

      </header>
  )
}

export default MenuHero