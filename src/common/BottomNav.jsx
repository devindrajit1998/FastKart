import React from "react";

export default function BottomNav() {
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
                        <a className="nav-link  ps-0" href="!">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="!">
                          Shop
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="!"
                          data-bs-toggle="dropdown"
                        >
                          Categories
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="product-4-image.html"
                            >
                              Product 4 Image
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown dropdown-mega">
                        <a
                          className="nav-link dropdown-toggle ps-xl-2 ps-0"
                          href="!"
                          data-bs-toggle="dropdown"
                        >
                          Mega Menu
                        </a>
                        <div className="dropdown-menu dropdown-menu-2 dropdown-menu-left">
                          <div className="row">
                            <div className="dropdown-column col-xl-3">
                              <h5 className="dropdown-header">
                                Daily Vegetables
                              </h5>
                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Beans &amp; Brinjals
                              </a>
                            </div>
                            <div className="dropdown-column col-xl-3">
                              <h5 className="dropdown-header">Baby Tender</h5>
                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Beans &amp; Brinjals
                              </a>
                            </div>
                            <div className="dropdown-column col-xl-3">
                              <h5 className="dropdown-header">
                                Exotic Vegetables
                              </h5>
                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Asparagus &amp; Artichokes
                              </a>
                            </div>
                            <div className="dropdown-column dropdown-column-img col-3" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rightside-menu">
                <ul className="option-list-2">
                  <li>
                    <a href="!" className="header-icon search-box search-icon">
                      <i className="fa-solid fa-cart-shopping" />
                    </a>
                  </li>
                  <li className="onhover-dropdown">
                    <a href="!" className="header-icon swap-icon">
                      <i className="fa-solid fa-cart-shopping" />
                    </a>
                    <div className="onhover-div">
                      <ul className="cart-list">
                        <li>
                          <div className="drop-cart">
                            <a
                              href="product-left-thumbnail.html"
                              className="drop-image"
                            >
                              <img
                                src="images/vegetable/product/1.png"
                                className="blur-up lazyload"
                                alt=""
                              />
                            </a>
                            <div className="drop-contain">
                              <a href="product-left-thumbnail.html">
                                <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                              </a>
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
                            <a
                              href="product-left-thumbnail.html"
                              className="drop-image"
                            >
                              <img
                                src="images/vegetable/product/2.png"
                                className="blur-up lazyload"
                                alt=""
                              />
                            </a>
                            <div className="drop-contain">
                              <a href="product-left-thumbnail.html">
                                <h5>
                                  Peanut Butter Bite Premium Butter Cookies 600
                                  g
                                </h5>
                              </a>
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
                        <a href="cart.html" className="btn btn-sm cart-button">
                          View Cart
                        </a>
                        <a
                          href="checkout.html"
                          className="btn btn-sm cart-button theme-bg-color
                                              text-white"
                        >
                          Checkout
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="onhover-dropdown">
                    <a href="!" className="header-icon swap-icon">
                      <i className="fa-regular fa-heart" />
                    </a>
                    <div className="onhover-div">
                      <ul className="cart-list">
                        <li>
                          <div className="drop-cart">
                            <a
                              href="product-left-thumbnail.html"
                              className="drop-image"
                            >
                              <img
                                src="images/vegetable/product/1.png"
                                className="blur-up lazyload"
                                alt=""
                              />
                            </a>
                            <div className="drop-contain">
                              <a href="product-left-thumbnail.html">
                                <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                              </a>
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
                            <a
                              href="product-left-thumbnail.html"
                              className="drop-image"
                            >
                              <img
                                src="images/vegetable/product/2.png"
                                className="blur-up lazyload"
                                alt=""
                              />
                            </a>
                            <div className="drop-contain">
                              <a href="product-left-thumbnail.html">
                                <h5>
                                  Peanut Butter Bite Premium Butter Cookies 600
                                  g
                                </h5>
                              </a>
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
                        <a href="cart.html" className="btn btn-sm cart-button">
                          View Cart
                        </a>
                        <a
                          href="checkout.html"
                          className="btn btn-sm cart-button theme-bg-color
                                              text-white"
                        >
                          Checkout
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <a href="user-dashboard.html" className="user-box">
                  <span className="header-icon">
                    <i className="fa-solid fa-user" />
                  </span>
                  <div className="user-name">
                    <h6 className="text-content">My Account</h6>
                    <h4 className="mt-1">Jennifer V. Ward</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
