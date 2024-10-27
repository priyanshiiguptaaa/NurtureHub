/* eslint-disable no-unused-vars */
// src/Hero.jsx
import React from "react";

const Hero = () => (
  <section className="flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2">
      <h2 className="text-aashira-brown font-normal mb-4">EMBRACING MOTHERHOOD WITH LOVE AND CARE</h2>
      <h1 className="text-4xl md:text-5xl font-bold text-aashira-green mb-6">
        Everything You Need for Your Baby&apos;s Journey, All in One Place
      </h1>
    </div>
    <div className="md:w-1/2 relative">
      <img src="/placeholder.svg?height=400&width=400" alt="Babies" className="rounded-full" />
    </div>
  </section>
);

export default Hero;
