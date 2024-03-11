import { useState } from "react";
import ProductCardDetails from "./ProductCardDetails";

function ProductCard({ product }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4 max-w-xs mx-auto relative">
      <img
        className="w-full h-64 object-cover mb-4"
        src={product.image_url}
        alt={product.name}
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-lg">{product.price}</p>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowDetails(true)}
      >
        Ver detalles
      </button>
      <ProductCardDetails
        product={product}
        isOpen={showDetails}
        onRequestClose={() => setShowDetails(false)}
      />
    </div>
  );
}

export default ProductCard;