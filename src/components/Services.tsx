import React from "react";
import Service from "./Service";
import Image from "next/image";

function Services() {
  return (
    <section className="service text-center" aria-label="services">
      <div className="container">
        <p className="section-subtitle label-2">Flavors for Royalty</p>

        <h2 className="headline-1 section-title">We Offer Top Notch</h2>
        <p className="section-text">
          Indulge in a regal feast at our restaurant, where every dish is
          crafted to exude flavors fit for royalty. Experience culinary mastery,
          exquisite ingredients, and impeccable presentation in an unforgettable
          dining experience.
        </p>

        <ul className="grid-list">
          <Service
            title="Breakfast"
            imgUrl="/assets/images/service-1.jpg"
            alt="breakfast"
            linkText="View Menu"
            link="/menu#breakfast-menu"
          />
          <Service
            title="Dinner"
            imgUrl="/assets/images/service-2.jpg"
            alt="appetizer"
            linkText="View Menu"
            link="/menu#dinner-menu"
          />
          <Service
            title="Drinks"
            imgUrl="/assets/images/service-3.jpg"
            alt="drinks"
            linkText="View Menu"
            link="/menu#drinks-menu"
          />
        </ul>

        <Image
          src="/assets/images/shape-1.png"
          width={246}
          height={412}
          loading="lazy"
          alt="shape"
          className="shape shape-1 move-anim"
        />
        <Image
          src="/assets/images/shape-2.png"
          width={343}
          height={345}
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
      </div>
    </section>
  );
}

export default Services;
