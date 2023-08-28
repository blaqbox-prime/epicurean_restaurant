import { About, ReservationForm } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="about-page">
      <section className="about-page-hero hero text-center  ">
        <div className="slider-item active">
        <div className="slider-bg">
        <Image
          priority
          src="https://images.pexels.com/photos/2537605/pexels-photo-2537605.jpeg?cs=srgb&dl=pexels-adrien-olichon-2537605.jpg&fm=jpg"
          width={1880}
          height={950}
          alt=""
          className={`img-cover dim`}
        />
      </div>

      <p className="label-2 section-subtitle slider-reveal">About Us</p>

      <h1 className="display-1 hero-title slider-reveal">
        Our Epicurean Story: Crafting Exquisite Moments
      </h1>

      <p className="body-2 hero-text slider-reveal">A Journey of Taste, Tradition, and Hospitality</p>


      <Link
        href="/menu"
        className={`btn btn-secondary slider-reveal`}
      >
        <span className="text text-1">Our Menu</span>

        <span className="text text-2" aria-hidden={true}>
          Our Menu
        </span>
      </Link>

        </div>
      </section>

      <About />

      {/* WHY CHOOSE US */}

      <section
          className="feature-banner text-center"
          aria-label="feature-banner"
          id="feature-banner"
        >
          <div className="special-dish-banner h-[689.36px]">
            <img
              src="https://images.pexels.com/photos/5779776/pexels-photo-5779776.jpeg?cs=srgb&dl=pexels-rdne-stock-project-5779776.jpg&fm=jpg&w=1920&h=2880"
              width={940}
              height={900}
              alt="hygenic food"
              className="img-cover"
              loading="lazy"
            />
          </div>

          <div className="feature-banner-content bg-black-10">
            <div className="container">
              <img
                src="assets/images/badge-1.png"
                width={28}
                height={41}
                loading="lazy"
                alt="badge"
                className="abs-img"
              />
              <p className="section-subtitle label-2">Why Choose Us</p>
              <h2 className="headline-1 section-title">Hygienic Food</h2>
              <p className="section-text">
              At Epicurean, we prioritize the health and well-being of our guests above all else. That's why we take great pride in maintaining the highest standards of hygiene in our kitchen and throughout our restaurant. From the moment our fresh ingredients arrive to the careful preparation of each dish, our dedicated team adheres to stringent sanitation practices and food safety guidelines. We believe that the foundation of a delightful dining experience lies in the cleanliness and quality of our food. Rest assured, when you dine with us, you can savor every bite with confidence, knowing that your health and safety are our top priorities.
              </p>

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

        <section
          className="feature-banner text-center"
          aria-label="feature-banner"
          id="feature-banner"
        >

          <div className="special-dish-banner h-[689.36px]  order-2">
            <img
              src="https://images.pexels.com/photos/3184193/pexels-photo-3184193.jpeg?cs=srgb&dl=pexels-fauxels-3184193.jpg&fm=jpg"
              width={940}
              height={900}
              alt="hygenic food"
              className="img-cover"
              loading="lazy"
            />
          </div>

          <div className="feature-banner-content bg-black-10 order-1">
            <div className="container">
              <img
                src="assets/images/badge-1.png"
                width={28}
                height={41}
                loading="lazy"
                alt="badge"
                className="abs-img"
              />
              <p className="section-subtitle label-2">Why Choose Us</p>
              <h2 className="headline-1 section-title">Casual Environment</h2>
              <p className="section-text">
              At Epicurean, we strive to create a casual and inviting environment where you can relax, unwind, and savor exceptional food without feeling any sense of formality. Our restaurant is designed to be a welcoming space, whether you're coming in for a quick bite or settling in for a leisurely meal with friends and family. You'll find our staff to be friendly and attentive, ready to make your dining experience as enjoyable as possible. Come as you are and embrace the laid-back ambiance that perfectly complements our delicious culinary offerings. At Epicurean, we believe that great food can be enjoyed in a warm and comfortable setting, making every visit an occasion to cherish.
              </p>

            </div>
          </div>

        </section>

        <section
          className="feature-banner text-center"
          aria-label="feature-banner"
          id="feature-banner"
        >
          <div className="special-dish-banner h-[689.36px]">
            <img
              src="https://images.pexels.com/photos/6578922/pexels-photo-6578922.jpeg?cs=srgb&dl=pexels-andres-ayrton-6578922.jpg&fm=jpg&w=1920&h=2880"
              width={940}
              height={900}
              alt="our chef"
              className="img-cover"
              loading="lazy"
            />
          </div>

          <div className="feature-banner-content bg-black-10">
            <div className="container">
              <img
                src="assets/images/badge-1.png"
                width={28}
                height={41}
                loading="lazy"
                alt="badge"
                className="abs-img"
              />
              <p className="section-subtitle label-2">Why Choose Us</p>
              <h2 className="headline-1 section-title">Skilled Chef</h2>
              <p className="section-text">
              At Epicurean, our head chef, Andiswa, is the driving force behind our culinary excellence. With a wealth of experience and a passion for flavors, Andiswa artfully creates dishes that leave a lasting impression on our guests. From sourcing the finest ingredients to innovating and experimenting with new tastes, Andiswa's expertise shines through in every plate. Their dedication to perfection ensures that each dining experience at Epicurean is a true celebration of exquisite food crafted with love and skill.
              </p>

            </div>
          </div>
        </section>

         <section
          className="feature-banner text-center"
          aria-label="feature-banner"
          id="feature-banner"
        >

          <div className="special-dish-banner h-[689.36px]  order-2">
            <img
              src="https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?cs=srgb&dl=pexels-cottonbro-studio-3171815.jpg&fm=jpg&w=1920&h=1283"
              width={940}
              height={900}
              alt="Event & Party"
              className="img-cover"
              loading="lazy"
            />
          </div>

          <div className="feature-banner-content bg-black-10 order-1">
            <div className="container">
              <img
                src="assets/images/badge-1.png"
                width={28}
                height={41}
                loading="lazy"
                alt="badge"
                className="abs-img"
              />
              <p className="section-subtitle label-2">Why Choose Us</p>
              <h2 className="headline-1 section-title">Event & Party</h2>
              <p className="section-text">
              At Epicurean, we love to celebrate life's special moments with you. Whether you're planning a private event, a corporate gathering, or a joyous party with friends, our team is here to make it unforgettable. From intimate birthday dinners to grand wedding receptions, we tailor our event spaces and menus to suit your unique preferences. Our experienced staff will attend to every detail, ensuring seamless execution and a truly memorable experience for you and your guests. Let us be a part of your next event and turn your celebration into an extraordinary culinary journey at Epicurean.
              </p>

            </div>
          </div>

        </section>

        {/* RESERVATION */}

        <section className="">
          <ReservationForm />
        </section>

    </main>
  )
}

export default page