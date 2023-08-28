/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SlideProps } from "@/types";

export default function Slide({
  active = false,
  imageUrl,
  title1,
  title2,
  subtitle,
  text,
  link = "#",
  linkText = "View Our Menu",
  secondary = false,
}: SlideProps) {
  return (
    <li className={`slider-item ${active && "active"}`}>
      <div className="slider-bg">
        <Image
          priority
          src={imageUrl}
          width={1880}
          height={950}
          alt=""
          className={`img-cover dim`}
        />
      </div>

      <p className="label-2 section-subtitle slider-reveal">{subtitle}</p>

      <h1 className="display-1 hero-title slider-reveal">
        {title1} <br />
        {title2}
      </h1>

      <p className="body-2 hero-text slider-reveal">{text}</p>

      <Link
        href={link}
        className={`btn ${
          secondary ? "btn-secondary" : "btn-primary"
        } slider-reveal`}
      >
        <span className="text text-1">{linkText}</span>

        <span className="text text-2" aria-hidden={true}>
          {linkText}
        </span>
      </Link>
    </li>
  );
}
