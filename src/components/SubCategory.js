import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import SubCatBack from "./SubCatBack";
import SubCatGallery from "./SubCatGallery";
import "./shop_style.css";

function SubCategory() {
  return (
    <div>
      <SubCatBack />
      <SubCatGallery />
    </div>
  );
}

export default SubCategory;
