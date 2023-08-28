import { menuSectionProps } from '@/types'
import React from 'react'
import GridList from './GridList'
import MenuItem from './MenuItem'
import { urlFor } from '@/utils/sanity'
import {PortableText} from '@portabletext/react'


const MenuSection = ({menu} : menuSectionProps) => {
  return menu.items.length == 0 ? <></> : (
    <section
        className={`${menu.details.title.toLowerCase()}-menu menu text-center section`}
        aria-label={`${menu.details.title.toLowerCase()}-menu`}
        id={`${menu.details.title.toLowerCase()}-menu`}
      >
        <div className="container">
          <p className="section-subtitle label-2">
            {menu.details.sectionSubtitle}
          </p>

          <h2 className="headline-1 section-title">{menu.details.title}</h2>
          <p className="section-text">
            {menu.details.headline}
          </p>

{/* 
    MENU ITEMS
*/}

          <GridList>
            {
                menu.items.map((item) => (
                    <MenuItem
                    key={item._id}
              title={item.title}
              summary={item.summary}
              imgUrl={urlFor(item.image).url()}
              price={item.price}
              alt={item.title.toLowerCase()}
              seasonal={item.seasonal}
              isNew={item.isNew}
            />
                ))
            }
          </GridList>
          </div>
      </section>
  )
}

export default MenuSection