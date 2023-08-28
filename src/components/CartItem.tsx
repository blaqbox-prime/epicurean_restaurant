/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import  Link  from "next/link";
import { HiMinus, HiPlus } from "react-icons/hi";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { CartItemProps } from "@/types";
import { RandString } from "@/utils";


type Props = {
  item: CartItemProps;
};

export default function CartItem({ item }: Props) {
  const { imgUrl, alt, title, description, seasonal, isNew, price } =
    item.menuItem;

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(title));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(title));
  };

  return (
    <li className="cart-item hover:card">
      <button
        className="close-btn"
        aria-label="close menu"
        onClick={() => {
          dispatch(removeFromCart(title));
        }}
      >
        <IoCloseOutline size={18} />
      </button>
      <figure className="card-banner img-holder">
        <img
          src={imgUrl}
          loading="lazy"
          width={10}
          height={10}
          alt={alt}
          className="img-cover"
        />
      </figure>

      <div className="content-wrapper">
        <div className="title-wrapper">
          <h3 className="body-2 cart-item__title">
            <Link href="/menu" className="card-title">
              {title}
            </Link>
          </h3>
        </div>
        {/* Quanityt Counter */}

        <div className="quantity-counter">
          <button onClick={handleIncrement}>
            <HiPlus />
          </button>
          <p className="label-1">{item.quantity}</p>
          <button onClick={handleDecrement}>
            <HiMinus />
          </button>
        </div>
      </div>
      <div className="label-1 cart-item__price">
        {RandString.format(item.quantity * price)}
      </div>
    </li>
  );
}
