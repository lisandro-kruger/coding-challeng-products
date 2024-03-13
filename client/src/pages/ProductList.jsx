import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

function ProductPage() {
    const {products, loadProducts} = useProducts();

    useEffect(() => {
        loadProducts();
    }, []);

    function renderMain(){
        if(products.length === 0) {
            return <h1 className="text-4xl text-white" >No Products yet</h1>
        }

        return products.map((product) => <ProductCard product={product} key={product.id} />);
    }

    return (
        <>
        <h1 className="text-5xl text-white font-bold text-center mb-5">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">{renderMain()}</div>
        </>
        
    );
}

export default ProductPage;