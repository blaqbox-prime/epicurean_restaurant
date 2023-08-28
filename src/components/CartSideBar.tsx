import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import CartItem from "./CartItem";
import { LinkButton } from "./LinkButton";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RandString, getStripe } from "@/utils";
import { CartItemProps, CartState } from "@/types";
import { Button } from "./Button";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";

type Props = {
  toggleCartSideBar: Function | any;
  isCartOpen: boolean;
};

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

export default function CartSideBar({
  isCartOpen = true,
  toggleCartSideBar,
}: Props) {
  const cart: CartState = useSelector((state: any) => state.cart);

  const handleCheckout = async () => {
    // Set up body
    const body =  JSON.stringify(
      cart.items.map((item) => {
        return {
          quantity: item.quantity,
          ...item.menuItem,
        };
      })
    )

    const stripe = await getStripe();

    const res = await fetch("/api/pay", {
      method: "POST",
      body: body,
    });

    if (res.status !== 200) {
      toast.error("Server Error, please try again later.");
      return;
    }

    const data = await res.json();
    console.log(data);
    toast.loading("Redirecting to Checkout...");

    stripe?.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <section className="cartSideBar">
      <div className="container">
        <article className={`bar ${isCartOpen && "active"} `}>
          <div className="cartSideBar__itemsCointainer">
            <button
              className="close-btn"
              aria-label="close menu"
              id="btn-close-menu"
              data-nav-toggler
              onClick={() => {
                toggleCartSideBar();
              }}
            >
              <IoCloseOutline size={18} />
            </button>
            <h1 className="headline-3">
              Total: {RandString.format(cart.total)}
            </h1>
            {/* LIST OF ITEMS */}

            {cart.items.length === 0 && (
              <p className="text-1 ">No items in cart</p>
            )}

            {cart.items.map((item: CartItemProps) => (
              <CartItem item={item} key={item.menuItem.title} />
            ))}
          </div>
          {/* CHECKOUT BTN */}

          <Button
            text="Checkout"
            type="button"
            disabled={cart.items.length === 0}
            onclick={handleCheckout}
          />
        </article>
        <div
          className={`overlay ${isCartOpen && "active"}`}
          data-nav-toggler
          data-overlay
        ></div>
      </div>
    </section>
  );
}
