import { useEffect, useState } from "react";
import { fetchProducts } from "../../api/productsApi";
import type { Product } from "../../api/productsApi";
import { useNavigate } from "react-router-dom";
import Item from "../Item/Item";
import Header from "../Layout/Header/Header";
import Categories from "../Categories/Categories";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div>
      <Header/>
      <Categories/>
      <div className="grid grid-cols-2 gap-2 items-center px-4 py-4">
        {products.map((product) => (
          <Item
            key={product.id}
            product={product}
            onClick={() => navigate(`/product/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
