import { Route, Routes } from "react-router-dom";

import ProductList from "./pages/ProductList";
import NotFound from "./pages/NotFound";
import { ProductContextProvider } from "./context/ProductProvider";

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <div className="container mx-auto py-4 px-20">
        <ProductContextProvider>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProductContextProvider>
      </div>
    </div>
  );
}

export default App;
