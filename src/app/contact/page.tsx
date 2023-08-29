"use client"

import { ContactForm, Hero, LeafletMap } from '@/components';
import { SlideProps } from '@/types';
import React from 'react'

const page = () => {

  const slides : SlideProps[] = [
    {
      active: true,
      imageUrl: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-845451.jpg&fm=jpg&w=1920&h=1280",
      title1: "How can we help you today?",
      title2: "",
      subtitle: "Contact Us",
      text: "(+27) 74 582 3698",
      linkText: "Contact Us",
      link: "#contact-form",
      secondary: false,
    },
    {
      active: false,
      imageUrl: "https://images.pexels.com/photos/5865071/pexels-photo-5865071.jpeg?cs=srgb&dl=pexels-rachel-claire-5865071.jpg&fm=jpg&w=1920&h=1280",
      title1: "Visit Our Fine Establishment Today",
      title2: "",
      subtitle: "Visit Us Today",
      text: "7 Acacia St. Flora Park, Polokwane 0699, L",
      linkText: "Contact Us",
      link: "#contact-form",
      secondary: false,
    },
    {
      active: false,
      imageUrl: "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?cs=srgb&dl=pexels-vlada-karpovich-4050291.jpg&fm=jpg&w=1920&h=1280",
      title1: "Enquire About Our Services",
      title2: "",
      subtitle: "Write To Us",
      text: "andiswa@epicurean.com",
      linkText: "Contact Us",
      link: "#contact-form",
      secondary: false,
    },
  ];

  return (
    <main id="contact-page">
        <Hero page='home' slides={slides} />

        {/* Contact Form */}
        <ContactForm />

        {/* Map */}

        <section className='w-full overflow-hidden'>
         <LeafletMap />
        </section>

    </main>
  )
}

export default page

export async function getServerSideProps() {

  return {
    props: {},
  };
}