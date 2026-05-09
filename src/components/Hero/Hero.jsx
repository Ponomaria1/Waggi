import React from 'react'
import './hero.scss';
import DOG from './../../assets/img/Img.png'
import { Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';

function Hero() {
  return (
    <section className="hero">
      <Swiper className="container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}>
      <SwiperSlide className="hero__inner">
        <div className="hero__image">
          <img src={DOG} alt="Dog"></img>
        </div>

        <div className="hero__content">
          <span className="hero__label">SAVE 10 - 20% OFF</span>
          <h1 className="hero__title">
            Best Destination <br></br>
            For <span>Your Pets</span>
          </h1>
          <button className="btn">SHOP NOW →</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="hero__inner">
        <div className="hero__image">
          <img src={DOG} alt="Dog"></img>
        </div>

        <div className="hero__content">
          <span className="hero__label">SAVE 10 - 20% OFF</span>
          <h1 className="hero__title">
            Хочу домой <br></br>
            Отпустите <span> :(</span>
          </h1>
          <button className="btn">SHOP NOW →</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="hero__inner">
        <div className="hero__image">
          <img src={DOG} alt="Dog"></img>
        </div>

        <div className="hero__content">
          <span className="hero__label">SAVE 10 - 20% OFF</span>
          <h1 className="hero__title">
            Ляляля <br></br>
            For <span>Your Pets</span>
          </h1>
          <button className="btn">SHOP NOW →</button>
        </div>
      </SwiperSlide>
    </Swiper>
    </section>
  )
}

export default Hero