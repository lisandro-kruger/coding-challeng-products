function ProductCardDetails({ product, isOpen, onRequestClose }) {
    if (!isOpen) {
      return null;
    }
  
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
  <div className="bg-white p-4 rounded shadow-lg overflow-auto w-3/4 h-3/4">
    <h2 className="text-2xl font-bold mb-2 text-black">{product.name}</h2>
    <img
      className="w-3/4 h-3/4 object-contain mb-4 mx-auto"
      src={product.image_url}
      alt={product.name}
    />
    <p className="mb-2 text-black">{product.description}</p>
    <p className="mb-4 text-black">{product.price}</p>
    <button
      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onRequestClose}
    >
      Cerrar
    </button>
  </div>
</div>


    );
  }
  
  export default ProductCardDetails;    
  