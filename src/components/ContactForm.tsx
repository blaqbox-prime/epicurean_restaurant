"use client"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { IoCalendarClear, IoChevronDown, IoPersonOutline, IoTimeOutline } from 'react-icons/io5'
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { Button } from './Button';


const ContactForm = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit: SubmitHandler<any> = (data: any) => {
        console.log(data)
            toast(`Reservation for ${data.person} successful!`, {
                autoClose: 5000,
                position: 'top-center'
            });

        reset();
    };
  

    return (
        <section className="" id="contact-form">
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="form-left form contact-form bg-black-10">
              <h2 className="headline-1 text-center mb-6">Get in touch with us</h2>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  autoComplete="off"
                  maxLength={25}
                  className="input-field"
                  {...register("name",{required: true})}
                />

                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="input-field"
                  maxLength={255}
                  {...register("email",{required: true})}
                />
              </div>

              <div className="input-wrapper">
              <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="input-field"
                  maxLength={150}
                  {...register("email",{required: true})}
                />
              </div>

              <textarea
                placeholder="Message"
                autoComplete="off"
                id="message"
                className="input-field"
                {...register("message",{maxLength: 255})}
              ></textarea>

              <Button type='submit' text='Send Message' />
            </form>

            <div
              className="form-right text-center"
              style={{
                backgroundImage: "url('assets/images/form-pattern.png')",
              }}
            >
             
              <p className="body-4">
                Monday - Sunday <br />
                08:00 AM - 10:00 PM
              </p>
            </div>
          
        </div>
      </section>
  )
}

export default ContactForm