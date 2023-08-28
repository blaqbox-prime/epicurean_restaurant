"use client";

import { GridList, MenuItem, MenuSection, Slide, Slider } from "@/components";
import MenuHero from "@/components/MenuHero";
import Strip from "@/components/Strip";
import { getAllMenus } from "@/utils/queries";
import { urlFor } from "@/utils/sanity";
import Image from "next/image";
import { SlideProps } from "@/types";

async function MenuPage() {
  const menu: any = await getAllMenus();

  console.log(menu)

  return (
    <main className="menu-page">
      
      <MenuHero menu={menu} />

      <section>
        <MenuSection menu={menu.Breakfast} />

        <MenuSection menu={menu.Lunch} />

        <MenuSection menu={menu.Dinner} />

        <MenuSection menu={menu.Bakery} />

        <MenuSection menu={menu.Drinks} />

        <MenuSection menu={menu.Desserts} />

        <Image
          src="/assets/images/shape-5.png"
          width={921}
          height={103}
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim w-[921px]"
        />

         <Image
          src="/assets/images/shape-2.png"
          width={921}
          height={103}
          loading="lazy"
          alt="shape"
          className="shape shape-1 move-anim "
        /> 

 <Image
          src="/assets/images/shape-4.png"
          width={921}
          height={103}
          loading="lazy"
          alt="shape"
          className="shape shape-4 move-anim "
        />
        .
        <Image
          src="/assets/images/shape-6.png"
          width={343}
          height={345}
          loading="lazy"
          alt="shape"
          className="shape shape-3 move-anim w-full"
        />
      </section>
    </main>
  );
}

export default MenuPage;
