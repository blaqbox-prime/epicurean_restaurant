import Link from 'next/link'
import React from 'react'
import { LinkButton } from './LinkButton';

const SpecialDish = () => {
  return (
    <section
          className="special-dish text-center"
          aria-label="special-dish"
          id="special-dish"
        >
          <div className="special-dish-banner">
            <img
              src="assets/images/special-dish-banner.jpg"
              width={940}
              height={900}
              alt="special dish"
              className="img-cover"
              loading="lazy"
            />
          </div>

          <div className="special-dish-content bg-black-10">
            <div className="container">
              <img
                src="assets/images/badge-1.png"
                width={28}
                height={41}
                loading="lazy"
                alt="badge"
                className="abs-img"
              />
              <p className="section-subtitle label-2">Special Dish</p>
              <h2 className="headline-1 section-title">Lobster Tortellini</h2>
              <p className="section-text">
                Our signature dish, Lobster Tortellini, is a must-try for any
                seafood lover. This dish features perfectly cooked, succulent
                chunks of lobster meat wrapped in handmade tortellini pasta,
                complemented by a rich and creamy sauce. Our skilled chefs take
                great care in selecting the freshest ingredients to ensure that
                every bite is bursting with flavor. The Lobster Tortellini is
                one of our most popular menu items, and it's easy to see why.
                Come and indulge in this decadent dish and experience the true
                taste of our restaurant.
              </p>

              <div className="wrapper">
                <del className="del body-3">R428.99</del>
                <span className="span body-1">R214.99</span>
              </div>

              <LinkButton href='/menu' text='View All Menu'/>
            </div>
          </div>

          <img
            src="asets/images/shape-4.png"
            width={179}
            height={359}
            loading="lazy"
            alt=""
            className="shape shape-1"
          />
          <img
            src="asets/images/shape-9.png"
            width={351}
            height={462}
            loading="lazy"
            alt=""
            className="shape shape-2"
          />
        </section>
  )
}

export default SpecialDish