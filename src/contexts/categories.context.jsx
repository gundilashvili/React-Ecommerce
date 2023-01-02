import { useState, createContext, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
    categoriesMap: {}
})


export const CategoriesProvider = ({children}) => {
    
    const [categoriesMap, seCategoriesMap] = useState({}); 


    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            seCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, [])
    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}