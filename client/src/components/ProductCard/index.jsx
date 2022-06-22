import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/style.css";

export default function ProductCard({item}) {
  const {imgUrl, productName, priceDetails} = item;

  return (
    <Link to="/" className="productCard__container">
      <img src={imgUrl} alt="" />
      <div className="details">
        <p className="productName">{productName}</p>
        <div className="specifications">
          <div className="price">
            {priceDetails.discounted ? (
              <>
                <div className="normalPrice">${priceDetails.oldPrice}</div> $
                {priceDetails.newPrice}
              </>
            ) : (
              <>${priceDetails.oldPrice}</>
            )}
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
