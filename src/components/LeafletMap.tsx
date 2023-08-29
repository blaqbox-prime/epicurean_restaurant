"use client"

import React, {useLayoutEffect, useState} from 'react'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import Image from 'next/image'

const LeafletMap = () => {

    // const mapCenter : LatLngExpression = [-23.916133, 29.487854]

  return typeof window !== 'undefined' && (
    <MapContainer center={[-23.91556,29.48819]} zoom={19} scrollWheelZoom={false} className='h-[600px]'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[-23.91556,29.48819]} >
      <Popup>
        <div className='flex flex-col space-y-3 items-center'>
        <Image
          src="/assets/images/logo-no-background.svg"
          height={100}
          width={200}
          alt="Epicurean"
          className='filter invert -auto'
        />
            <strong className='text-lg'>Epicurean Restaurant</strong>
        </div>
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default LeafletMap

