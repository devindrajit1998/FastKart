import React from 'react'
import { Link } from 'react-router-dom'

export default function RightBox() {
    return (
        <>
            <div className="right-box-contain">
                {/* <h6 className="offer-top">30% Off</h6> */}
                <h2 className="name">Creamy Chocolate Cake</h2>
                <div className="price-rating">
                    <h3 className="theme-color price">
                        $49.50 <del className="text-content">$58.46</del>
                        {/* <span className="offer theme-color">(8% off)</span> */}
                    </h3>

                </div>
                <div className="procuct-contain">
                    <p>
                        Lollipop cake chocolate chocolate cake dessert jujubes. Shortbread sugar
                        plum dessert powder cookie sweet brownie. Cake cookie apple pie dessert
                        sugar plum muffin cheesecake.
                    </p>
                </div>
                <div className="product-packege">
                    <div className="product-title">
                        {/* <h4>Weight</h4> */}
                    </div>
                    <ul className="select-packege">
                        <li>
                            <Link >
                                1/2 KG
                            </Link>
                        </li>

                        <li>
                            <Link >
                               Red Rose
                            </Link>
                        </li>

                    </ul>
                </div>

                <div className="note-box product-packege">
                    <div className="cart_qty qty-box product-qty">
                        <div className="input-group">
                            <button
                                type="button"
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                            >
                                <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={0}
                            />
                            <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
                            >
                                <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <button
                        onclick="location.href = 'cart.html';"
                        className="btn btn-md bg-dark cart-button text-white w-100"
                    >
                        Add To Cart
                    </button>
                </div>
                <div className="buy-box">
                    <a href="wishlist.html">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-heart"
                        >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        <span>Add To Wishlist</span>
                    </a>

                </div>
                <div className="pickup-box">
                    <div className="product-title">
                        <h4>Store Information</h4>
                    </div>
                    <div className="pickup-detail">
                        <h4 className="text-content">
                            Lollipop cake chocolate chocolate cake dessert jujubes. Shortbread
                            sugar plum dessert powder cookie sweet brownie.
                        </h4>
                    </div>
                    <div className="product-info">
                        <ul className="product-info-list product-info-list-2">
                            <li>
                                Type : <a href="!">Black Forest</a>
                            </li>
                            <li>
                                SKU : <a href="!">SDFVW65467</a>
                            </li>
                            <li>
                                MFG : <a href="!">Jun 4, 2022</a>
                            </li>
                            <li>
                                Stock : <a href="!">2 Items Left</a>
                            </li>
                            <li>
                                Tags : <a href="!">Cake,</a>
                                <a href="!">Backery</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="paymnet-option">
                    <div className="product-title">
                        <h4>Guaranteed Safe Checkout</h4>
                    </div>
                    <ul>
                        <li>
                            <a href="!">
                                <img
                                    src="images/product/payment/1.svg"
                                    className="blur-up lazyloaded"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="!">
                                <img
                                    src="images/product/payment/2.svg"
                                    className="blur-up lazyloaded"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="!">
                                <img
                                    src="images/product/payment/3.svg"
                                    className="blur-up lazyloaded"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="!">
                                <img
                                    src="images/product/payment/4.svg"
                                    className="blur-up lazyloaded"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="!">
                                <img
                                    src="images/product/payment/5.svg"
                                    className="blur-up lazyloaded"
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </>
    )
}
