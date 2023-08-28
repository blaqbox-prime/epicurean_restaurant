import React from "react";
import Link from "next/link";
import { NavbarItemProps } from "@/types";


function NavbarItem({link, text,active = false} : NavbarItemProps) {
  return (
    <li className="navbar-item">
      <Link href={link} 
      className={`navbar-link hover-underline ${active && 'active'}`}  
        >
        <div className="separator"></div>
        <span className="span">{text}</span>
      </Link>
    </li>
  );
}

export default NavbarItem;
