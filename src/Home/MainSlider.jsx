import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MainSlider() {
  return (
    <>
      <Swiper spaceBetween={0} slidesPerView={1} loop="true" autoplay="true">
        <SwiperSlide>
          <div className="home-contain rounded-0 p-0">
            <img
              src="images/grocery/banner/1.jpg"
              className="img-fluid bg-img blur-up lazyload"
              alt=""
            />
            <div className="home-detail home-big-space p-center-left home-overlay position-relative">
              <div className="container-fluid-lg">
                <div>
                  <h6 className="ls-expanded theme-color text-uppercase">
                    Weekend Special offer
                  </h6>
                  <h1 className="heding-2">Premium Quality Dry Fruits</h1>
                  <h2 className="content-2">Dryfruits shopping made Easy</h2>
                  <h5 className="text-content">
                    Fresh &amp; Top Quality Dry Fruits are available here!
                  </h5>
                  <button
                    className="btn theme-bg-color btn-md text-white fw-bold mt-md-4 mt-2 mend-auto"
                    onclick="location.href = 'shop-left-sidebar.html';"
                  >
                    Shop Now <i className="fa-solid fa-arrow-right icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-contain rounded-0 p-0">
            <img
              src="images/grocery/banner/1.jpg"
              className="img-fluid bg-img blur-up lazyload"
              alt=""
            />
            <div className="home-detail home-big-space p-center-left home-overlay position-relative">
              <div className="container-fluid-lg">
                <div>
                  <h6 className="ls-expanded theme-color text-uppercase">
                    Weekend Special offer
                  </h6>
                  <h1 className="heding-2">Premium Quality Dry Fruits</h1>
                  <h2 className="content-2">Dryfruits shopping made Easy</h2>
                  <h5 className="text-content">
                    Fresh &amp; Top Quality Dry Fruits are available here!
                  </h5>
                  <button
                    className="btn theme-bg-color btn-md text-white fw-bold mt-md-4 mt-2 mend-auto"
                    onclick="location.href = 'shop-left-sidebar.html';"
                  >
                    Shop Now <i className="fa-solid fa-arrow-right icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
