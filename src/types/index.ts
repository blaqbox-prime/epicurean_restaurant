import { HTMLProps } from "react";

export interface TestimonialProps {
  name: string;
  testimony: string;
  image: string;
}

export interface LoadingProps {
  loaded: boolean;
}

export interface NavbarItemProps {
  link: string;
  text: string;
  active?: boolean;
}

export interface ButtonProps {
  type: "button" | "reset" | "submit" | undefined;
  classes?: string;
  text: string;
  onclick?: Function;
  disabled?: boolean;
}

export interface LinkButtonProps {
  href: string;
  classes?: string;
  text: string;
}

export interface SlideProps {
  imageUrl: string;
  title1: string;
  title2: string;
  subtitle: string;
  text?: string;
  linkText?: string;
  link?: string;
  secondary?: boolean;
  active?: boolean;
}

export interface MenuItemProps {
  imgUrl: string;
  alt: string;
  title: string;
  summary: string;
  description?: any;
  seasonal?: boolean;
  price: number;
  old_price?: number;
  isNew?: boolean;
}

export interface ServiceProps {
  title: string;
  linkText: string;
  imgUrl: string;
  height?: number;
  alt?: string;
  width?: number;
  link: string;
}

export interface HomeMenuProps {
  menu: MenuItemProps[];
}

export interface EventListItemProps {
  alt: string;
  title: string;
  imgUrl: string;
  subtitle: string;
  date: string;
}

export interface StripProps extends HTMLProps<HTMLElement> {
  imgUrl: string;
  subtitle: string;
  title: string;
  text?: string;
  link?: string;
}

export interface CartState {
  total: number;
  items: CartItemProps[];
}

export interface CartItemProps {
  menuItem: MenuItemProps;
  quantity: number;
}

export interface headerProps {
  visible?: boolean;
  active?: boolean;
}

export interface menuSectionProps {
  menu: {
    items: ProductProps[];
    details: {
      stripImage?: [Object];
      title: "Breakfast";
      slug?: [Object];
      _id: string;
      headline: string;
      subtitle: string;
      sectionSubtitle: string;
      coverImage?: null;
    };
  };
}

export interface ProductProps {
  _id: string;
  image: string;
  alt?: string;
  title: string;
  summary: string;
  description?: any;
  seasonal?: boolean;
  price: number;
  old_price?: number;
  isNew?: boolean;
}

export interface HeroProps {
  page: "menu" | "home" | "blog";
  slides: SlideProps[];
  className?: string;
}

export interface PostProps {
  _id: string;
  title: string;
  topic: string;
  publishedAt: string;
  mainImage: any;
  body: any;
  slug: any;
  author: {name: string, image: any};
  category: {title: string}
}