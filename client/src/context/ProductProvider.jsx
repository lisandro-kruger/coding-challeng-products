import { createContext, useContext, useState } from "react";
import { getProductsRequest} from "../api/products.api";
import { ProductContext } from "./ProductContext";


export const useProducts = () => {
    const context = useContext(ProductContext);

    if(context === undefined){
        throw new Error("useProduct must be used within a ProductContextProvider");
    }
    return context;
};

export const ProductContextProvider = ({children}) => {

    const [product, setProduct] = useState();

    async function loadProducts () {
        const response = await getProductsRequest();
        setProduct(response.data);
    }

    return (
        <ProductContext.Provider value={{loadProducts}}>
            {children}
        </ProductContext.Provider>
    )
}