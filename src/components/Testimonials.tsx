"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialProps } from "@/types";

const testimonials = [
  {
    name: "John Doe",
    testimony:
      "The food here is simply amazing! Every bite feels like a culinary journey. I'll definitely be back for more.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    name: "Sara Johnson",
    testimony:
      "Outstanding dining experience! The ambiance, service, and flavors combined to create an unforgettable evening.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Michael Smith",
    testimony:
      "Delicious dishes that are a treat for the taste buds. This restaurant has quickly become my favorite spot in town.",
    image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Emily Martinez",
    testimony:
      "From the friendly staff to the exquisite dishes, everything about this place is top-notch. Highly recommended!",
    image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "David Brown",
    testimony:
      "A gastronomic delight! The creativity and quality of the menu make this restaurant a must-visit for food enthusiasts.",
    image: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section
      className="testimonials text-center section has-bg-image"
      aria-label="testimonials"
      id="testimonials"
      style={{ backgroundImage: "url('/assets/images/testimonial-bg.jpg')" }}
    >
      <Slider {...settings}>
        {testimonials.map((testimonial: TestimonialProps) => (<TestimonySlide image={testimonial.image} name={testimonial.name} testimony={testimonial.testimony} />))}
      </Slider>
    </section>
  );

  function TestimonySlide(testimonial: {
    name: string;
    image: string;
    testimony: string;
  }) {
    return (
      <div className="container item">
        <div className="quote">”</div>
        <p className="headline-2 testi-text">
          {testimonial.testimony}
        </p>

        <div className="wrapper">
          <div className="separator"></div>
          <div className="separator"></div>
          <div className="separator"></div>
        </div>

        <div className="profile">
          <Image
            src={testimonial.image}
            alt="sam"
            className="img aspect-square"
            loading="lazy"
            height={100}
            width={100}
          />
        </div>

        <div className="label profile-name">{testimonial.name}</div>
      </div>
    );
  }
}

export default Testimonials;
