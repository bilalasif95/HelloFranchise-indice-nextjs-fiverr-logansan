import React from 'react';
import Link from  'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Banner = () => {
  return (
    <>
      <section className='banner-area'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <div className='banner-content'>
                <h1 className="banner-two-heading">
                  <Swiper
                    autoplay={{
                      delay: 5000,
                      pauseOnMouseEnter: true,
                    }}
                    modules={[Autoplay]}
                  >
                    <SwiperSlide>
                      Find Nearby <span className="color-0ec6c6">Hotel Franchises</span>
                    </SwiperSlide>

                    <SwiperSlide>
                      Find Nearby <span className="color-0ec6c6">Restaurant Franchises</span>
                    </SwiperSlide>

                    <SwiperSlide>
                      Find Nearby <span className="color-0ec6c6">Beauty Franchises</span>
                    </SwiperSlide>

                    <SwiperSlide>
                      Find Nearby <span className="color-0ec6c6">Fitness Franchises</span>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                      Find Nearby <span className="color-0ec6c6">Shopping Franchises</span>
                    </SwiperSlide>
                  </Swiper>
                </h1>
                
                <p>Expolore top-rated Franchises, Business Opportunities, and more...</p>

                <form>
                  <div className='row m-0 align-items-center'>
                    <div className='col-lg-4 col-md-12 p-0'>
                      <div className='form-group'>
                        <label>
                          <i className='flaticon-search'></i>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='What are you looking for?'
                        />
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-6 p-0'>
                      <div className='form-group'>
                        <label>
                          <i className='flaticon-pin'></i>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Location'
                        />
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-6 p-0'>
                      <div className='form-group category-select'>
                        <label className='category-icon'>
                          <i className='flaticon-category'></i>
                        </label>
                        <select className="banner-form-select-two">
                          <option>All Categories</option>
                          <option>Automotive Franchises</option>
                          <option>Business &amp; Professional</option>
                          <option>Business Opportunities</option>
                          <option>Children's Franchises</option>
                          <option>Cleaning Franchises</option>
                          <option>Computer &amp; Internet</option>
                          <option>Education Franchises</option>
                          <option>Fast Food Franchises</option>
                          <option>Fitness Franchises</option>
                          <option>Food Franchises</option>
                          <option>Franchise Service Providers</option>
                          <option>Health &amp; Beauty</option>
                          <option>Health Care Franchises</option>
                          <option>Home Based Franchises</option>
                          <option>Home Services Franchises</option>
                          <option>Online Franchises</option>
                          <option>Pet Franchises</option>
                          <option>Property &amp; Real Estate</option>
                          <option>Restaurant Franchises</option>
                          <option>Retail Franchises</option>
                          <option>Travel &amp; Leisure</option>
                        </select>
                      </div>
                    </div>

                    <div className='col-lg-2 col-md-12 p-0'>
                      <div className='submit-btn'>
                        <button type='submit'>Search Now</button>
                      </div>
                    </div>
                  </div>
                </form>

                <ul className='popular-search-list'>
                  <li>Popular:</li>
                  <li>
                    <Link href="/grid-listings-with-map">
                      <a>Restaurants</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/grid-listings-with-map">
                      <a>Events</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/grid-listings-with-map">
                      <a>Clothing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/grid-listings-with-map">
                      <a>Bank</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/grid-listings-with-map">
                      <a>Fitness</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/grid-listings-with-map">
                      <a>Bookstore</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-4 col-md-12'>
              <div className='banner-image'>
                <img src='/images/banner-img1.png' alt='image' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
