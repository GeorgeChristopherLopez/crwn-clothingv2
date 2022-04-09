import React, { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import './shop.styles.scss'
import {ProductContext} from '../../context/products.context'
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { Route, Routes } from "react-router-dom";
import Category from "../category/category.component";

const Shop = ()=>{
     return(

      <Routes>
          <Route index element={   <CategoriesPreview/>} />
          <Route path=":category" element={   <Category/>} />

      </Routes>
  

    )

}

export default Shop;