import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "../common/ProductCard";
import ProductModal from "../common/ProductModal";
import { useProductProvider } from "../ContextAPI/ProductContext";

export default function ProductSlider(props) {
  const {openModal} = useProductProvider()
  return (
    <>
      <div className="title">
        <h2 >{props.title}</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <div>
            <Swiper
              spaceBetween={10}
              slidesPerView={props.sliderCount}
              loop="true"
              autoplay="true"
            >
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {openModal && (
        <ProductModal/>
      )}
      
    </>
  );
}
