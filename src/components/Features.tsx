import Image from "next/image";
import React from "react";
import GridList from "./GridList";

function Features() {
  return (
    <section className="features text-center">
      <div className="container">
        <p className="section-subtitle label-2">Why choose us</p>

        <h2 className="headline-1 section-title">Our Strength</h2>

        <GridList>
          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <Image
                  src="/assets/images/features-icon-1.png"
                  width={100}
                  height={80}
                  loading="lazy"
                  alt="icon"
                />
              </div>

              <h3 className="title-2 card-title">Hygienic Food</h3>
              <p className="labal-1 card-text">
                Savor our hygienic delights, ensuring freshness and cleanliness
                in every bite.
              </p>
            </div>
          </li>

          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <Image
                  src="/assets/images/features-icon-2.png"
                  width={100}
                  height={80}
                  loading="lazy"
                  alt="icon"
                />
              </div>

              <h3 className="title-2 card-title">Casual Environment</h3>
              <p className="labal-1 card-text">
                Embrace a relaxed atmosphere while enjoying delectable dishes
                with friends.
              </p>
            </div>
          </li>

          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <Image
                  src="/assets/images/features-icon-3.png"
                  width={100}
                  height={80}
                  loading="lazy"
                  alt="icon"
                />
              </div>

              <h3 className="title-2 card-title">Skilled Chef</h3>
              <p className="labal-1 card-text">
                Immerse yourself in the culinary expertise of our skilled chef.
              </p>
            </div>
          </li>

          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <Image
                  src="/assets/images/features-icon-4.png"
                  width={100}
                  height={80}
                  loading="lazy"
                  alt="icon"
                />
              </div>

              <h3 className="title-2 card-title">Event & Party</h3>
              <p className="labal-1 card-text">
                Host unforgettable events and parties in our versatile venue,
                tailored to your unique celebrations
              </p>
            </div>
          </li>
        </GridList>

        <Image
          src="/assets/images/shape-1.png"
          width={208}
          height={178}
          loading="lazy"
          alt="shape"
          className="shape shape-1"
        />

        <Image
          src="/assets/images/shape-8.png"
          width={120}
          height={115}
          loading="lazy"
          alt="shape"
          className="shape shape-2"
        />
      </div>
    </section>
  );
}

export default Features;
