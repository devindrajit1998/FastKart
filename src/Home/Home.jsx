import React from "react";
import Layout from "../Layout/Layout";
import MainSlider from "./MainSlider";
import MiniSlider from "./MiniSlider";
import CategorySlider from "./CategorySlider";
import ProductSlider from "./ProductSlider";

export default function Home() {
  return (
    <>
      <Layout />
      <section className="home-section-2 home-section-bg pt-0 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <MainSlider />
            </div>
          </div>
        </div>
      </section>
      <section class="banner-section banner-small ratio_65">
        <div class="container-fluid-lg">
          <MiniSlider />
        </div>
      </section>
      <section className="category-section-3">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Shop By Categories</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div>
                <CategorySlider />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section-3">
        <div className="container-fluid-lg">
          <ProductSlider title="Electronics Products" sliderCount={7} />
        </div>
      </section>
      {/* <section className="product-section product-section-3">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Top Selling Items</h2>
          </div>
          <div className="row g-sm-4 g-3">
            <div class="col-xxl-8 col-lg-7 order-lg-1">
              <div>
                <ProductSlider sliderCount={4} />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="product-section-3">
        <div className="container-fluid-lg">
          <ProductSlider title="Fashion Gallery" sliderCount={7} />
        </div>
      </section>
      <section className="product-section-3">
        <div className="container-fluid-lg">
          <ProductSlider title="Home & Living" sliderCount={7} />
        </div>
      </section>
    </>
  );
}
