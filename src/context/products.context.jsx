import {createContext, useEffect, useState} from 'react'

import SHOP_DATA from '../shop-data.js'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.util.js'

export const ProductContext = createContext({
    categoriesMap: {}
})

export const ProductsProvider = ({children}) => {
    const [categoriesMap, setProducts] = useState({})
   
    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            //console.log(categoryMap)
            setProducts(categoryMap)
        }

        getCategoriesMap()
    },[])
    const value = {categoriesMap};
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}