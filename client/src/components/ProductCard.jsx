function ProductCard({product}) {

    return (
        <div className="bg-zinc-700 text-white rounded-md p-4">
          <header className="flex justify-between">
            <h2 className="text-sm font-bold">{product.name}</h2>
          </header>
          <p className="text-xs">{product.description}</p>
          <p className="text-xs">{product.image_url}</p>
          <p className="text-xs">{product.prince}</p>
        </div>
      );
}

export default ProductCard;