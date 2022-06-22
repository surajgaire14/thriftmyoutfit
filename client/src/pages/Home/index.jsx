import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import LatestProducts from "../../helpers/LatestProducts.json";
import ProductCard from "../../components/ProductCard";

import "./styles/style.css";

export default function Home() {
  return (
    <div className="home__container">
      {/**
       * @section => landing
       */}
      <div className="landing__container" data-aos="fade-up">
        <div className="left">
          <div className="blob animate__animated animate__pulse animate__infinite	infinite"></div>
          <div className="blob1 animate__animated animate__pulse animate__infinite	infinite"></div>
          <h1>
            The joy of
            <br /> dressing. 🥳
          </h1>
          <p>
            I might wear <b className="skinny">skinny pants</b> one day;
            <br /> I might wear <b>thrifted pants</b> the next day.
            <br />
            <i>- Post Malone</i>
          </p>
        </div>
        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1555529771-122e5d9f2341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Women Carrying Shopping Bag"
          />
        </div>
      </div>

      {/**
       * @section => banner
       */}
      <div className="stylesBanner__container">
        <Marquee>
          A CLASSIC NEVER GOES OUT OF STYLE{" "}
          <i className="ri-vip-diamond-fill"></i> A CLASSIC NEVER GOES OUT OF
          STYLE <i className="ri-vip-diamond-fill"></i> A CLASSIC NEVER GOES OUT
          OF STYLE <i className="ri-vip-diamond-fill"></i> A CLASSIC NEVER GOES
          OUT OF STYLE <i className="ri-vip-diamond-fill"></i> A CLASSIC NEVER
          GOES OUT OF STYLE <i className="ri-vip-diamond-fill"></i>
        </Marquee>
      </div>

      {/**
       * @section => Latest Collection
       */}
      <div className="latestCollection__container" data-aos="fade-up">
        <div className="blob animate__animated animate__pulse animate__infinite	infinite"></div>
        <div className="title">
          <h1>Latest Collection</h1>
          <Link to="/">
            Explore All <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        <div className="products">
          {LatestProducts.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>

        {/**
         * @section => banner
         */}
        <div className="rightStylesBanner__container">
          <Marquee>
            Fashions fade, style is eternal.{" "}
            <i className="ri-vip-diamond-fill"></i> Fashions fade, style is
            eternal. <i className="ri-vip-diamond-fill"></i> Fashions fade,
            style is eternal. <i className="ri-vip-diamond-fill"></i> Fashions
            fade, style is eternal. <i className="ri-vip-diamond-fill"></i>{" "}
            Fashions fade, style is eternal.{" "}
            <i className="ri-vip-diamond-fill"></i>
          </Marquee>
        </div>
      </div>

      {/**
       * * @section => Instagram Container
       */}
      <div className="instagram__container" data-aos="fade-up">
        <div className="title">
          Social <span>Media's</span>
        </div>

        <ul>
          <li>
            <Link to="/">
              <img
                src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80"
                alt=""
              />
              <i className="ri-instagram-fill"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <img
                src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
              />
              <i className="ri-instagram-fill"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <img
                src="https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                alt=""
              />
              <i className="ri-instagram-fill"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <img
                src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80"
                alt=""
              />
              <i className="ri-instagram-fill"></i>
            </Link>
          </li>
        </ul>
      </div>

      {/**
       * * @section => How we started Container
       */}
      <div className="howWeStarted__container" data-aos="fade-up">
        <h1 className="title">
          HOW <span>THRIFT MY OUTFIT</span> GOT <u>STARTED</u>
        </h1>

        <div className="description">
          <ul>
            <li>
              <h1>1.</h1>
              <p>
                No <u>Specific Marketplace</u> for thrifting outfits.
              </p>
            </li>
            <li>
              <h1>2.</h1>
              <p>
                Thrifted Business by geography has a <u>huge scope</u>.
              </p>
            </li>
            <li>
              <h1>3.</h1>
              <p>
                <u>Fashions never settles</u>, nor we do.
              </p>
            </li>
          </ul>

          <div>
            <h1>Background.</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              inventore maiores, facere delectus ipsa minima quo nesciunt
              accusantium facilis laborum iste autem voluptatibus nam nulla
              aliquam quam soluta reprehenderit quae.
            </p>
            <Link to="/">
              <i className="ri-arrow-right-line"></i> Let's have{" "}
              <span>pleasure doing business 🤝</span>
            </Link>
          </div>
        </div>
      </div>

      {/**
       * * @section => Collaboration
       */}
      <div className="collaboration__container" data-aos="fade-up">
        <ul>
          <li>
            <img
              src="https://images.unsplash.com/photo-1585843736857-bd7438e55c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1628413993904-94ecb60f1239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
          </li>
          <li>
            <h1>
              Thrift My Outfit X<br/><span>Shoe House Official</span>
            </h1>
            <p>Exclusive<br/> <span>Collaboration</span></p>
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1605523741177-cd660595c2cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
