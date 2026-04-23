"use client";
import dynamic from 'next/dynamic';
import React from 'react'
const HeroCanvas = dynamic(() => import("../components/Hero/HeroCanvas"), { ssr: false });
const page = () => {
  return (
    <>
    <div  className='h-screen'>
    <HeroCanvas />

    </div>
    </>
  )
}

export default page