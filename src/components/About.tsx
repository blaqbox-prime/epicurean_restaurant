"use client"

import React, { useEffect } from 'react'
import { LinkButton } from './LinkButton';
import Image from 'next/image';

const About = () => {

    // Parallax
  let parallaxItems: NodeListOf<HTMLElement>;
  let x, y: number;

  

  useEffect(() => {
    if(typeof document !== 'undefined'){
      parallaxItems = document.querySelectorAll(
        "[data-parallax-item]"
      );

    if(typeof window !== 'undefined'){
      window.addEventListener("mousemove", function (event) {
        x = (event.clientX / window.innerWidth) * 10 - 5;
        y = (event.clientY / window.innerHeight) * 10 - 5;
    
        // Negate the mumber
        x = x - x * 2;
        y = y - y * 2;
    
        for (let i = 0, len = parallaxItems.length; i < len; i++) {
          x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
          y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
          parallaxItems[i].style.transform = `translate3d(${x}px,${y}px,0)`;
        }
      });
    }

    }
  
  }, [])
  

  return (
    <section
          className="section about text-center"
          aria-label="about"
          id="about"
        >
          <div className="container">
            <div className="about-content">
              <p className="label-2 section-subtitle" aria-label="about-label">
                Our Story
              </p>
              <h2 className="headline-1 section-title">
                Every Flavor Tells a Story
              </h2>

              <p className="section-text">
                Welcome to Epicurean! As the chef and owner, I, Andiswa, take
                pride in crafting a range of delicious dishes with care and
                passion. With years of culinary experience and having worked in
                renowned kitchens around the world, I'm excited to bring my
                expertise to our community. Fun fact about me - my passion for
                cooking was ignited when I was a child, watching my mother
                prepare traditional South African dishes in the kitchen. Today,
                I infuse my dishes with my own creative flair, blending local
                ingredients with global influences to create a unique and
                unforgettable dining experience. I invite you to join me for a
                meal at Epicurean and taste the magic of my cuisine for
                yourself.
              </p>

              <div className="content-label">Book Through Call</div>

              <a
                href="tel:0749851245"
                className="body-1 contact-number hover-underline"
              >
                074 985 1245
              </a>

              <LinkButton href='/about' text='Read More'/>

            </div>

            <figure className="about-banner">
              <Image
                src="/assets/images/about-banner.jpg"
                width={570}
                height={570}
                loading="lazy"
                alt=""
                className="w-100"
                data-parallax-item
                data-parallax-speed="1"
              />

              <div
                className="abs-img abs-img-1 has-before"
                data-parallax-item
                data-parallax-speed="1.75"
              >
                <Image
                  src="/assets/images/about-abs-image.jpg"
                  width={285}
                  height={285}
                  alt="about abs"
                  className="w-100"
                />
              </div>

              <div className="abs-img abs-img-2 has-before">
                <Image
                  src="/assets/images/badge-2.png"
                  width={133}
                  height={134}
                  loading="lazy"
                  alt="abs img 2"
                />
              </div>
              <Image
                src="/assets/images/shape-3.png"
                width={197}
                height={194}
                loading="lazy"
                alt=""
                className="shape"
              />
            </figure>
          </div>
        </section>
  )
}

export default About