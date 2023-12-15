import React from 'react'

export default function ImageSlider() {
  return (
    <>
<div className="col-xxl-10 col-lg-12 col-md-10 order-xxl-2 order-lg-1 order-md-2">
  <div className="product-main-2 no-arrow slick-initialized slick-slider">
    <div className="slick-list draggable">
      <div className="slick-track" style={{ opacity: 1, width: 2520 }}>
        <div
          className="slick-slide slick-current slick-active"
          data-slick-index={0}
          aria-hidden="false"
          style={{
            width: 420,
            position: "relative",
            left: 0,
            top: 0,
            zIndex: 999,
            opacity: 1
          }}
          tabIndex={0}
        >
          <div className="slider-image">
            <img
              src="images/product/category/1.jpg"
              id="img-1"
              data-zoom-image="images/product/category/1.jpg"
              className="img-fluid image_zoom_cls-0 blur-up lazyloaded"
              alt=""
            />
          </div>
        </div>
        <div
          className="slick-slide"
          data-slick-index={1}
          aria-hidden="true"
          style={{
            width: 420,
            position: "relative",
            left: "-420px",
            top: 0,
            zIndex: 998,
            opacity: 0
          }}
          tabIndex={-1}
        >
          <div className="slider-image">
            <img
              src="images/product/category/2.jpg"
              data-zoom-image="images/product/category/2.jpg"
              className="img-fluid image_zoom_cls-1 blur-up lazyloaded"
              alt=""
            />
          </div>
        </div>
        <div
          className="slick-slide"
          data-slick-index={2}
          aria-hidden="true"
          style={{
            width: 420,
            position: "relative",
            left: "-840px",
            top: 0,
            zIndex: 998,
            opacity: 0
          }}
          tabIndex={-1}
        >
          <div className="slider-image">
            <img
              src="images/product/category/3.jpg"
              data-zoom-image="images/product/category/3.jpg"
              className="img-fluid image_zoom_cls-2 blur-up lazyloaded"
              alt=""
            />
          </div>
        </div>
        <div
          className="slick-slide"
          data-slick-index={3}
          aria-hidden="true"
          style={{
            width: 420,
            position: "relative",
            left: "-1260px",
            top: 0,
            zIndex: 998,
            opacity: 0
          }}
          tabIndex={-1}
        >
          <div className="slider-image">
            <img
              src="images/product/category/4.jpg"
              data-zoom-image="images/product/category/4.jpg"
              className="img-fluid image_zoom_cls-3 blur-up lazyloaded"
              alt=""
            />
          </div>
        </div>
        <div
          className="slick-slide"
          data-slick-index={4}
          aria-hidden="true"
          style={{
            width: 420,
            position: "relative",
            left: "-1680px",
            top: 0,
            zIndex: 998,
            opacity: 0
          }}
          tabIndex={-1}
        >
          <div className="slider-image">
            <img
              src="images/product/category/5.jpg"
              data-zoom-image="images/product/category/5.jpg"
              className="img-fluid image_zoom_cls-4 blur-up lazyloaded"
              alt=""
            />
          </div>
        </div>
        <div
          className="slick-slide"
          data-slick-index={5}
          aria-hidden="true"
          style={{
            width: 420,
            position: "relative",
            left: "-2100px",
            top: 0,
            zIndex: 998,
            opacity: 0
          }}
          tabIndex={-1}
        >
          <div className="slider-image">
            <img
              src="images/product/category/6.jpg"
              data-zoom-image="images/product/category/6.jpg"
              className="img-fluid image_zoom_cls-5 blur-up lazyloaded"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
