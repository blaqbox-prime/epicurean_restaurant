import React from 'react'
import  Link  from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/" className="logo">
        <Image
          src="/assets/images/logo-no-background.svg"
          height={50}
          width={160}
          alt="Epicurean - Home"
        />
      </Link>
  )
}

export default Logo