import { StripProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { HTMLProps } from "react";


function Strip({imgUrl,subtitle,title,className, link = "#"}: StripProps) {
  return (
    <div className={`strip ${className && className}`}>
      <div className="strip-bg h-100">
        <Image
          src={imgUrl}
          width={950}
          height={1880}
          alt="Strip"
          className="img-cover"
          priority
        />
      </div>

      <div className="strip-content">
        <p className="label-1 section-subtitle">{subtitle}</p>

        <h1 className="display-1 hero-title">{title}</h1>

        <Link href={link} className={`btn btn-primary strip-reveal`}>
          <span className="text text-1">View Menu</span>

          <span className="text text-2" aria-hidden={true}>
            View Menu
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Strip;
