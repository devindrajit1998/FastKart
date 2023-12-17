import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import AddProducts from "../products/AddProducts";

export default function AdminLayout() {
  return (
    <>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <Header />
          {/* <Sidebar /> */}
          <AddProducts/>
       
      </div>
    </>
  );
}
