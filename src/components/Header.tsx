"use client"
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { createRef, useState, useEffect } from 'react'
import Navbar from './Navbar';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import  Link  from 'next/link';
import { LinkButton } from './LinkButton';
import CartSideBar from './CartSideBar';
import { headerProps } from '@/types';


function Header({visible, active} : headerProps) {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setCartSidebar] = useState(false);

  const toggleCartSidebar = () => {setCartSidebar(!isCartOpen)}
  const toggleNav = () => {setIsNavOpen(!isNavOpen)}




  return (
    <header className={`header ${!visible ? "hide" : ""} ${active && "active"}`} id="header">

    <div className="container">


      <Link href="/" className="logo">
        <img src="/assets/images/logo-no-background.svg" height={50} width={160} alt="Epicurean - Home" />
      </Link>

      {/* Nav */}

      <Navbar toggleNav={toggleNav} isOpen={isNavOpen} />

    {/* CART SIDEBAR */}
    <CartSideBar isCartOpen={isCartOpen} toggleCartSideBar={toggleCartSidebar} />


      <LinkButton href='#' text='Find a table'/>

      <button className="shoppingBagIcon" aria-label="open menu" 
      onClick={ () => {toggleCartSidebar() }}
      >
        <HiOutlineShoppingBag color='white' size={24}/>
      </button>

      <button className="nav-open-btn" aria-label="open menu" data-nav-toggler
        onClick={toggleNav}
      >
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
      </button>


      <div className={`overlay ${isNavOpen && "active"}`} data-nav-toggler data-overlay></div>

    </div>

  </header>
  )
}

export default Header