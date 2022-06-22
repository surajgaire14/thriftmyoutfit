import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Landing from "../../assets/landing1.jpeg";
import ProductCard from "../../components/ProductCard";

import "./styles/style.css";

export default function Home() {
  return (
    <div className="home__container">
      {/**
       * @section => landing
       */}
      <div className="landing__container">
        <div className="left">
          <div className="blob animate__animated animate__pulse animate__infinite	infinite"></div>
          <div className="blob1 animate__animated animate__pulse animate__infinite	infinite"></div>
          <h1>
            The joy of<br /> dressing. 🥳
          </h1>
          <p>
            I might wear <b className="skinny">skinny pants</b> one day;
            <br /> I might wear <b>thrifted pants</b> the next day.
            <br />
            <i>- Post Malone</i>
          </p>
        </div>
        <div className="right">
          <img src="https://images.unsplash.com/photo-1555529771-122e5d9f2341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Women Carrying Shopping Bag" />
        </div>
      </div>

      {/**
       * @section => banner
       */}
       <div className="stylesBanner__container">
        <Marquee>
        A CLASSIC NEVER GOES OUT OF STYLE <i className="ri-vip-diamond-fill"></i> A CLASSIC NEVER GOES OUT OF STYLE <i className="ri-vip-diamond-fill"></i> A CLASSIC NEVER GOES OUT OF STYLE <i className="ri-vip-diamond-fill"></i> A CLASSIC NEVER GOES OUT OF STYLE <i className="ri-vip-diamond-fill"></i> A CLASSIC NEVER GOES OUT OF STYLE <i className="ri-vip-diamond-fill"></i>
        </Marquee>
       </div>

       {/**
       * @section => Latest Collection
       */}
       <div className="latestCollection__container">
       <div className="blob animate__animated animate__pulse animate__infinite	infinite"></div>
        <div className="title">
        <h1>Latest Collection</h1>
        <Link to="/">Explore All <i className="ri-arrow-right-line"></i></Link>
        </div>

        <div className="products">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>

        {/**
       * @section => banner
       */}
       <div className="rightStylesBanner__container">
        <Marquee>
        Fashions fade, style is eternal. <i className="ri-vip-diamond-fill"></i> Fashions fade, style is eternal. <i className="ri-vip-diamond-fill"></i> Fashions fade, style is eternal. <i className="ri-vip-diamond-fill"></i> Fashions fade, style is eternal. <i className="ri-vip-diamond-fill"></i> Fashions fade, style is eternal. <i className="ri-vip-diamond-fill"></i>
        </Marquee>
       </div>
       </div>

       {/**
        * * @section => Instagram Container
        */}
        <div className="instagram__container">
          <div className="title">Social <span>Media's</span></div>

          <ul>
            <li>
              <Link to="/">
                <img src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80" alt="" />
              <i className="ri-instagram-fill"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
              <i className="ri-instagram-fill"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="" />
              <i className="ri-instagram-fill"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80" alt="" />
              <i className="ri-instagram-fill"></i>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
}
