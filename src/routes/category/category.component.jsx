import './category.styles.scss'
import { useParams } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../context/products.context';
import ProductCard from '../../components/product-card/product-card.component';


const Category = () => {
   const {category} = useParams();
   const {categoriesMap} = useContext(ProductContext)
   const [products, setProducts] = useState([])

   useEffect(()=>{
        setProducts(categoriesMap[category])
   },
   [categoriesMap, category])
     return (
         <React.Fragment>
         <h2 className='category-title'>{category.toUpperCase()}</h2>
         <div className='category-container'>
         {
             products?.map((product)=> <ProductCard key={product.id} product={product}/>)
         }
          </div>
         
         </React.Fragment>
      
    )
}


export default Category;