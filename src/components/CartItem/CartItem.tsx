interface CartItemProps {
  item: {
    product: {
      name: string;
      price: number;
      discauntprice?: number;
      image: string;
    };
    size: string;
    count: number;
  };
  idx: number;
  onRemove: (idx: number) => void;
  onChangeCount: (idx: number, delta: number) => void;
}

export function CartItemDesktop({ item, idx, onRemove, onChangeCount }: CartItemProps) {
  return (
    <div className="grid grid-cols-3 gap-4 border-b pb-4 mb-4 items-center w-full">
      {/* Фото и радио */}
      <div className="flex items-center justify-center">
        <span className={`inline-block w-5 h-5 rounded-full border-2 mr-2 ${idx === 0 ? "bg-black" : ""}`}></span>
        <img src={item.product.image} alt={item.product.name} className="w-24 h-24 object-contain bg-gray-200" />
      </div>
      {/* Описание */}
      <div className="flex flex-col justify-center">
        <div className="font-extrabold text-lg uppercase">{item.product.name}</div>
        <div className="italic font-bold text-base mb-2">Джерси</div>
        <div className="px-4 py-2 bg-black text-white font-bold text-lg mb-2 w-auto">{item.size}</div>
      </div>
      {/* Управление и цена */}
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-4">
          <button className="text-xl" onClick={() => onRemove(idx)}>🗑️</button>
          <button className="bg-gray-200 rounded-full w-8 h-8 text-xl" onClick={() => onChangeCount(idx, -1)}>-</button>
          <span className="font-bold text-lg">{item.count}</span>
          <button className="bg-gray-200 rounded-full w-8 h-8 text-xl" onClick={() => onChangeCount(idx, 1)}>+</button>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <span className="font-bold text-xl italic">{item.product.price.toLocaleString()}₽</span>
          {item.product.discauntprice && (
            <span className="line-through text-gray-400">{item.product.discauntprice.toLocaleString()}₽</span>
          )}
        </div>
      </div>
    </div>
  );
}

export function CartItemMobile({ item, idx, onRemove, onChangeCount }: CartItemProps) {
  return (
    <div className="flex flex-col gap-4 border-b pb-4 mb-4 items-center w-full">
      <div className="flex items-center justify-center">
        <span className={`inline-block w-5 h-5 rounded-full border-2 mr-2 ${idx === 0 ? "bg-black" : ""}`}></span>
        <img src={item.product.image} alt={item.product.name} className="w-24 h-24 object-contain bg-gray-200" />
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="font-extrabold text-lg uppercase text-center">{item.product.name}</div>
        <div className="italic font-bold text-base mb-2 text-center">Джерси</div>
        <div className="inline-block px-4 py-2 bg-black text-white font-bold text-lg mb-2 w-auto">
          {item.size}
        </div>
        <div className="flex gap-2 items-center mt-2">
          <span className="font-bold text-xl italic">{item.product.price.toLocaleString()}₽</span>
          {item.product.discauntprice && (
            <span className="line-through text-gray-400">{item.product.discauntprice.toLocaleString()}₽</span>
          )}
        </div>
        <div className="flex items-center gap-4 mt-4">
          <button className="text-xl" onClick={() => onRemove(idx)}>🗑️</button>
          <button className="bg-gray-200 rounded-full w-8 h-8 text-xl" onClick={() => onChangeCount(idx, -1)}>-</button>
          <span className="font-bold text-lg">{item.count}</span>
          <button className="bg-gray-200 rounded-full w-8 h-8 text-xl" onClick={() => onChangeCount(idx, 1)}>+</button>
        </div>
      </div>
    </div>
  );
}