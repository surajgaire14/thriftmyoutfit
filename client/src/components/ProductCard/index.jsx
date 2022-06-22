import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/style.css";

export default function ProductCard() {
  return (
    <Link to="/" className="productCard__container">
      <img
        src="https://minimal-kit-react.vercel.app/static/mock-images/products/product_2.jpg"
        alt=""
      />
      <div className="details">
        <p className="productName">Some random shoes</p>
        <div className="specifications">
          <div className="price">
            <div className="normalPrice">$ 50</div>$ 30
          </div>
          <div className="buttons">
            <Button>
              <i className="ri-heart-line"></i>
            </Button>
            <Button>
              <i className="ri-shopping-cart-line"></i>
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
