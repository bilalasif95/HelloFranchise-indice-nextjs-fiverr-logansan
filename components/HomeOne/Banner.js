import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Banner = () => {
	// search
	const router = useRouter();
	const [title, setTitle] = useState("");
	const [location, setLocation] = useState("");
	const [category, setCategory] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		if (title || location || category) {
			router.replace(
				`/listings/?title=${title}&location=${location}&category=${category}`
			);
		} else {
			router.push("/");
		}
	};
	return (
		<>
		  <div className="main-banner-area">
			<div className="container">
			  <div className="main-banner-content">
				<div className="banner-flexi">
				  <h1 className="banner-one-heading">
					<Swiper
					  autoplay={{
						delay: 5000,
						pauseOnMouseEnter: true,
					  }}
					  modules={[Autoplay]}
					>
					  <SwiperSlide>
						Launch Your New Business With A <span className="color-0ec6c6">Hotel Franchise</span>
					  </SwiperSlide>
	
					  <SwiperSlide>
					  Launch Your New Business With A <span className="color-0ec6c6">Restaurant Franchise</span>
					  </SwiperSlide>
	
					  <SwiperSlide>
					  Launch Your New Business With A <span className="color-0ec6c6">Business Franchise</span>
					  </SwiperSlide>
	
					  <SwiperSlide>
					  Launch Your New Business With A <span className="color-0ec6c6">Fitness Franchise</span>
					  </SwiperSlide>
					  
					  <SwiperSlide>
					  Launch Your New Business With A <span className="color-0ec6c6">Other Franchise</span>
					  </SwiperSlide>
					</Swiper>
				  </h1>
				</div>
	
				<p>Find a proven business model that offers the support you need to reach your goals</p>
	
				<form>
				  <div className="row m-0 align-items-center">
					<div className="col-lg-4 col-md-12 p-0">
					  <div className="form-group">
						<label>
						  <i className="flaticon-search"></i>
						</label>
						<input
						  type="text"
						  className="form-control"
						  placeholder="What are you looking for?"
						/>
					  </div>
					</div>
	
					<div className="col-lg-3 col-md-6 p-0">
					  <div className="form-group">
						<label>
						  <i className="flaticon-pin"></i>
						</label>
						<input
						  type="text"
						  className="form-control"
						  placeholder="Location"
						/>
					  </div>
					</div>
	
					<div className="col-lg-3 col-md-6 p-0">
					  <div className="form-group category-select">
						<label className="category-icon">
						  <i className="flaticon-category"></i>
						</label>
						<select style="text-align:end;" className="banner-form-select">
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
	
					<div className="col-lg-2 col-md-12 p-0">
					  <div className="submit-btn">
						<button type="submit">Search Now</button>
					  </div>
					</div>
				  </div>
				</form>
	
				<ul className="popular-search-list">
				  <li>Need Help? </li>
				  <li>
					<Link href="/grid-listings-with-map">
					  <a>Discover which type of franchise best fits you here</a>
					</Link>
				  </li>
				  {/*<li>
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
					</li>*/}
				</ul>
			  </div>
			</div>
		  </div>
		</>
	  );	
};

export default Banner;
