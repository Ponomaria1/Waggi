import './offer.scss'
import decor from '../../assets/img/decor.svg'
import React from 'react'

function Offer() {
  return (
    <section className="offer">
    <div className='decor'>
      <img src={decor} alt="decor" />
    </div>
   
      <div className="offer__title">Get <span className="text_accent">20% Off</span> on <br></br>first Purchase
      </div>
      <form className="offer__form">
        <input type="email" placeholder="your email address"></input>
        <input type="text" placeholder="your Full Name"></input>
        <input type="text" placeholder="Message"></input>
        <button type="submit">Send Message</button>
      </form>
        <div className='decor'>
      <img src={decor} alt="decor" />
    </div>
    </section>
  )
}

export default Offer;