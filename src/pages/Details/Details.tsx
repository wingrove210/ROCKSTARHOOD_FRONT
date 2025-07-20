import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api/productsApi";
import type { Product } from "../../api/productsApi";

export default function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) fetchProduct(Number(id)).then(setProduct);
  }, [id]);

  if (!product) return <div>Загрузка...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <div style={{ display: "flex", gap: 24 }}>
        <div>
          {product.images?.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={product.name}
              style={{ width: 300, marginBottom: 12 }}
            />
          ))}
        </div>
        <div>
          <p>{product.description}</p>
          <p>Цена: {product.price} ₽</p>
          <p>В наличии: {product.stock}</p>
        </div>
      </div>
    </div>
  );
}
