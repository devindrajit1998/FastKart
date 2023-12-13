/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useProductProvider } from "../ContextAPI/ProductContext";

export default function ProductCard(props) {
  const {ToggleModal} = useProductProvider()
  return (
    <>
      <div className="product-box-4 wow fadeInUp">
        <div className="product-image product-image-2">
          <a href="!">
            <img
              src="images/grocery/product/fruits-vegetables/1.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>
          <ul className="option">
            <li className="pointer" onClick={ToggleModal}
             
            >
              <a >
              <i className="fa-solid fa-eye" />
              </a>
            </li>
            <li
             className="pointer"
            >
              <a href="!" className="notifi-wishlist">
              <i className="fa-solid fa-heart" />
              </a>
            </li>
          </ul>
        </div>
        <div className="product-detail">
          <ul className="rating">
            <li>
              <i className="fa-regular fa-star" />

            </li>
            <li>
              <i className="fa-regular fa-star" />

            </li>
            <li>
              <i className="fa-regular fa-star" />

            </li>
            <li>
              <i className="fa-regular fa-star" />

            </li>
            <li>
              <i data-feather="star" />
            </li>
          </ul>
          <a href="!">
            <h5 className="name text-title">Bell pepper</h5>
          </a>
          <h5 className="price theme-color">
            $65.21<del>$71.25</del>
          </h5>
          <div className="addtocart_btn">
            <button className="add-button addcart-button btn buy-button text-light">
              <i className="fa-solid fa-plus" />
            </button>
            <div className="qty-box cart_qty">
              <div className="input-group">
                <button
                  type="button"
                  className="btn qty-left-minus"
                  data-type="minus"
                  data-field=""
                >
                  <i className="fa fa-minus" aria-hidden="true" />
                </button>
                <input
                  className="form-control input-number qty-input"
                  type="text"
                  name="quantity"
                  defaultValue={1}
                />
                <button
                  type="button"
                  className="btn qty-right-plus"
                  data-type="plus"
                  data-field=""
                >
                  <i className="fa fa-plus" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
