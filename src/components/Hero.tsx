"use client"

import React, { useEffect, useState } from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import Slide from './Slide';
import Slider from './Slider';
import { HeroProps } from '@/types';

const Hero = ({page, slides, className} : HeroProps) => {
  const [slideIdx, setslide] = useState(0);

  const MAX = slides.length - 1;
  
  console.log(MAX)
  
  let autoSlideInterval: string | number | NodeJS.Timeout | undefined;

  // Start auto slide on load
  useEffect(() => {
    autoSlide();
    return () => clearInterval(autoSlideInterval);
  }, []);

  const autoSlide = () => {
    autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 7000);
  };

  const clearAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  const nextSlide = () => {
    setslide((slideIdx) => (slideIdx === MAX ? 0 : slideIdx + 1));
  };

  const prevSlide = () => {
    setslide((slideIdx) => (slideIdx === 0 ? MAX : slideIdx - 1));
  };

  return (
    <section className={`hero text-center ${className && className}`} aria-label={page.toLowerCase()} id={page}>
          <Slider>
            {slides.map((slide, index) => {
              const {
                imageUrl,
                title1,
                title2,
                subtitle,
                text,
                link,
                linkText,
                secondary,
              } = slide;
              return (
                <Slide
                  key={index}
                  active={index === slideIdx}
                  title1={title1}
                  title2={title2}
                  link={link}
                  subtitle={subtitle}
                  text={text}
                  linkText={linkText}
                  imageUrl={imageUrl}
                  secondary={secondary}
                />
              );
            })}
          </Slider>

          <button
            className="slider-btn prev"
            aria-label="slide to previous"
            onClick={() => prevSlide()}
            onMouseOver={() => clearAutoSlide()}
            onMouseOut={() => autoSlide()}
          >
            <IoChevronBack />
          </button>

          <button
            className="slider-btn next"
            aria-label="slide to next"
            onClick={() => nextSlide()}
            onMouseOver={() => clearAutoSlide()}
            onMouseOut={() => autoSlide()}
          >
            <IoChevronForward />
          </button>

         {
          page === "home" && (
            <a href="#reservation-form" className="hero-btn has-after">
            <img
              src="./assets/images/hero-icon.png"
              width={48}
              height={48}
              alt="booking icon"
            />
            <span className="label-2 text-center span">Book A Table</span>
          </a>
          )
         }
        </section>
  )
}

export default Hero