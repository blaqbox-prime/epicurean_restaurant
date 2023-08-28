"use client"

/* eslint-disable jsx-a11y/anchor-is-valid */
import { MenuItemProps } from "@/types";
import { RandString } from "@/utils";
import Image from "next/image";
import React from "react";
import {useDispatch} from 'react-redux'
import { addToCart } from '@/redux/CartSlice';
import { HiShoppingBag } from "react-icons/hi";
import { toast } from "react-toastify";
import { Button } from "./Button";

export default function MenuItem({
  imgUrl,
  alt,
  title,
  summary,
  seasonal = false,
  isNew = false,
  price,
}: MenuItemProps) {
    const dispatch = useDispatch();

  const handleOnClick = () => {
    const item:MenuItemProps = {imgUrl,alt,title,summary,seasonal, isNew, price};
    dispatch(addToCart(item))
    toast.success(`${title} added to cart`);
  };

  return (
    <li className="menu-item">
      <div className="menu-card hover:card">
        <figure
          className="card-banner img-holder"
          style={{ width: 100, height: 100 }}
        >
          <div className="product_img_holder">
            <Image
              src={imgUrl}
              width={100}
              height={100}
              alt={alt}
              className="img-cover"
            />
            {/* <HiShoppingBag className="bagIcon" size={28} /> */}
          </div>
        </figure>
        <div className="">
          <div className="title-wrapper">
            <h3 className="title-3">
              <a href="#" className="card-title">
                {title}
              </a>
            </h3>

            {seasonal && <span className="badge label-1">Seasonal</span>}
            {isNew && <span className="badge label-1">New</span>}
            <span className="span title-2">{RandString.format(price)}</span>
          </div>

          <p className="card-text label-1">{summary}</p>
        </div>
      </div>
          <Button text="Add to cart" type="button" classes="add-to-cart-btn" onclick={handleOnClick}/>
    </li>
  );
}
