import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct, type Product } from "../../api/productsApi";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProduct(Number(id)).then(setProduct);
  }, [id]);

  if (!product) return <div>Загрузка...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      {/* ... */}
    </div>
  );
}