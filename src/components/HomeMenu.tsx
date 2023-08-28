"use client"

import React from 'react'
import MenuItem from './MenuItem'
import GridList from './GridList'
import { HomeMenuProps, MenuItemProps } from '@/types'
import { LinkButton } from './LinkButton'
import Image from 'next/image'
import { getHomepageMenu } from '@/utils/queries'
import { urlFor } from '@/utils/sanity'



async function HomeMenu() {

  const menu = await getHomepageMenu();
  console.log(menu); 

  return (
    <section className="section menu" aria-label="menu" id="menu">
          <div className="container">
            <p className="section-subtitle text-center label-2">
              Special Selection
            </p>
            <h2 className="headline-1 section-title text-center">
              Delicious Menu
            </h2>

            <GridList>
              {
                menu.map((menuItem: any) => {
                    const {alt, summary, image, price, title,isNew, seasonal} = menuItem;
                    return (
                        <MenuItem
                        key={title.replace(' ', '-')}
                title={title}
                summary={summary}
                imgUrl={urlFor(image).url()}
                price={price}
                alt={alt}
                seasonal={seasonal}
                isNew={isNew}
              />
                    )
                })
              }
            </GridList>

            <p className="menu-text text-center">
              During winter daily from <span className="span">7:00 </span> am to{" "}
              <span className="span">9:00 pm</span>
            </p>

            <LinkButton href="/menu" text="View All Menu" />

            <Image
              src="/assets/images/shape-5.png"
              width={921}
              height={103}
              loading="lazy"
              alt="shape"
              className="shape shape-2 move-anim"
            />

            <Image
              src="/assets/images/shape-6.png"
              width={343}
              height={345}
              loading="lazy"
              alt="shape"
              className="shape shape-3 move-anim"
            />
          </div>
        </section>
  )
}

export default HomeMenu