import React from "react";
import { Link } from "react-router-dom";
import { useProductProvider } from "../ContextAPI/ProductContext";

export default function BottomNav() {

  const { AllCategory, NavFilter } = useProductProvider()
  return (
    <>
      <div className="container-fluid-lg bot_nav">
        <div className="row">
          <div className="col-12 position-relative">
            <div className="main-nav nav-left-align">
              <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky p-0">
                <div
                  className="offcanvas offcanvas-collapse order-xl-2"
                  id="primaryMenu"
                >
                  <div className="offcanvas-header navbar-shadow">
                    <h5>Menu</h5>
                    <button
                      className="btn-close lead"
                      type="button"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav">
                      <li className="nav-item ">
                        <Link to="/" className="nav-link  ps-0" href="!">
                          HOME
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/shop">
                          SHOP
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                        >
                          CATEGORIES
                        </Link>
                        <ul className="dropdown-menu">
                          {AllCategory.map((items) => {
                            return (
                              <li key={items.id}>
                                <Link
                                  className="dropdown-item"
                                  to="/shop"
                                  onClick={() => NavFilter(items.name)}
                                >
                                  {items.name}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </li>
                      <li className="nav-item dropdown dropdown-mega">
                        <Link
                          className="nav-link dropdown-toggle ps-xl-2 ps-0"
                          href="!"
                          data-bs-toggle="dropdown"
                        >
                          MEGA MENU
                        </Link>
                        <div className="dropdown-menu dropdown-menu-2 dropdown-menu-left">
                          <div className="row">
                            <div className="dropdown-column col-xl-3">
                              <h5 className="dropdown-header">
                                Daily Vegetables
                              </h5>
                              <Link
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Beans &amp; Brinjals
                              </Link>
                            </div>
                            <div className="dropdown-column col-xl-3">
                              <h5 className="dropdown-header">Baby Tender</h5>
                              <Link
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Beans &amp; Brinjals
                              </Link>
                            </div>
                            <div className="dropdown-column col-xl-3">
                              <h5 className="dropdown-header">
                                Exotic Vegetables
                              </h5>
                              <Link
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Asparagus &amp; Artichokes
                              </Link>
                            </div>
                            <div className="dropdown-column dropdown-column-img col-3" />
                          </div>
                        </div>
                      </li>
                      <li className="nav-item ">
                        <Link to="/cart" className="nav-link  ps-0" href="!">
                          CART
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rightside-menu">
                <ul className="option-list-2">
                  <li>
                    <Link href="!" className="header-icon search-box search-icon">
                      <i className="fa-solid fa-cart-shopping" />
                    </Link>
                  </li>
                  <li className="onhover-dropdown">
                    <Link href="!" className="header-icon swap-icon">
                      <i className="fa-solid fa-cart-shopping" />
                    </Link>
                    <div className="onhover-div">
                      <ul className="cart-list">
                        <li>
                          <div className="drop-cart">
                            <Link
                              href="product-left-thumbnail.html"
                              className="drop-image"
                            >
                              <img
                                src="images/vegetable/product/1.png"
                                className="blur-up lazyload"
                                alt=""
                              />
                            </Link>
                            <div className="drop-contain">
                              <Link href="product-left-thumbnail.html">
                                <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                              </Link>
                              <h6>
                                <span>1 x</span> $80.58
                              </h6>
                              <button className="close-button">
                                <i className="fa-solid fa-xmark" />
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="drop-cart">
                            <Link
                              href="product-left-thumbnail.html"
                              className="drop-image"
                            >
                              <img
                                src="images/vegetable/product/2.png"
                                className="blur-up lazyload"
                                alt=""
                              />
                            </Link>
                            <div className="drop-contain">
                              <Link href="product-left-thumbnail.html">
                                <h5>
                                  Peanut Butter Bite Premium Butter Cookies 600
                                  g
                                </h5>
                              </Link>
                              <h6>
                                <span>1 x</span> $25.68
                              </h6>
                              <button className="close-button">
                                <i className="fa-solid fa-xmark" />
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="price-box">
                        <h5>Price :</h5>
                        <h4 className="theme-color fw-bold">$106.58</h4>
                      </div>
                      <div className="button-group">
                        <Link to="/cart" className="btn btn-sm cart-button">
                          View Cart
                        </Link>
                        <Link
                          href="checkout.html"
                          className="btn btn-sm cart-button theme-bg-color
                                              text-white"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="onhover-dropdown">
                    <Link href="!" className="header-icon swap-icon">
                      <i className="fa-regular fa-heart" />
                    </Link>
                    <div className="onhover-div">
                      <ul className="cart-list">
                        <li>
                          <div className="drop-cart">
                            <Link
                              href="product-left-thumbnail.html"
                              className="drop-image"
                            >
                              <img
                                src="images/vegetable/product/1.png"
                                className="blur-up lazyload"
                                alt=""
                              />
                            </Link>
                            <div className="drop-contain">
                              <Link href="product-left-thumbnail.html">
                                <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                              </Link>
                              <h6>
                                <span>1 x</span> $80.58
                              </h6>
                              <button className="close-button">
                                <i className="fa-solid fa-xmark" />
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="drop-cart">
                            <Link
                              href="product-left-thumbnail.html"
                              className="drop-image"
                            >
                              <img
                                src="images/vegetable/product/2.png"
                                className="blur-up lazyload"
                                alt=""
                              />
                            </Link>
                            <div className="drop-contain">
                              <Link href="product-left-thumbnail.html">
                                <h5>
                                  Peanut Butter Bite Premium Butter Cookies 600
                                  g
                                </h5>
                              </Link>
                              <h6>
                                <span>1 x</span> $25.68
                              </h6>
                              <button className="close-button">
                                <i className="fa-solid fa-xmark" />
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="price-box">
                        <h5>Price :</h5>
                        <h4 className="theme-color fw-bold">$106.58</h4>
                      </div>
                      <div className="button-group">
                        <Link href="cart.html" className="btn btn-sm cart-button">
                          View Cart
                        </Link>
                        <Link
                          href="checkout.html"
                          className="btn btn-sm cart-button theme-bg-color
                                              text-white"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
                <Link href="user-dashboard.html" className="user-box">
                  <span className="header-icon">
                    <i className="fa-solid fa-user" />
                  </span>
                  <div className="user-name">
                    <h6 className="text-content">My Account</h6>
                    <h4 className="mt-1">Jennifer V. Ward</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
