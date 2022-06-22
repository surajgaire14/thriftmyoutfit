import { Button } from "@mui/material";
import React from "react";
import "./styles/style.css";

export default function Navbar() {
  return (
    <div className="navbar__container">
      <div className="left">
        <ul>
          <li>Home</li>
          <li>Sale</li>
          <li>Shop</li>
          <li>Business</li>
        </ul>
      </div>
      <div className="center">Thrift My Outfit</div>
      <div className="right">
        <ul>
          <li>
            <form>
              <i className="ri-search-line"></i>
              <input type="text" placeholder="Search" />
            </form>
          </li>
          <li>
            <Button>
              <i className="ri-user-line"></i>
            </Button>
          </li>
          <li>
            <Button>
              <i className="ri-shopping-bag-3-line"></i>
            </Button>
          </li>
          <li>
            <Button>
              <i className="ri-instagram-line"></i>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
