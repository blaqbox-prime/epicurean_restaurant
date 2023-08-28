import Head from 'next/head'
import React from 'react'

export const metadata = {
    title: 'Epicurean | Menu',
    description: 'A unique and unforgettable dining experience - Our Menu',
  }

function layout({children}: {
    children: React.ReactNode
  }) {
  return (
    <div>
        {children}
    </div>
  )
}

export default layout