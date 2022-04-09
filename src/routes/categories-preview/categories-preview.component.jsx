import React, { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import {ProductContext} from '../../context/products.context'
const CategoriesPreview = ()=>{
    const {categoriesMap} = useContext(ProductContext)
    console.log(categoriesMap)
    return(
      <div className="shop-container">
      {Object.keys(categoriesMap).map((title)=>{
          const products = categoriesMap[title];
          console.log(products)
          return <CategoryPreview key={title} title={title} products={products} />
      })}
      
      </div>
     

    )

}

export default CategoriesPreview;