interface ItemProps {
  product: {
    id: number;
    name: string;
    images: string[];
    description: string;
    price: number;
    stock: number;
  };
  onClick?: () => void;
}

export default function Item({ product, onClick }: ItemProps) {
  return (
    <div className="text-white" onClick={onClick}>
      <img
        className="rounded-2xl h-60"
        src={product.images?.[0] || ""}
        alt={product.name}
      />
      <div className="mt-2">
        <p>{product.price} ₽</p>
        <h3>{product.name}</h3>
        <p>В наличии: {product.stock}</p>
      </div>
    </div>
  );
}
