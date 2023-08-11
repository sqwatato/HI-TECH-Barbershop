'use client'
import React from 'react';
import ReactDOM from 'react-dom';
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

const images = [
  'https://s3-media0.fl.yelpcdn.com/bphoto/ls_Ml2tMKMV7U_CAp5jBFg/348s.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/Qq9XHcRuVzDrAyXlwGsyRQ/348s.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/wvPiFdi5USDJkHVI7z2_2g/348s.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/J9jLL2yGfDpn8APQznqDvw/348s.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/cSQho8BtQ6G7Fi5HMse6_g/348s.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/mBv2SYM1_MXbeK8mp9ThIQ/348s.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/VInXWSFFre5KOtEogZQCzg/348s.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/DHQ7Hoo7FIXoxfx7oePTFg/348s.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/v_Rl4wZtWA1bwfy5zUqFwA/348s.jpg',
];


export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Gallery images={images} />
      <Contact />
    </main>
  )
};