import React from 'react';
import Link from 'next/link';

const Category = ({ titleOne, titleTwo }) => {
  return (
    <>
      <section className='category-area pt-100 pb-70'>
        <div className='container'>
          {titleOne ? (
            <div className='section-title'>
              <h2>Popular Categories</h2>
              <p>
                Finding a franchise for you can be as easy as sorting through our categories, or you can take our online quiz and find the right franchise to suit you.
              </p>
            </div>
          ) : titleTwo ? (
            <div className='section-title text-left'>
              <h2>Explore by Category</h2>
              <a href='#' className='link-btn'>
                Show All <i className='flaticon-right-chevron'></i>
              </a>
            </div>
          ) : (
            ''
          )}

          <div className='row'>
            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-cooking'></i>
                </div>
                <h3>Food</h3>
                <span>16 Places</span>
                <Link href='/listings/?title=&location=&category=Restaurants'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-hotel'></i>
                </div>
                <h3>Hotel</h3>
                <span>42 Places</span>
                <Link href='/listings/?title=&location=&category=Hotel'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-exercise'></i>
                </div>
                <h3>Fitness</h3>
                <span>11 Places</span>
                <Link href='/listings/?title=&location=&category=Fitness'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-commerce'></i>
                </div>
                <h3>Business</h3>
                <span>24 Places</span>
                <Link href='/listings/?title=&location=&category=Shopping'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-cleansing'></i>
                </div>
                <h3>Health & Beauty</h3>
                <span>8 Places</span>
                <Link href='/listings/?title=&location=&category=Health-&-Beauty'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-calendar'></i>
                </div>
                <h3>Education</h3>
                <span>12 Places</span>
                <Link href='/listings/?title=&location=&category=education-franchises'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-heart-1'></i>
                </div>
                <h3>Health Care</h3>
                <span>16 Places</span>
                <Link href='/listings/?title=&location=&category=Health-care-franchises'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-airport'></i>
                </div>
                <h3>Travel</h3>
                <span>8 Places</span>
                <Link href='/listings/?title=&location=&category=travel-&-leasure'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-car-insurance'></i>
                </div>
                <h3>Automotive</h3>
                <span>10 Places</span>
                <Link href='/listings/?title=&location=&category=automotive-franchises'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-attorney'></i>
                </div>
                <h3>Business Professionals</h3>
                <span>25 Places</span>
                <Link href='/listings/?title=&location=&category=business-&-professionals'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-plumber'></i>
                </div>
                <h3>Home Services</h3>
                <span>5 Places</span>
                <Link href='/listings/?title=&location=&category=home-based-franchises'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box more-categories'>
                <div className='icon'>
                  <i className='flaticon-more-1'></i>
                </div>
                <h3>More Categories</h3>
                <Link href='/categories'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
