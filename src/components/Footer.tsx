import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section id="contact" className="py-8 relative doodle-container">
    <div className="max-w-7xl mx-auto px-2 relative z-10">
        <div className="relative flex items-end justify-between gap-4">
          <p className="text-sm text-gray-500">
            ©2025
          </p>
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold tracking-tighter text-foreground leading-[0.8]">
            <Link to="/" className="hover:text-blue-500 transition-colors">
              UZMA H.
            </Link>
          </h1>
        </div>
    </div>
    </section>
  )
}
export default Footer
