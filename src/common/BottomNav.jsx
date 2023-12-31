import React from "react";
import { Link } from "react-router-dom";
import { useProductProvider } from "../ContextAPI/ProductContext";

export default function BottomNav() {
  const { AllCategory, NavFilter, cart, wish, total, removeSingle, removeSingleWish, authLink, CheckAuth, user } =
    useProductProvider();
  let link = "";
let hideCart =""
  if (cart.length > 0) {
    link = "/checkout";
    hideCart= "d-none"
  } else {
    link = "";
  }
  let hidewish = ""
  if(wish.length > 0){
    hidewish = "d-none"
  }
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
                      {/* <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle">
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
                            );
                          })}
                        </ul>
                      </li> */}
                      {/* <li className="nav-item dropdown dropdown-mega">
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
                      </li> */}
                      {/* <li className="nav-item ">
                        <Link to="/cart" className="nav-link  ps-0" >
                          CART
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rightside-menu">
                <ul className="option-list-2">
                  <li>
                    <Link
                      href="!"
                      className="header-icon search-box search-icon"
                    >
                      <i className="fa-solid fa-cart-shopping" />
                    </Link>
                  </li>
                  <li className="onhover-dropdown">
                    <Link to="/cart" className="header-icon swap-icon">
                      <i className="fa-solid fa-cart-shopping" />
                    </Link>
                    <div className="onhover-div">
                      <ul className="cart-list">
                        <li></li>
                        <h4 className={hideCart}>Your cart is empty !</h4>
                        {cart.map((items) => {
                          return (
                            <>
                              <li key={items.id}>
                                <div className="drop-cart">
                                  <Link
                                    to={`/product/${items.id}`}
                                    className="drop-image"
                                  >
                                    <img
                                      src={items.thumbnail}
                                      className="blur-up lazyload"
                                      alt=""
                                    />
                                  </Link>
                                  <div className="drop-contain">
                                    <Link to={`/product/${items.id}`}>
                                      <h5>{items.name}</h5>
                                    </Link>
                                    <h6>
                                      <span>{items.quantity}x</span> $
                                      {items.offerPrice}
                                    </h6>
                                    <button
                                      className="close-button"
                                      onClick={() => removeSingle(items.id)}
                                    >
                                      <i className="fa-solid fa-xmark" />
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                      <div className="price-box">
                        <h5>Price :</h5>
                        <h4 className="theme-color fw-bold">${total}</h4>
                      </div>
                      <div className="button-group">
                        <Link to="/cart" className="btn btn-sm cart-button">
                          View Cart
                        </Link>
                        <Link
                          to={link}
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
                        <li></li>
                        <h4 className={hidewish}>Wishlish is empty !</h4>
                        {wish.map((items) => {
                          return (
                            <>
                              <li>
                                <div className="drop-cart">
                                  
                                  <Link
                                    className="drop-image"
                                    to={`/product/${items.id}`}
                                  >
                                    <img
                                      src={items.thumbnail}
                                      className="blur-up lazyload"
                                      alt=""
                                    />
                                  </Link>
                                  <div className="drop-contain">
                                    <Link to={`/product/${items.id}`}>
                                      <h5>{items.name}</h5>
                                    </Link>
                                    <h6>${items.offerPrice}</h6>
                                    <button className="close-button" onClick={()=>removeSingleWish(items.id)}>
                                      <i className="fa-solid fa-xmark" />
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                </ul>
                <Link to={authLink} className="user-box">
                  <span className="header-icon" onClick={()=>CheckAuth(user.userName)}>
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
