import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="rtx-4090">SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <img src= "" alt="graphics-cards" className="hero-banner-image"/>

        <div>
          <Link href="/product/ID">
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className="desc"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner