import tshirt from '../../assets/Catalog/nameSetDark.png'
import { addToCart } from '../../utils/cart';

interface Good {
  name: string;
  price: number;
  description: string;
  image: string;
  soldOut: boolean;
  category?: number;
  discauntprice?: number;
  sizes?: string[];
}

export default function Good({ name, price, description, image, soldOut, category = 0, discauntprice, sizes }: Good) {
  return (
    <div className="flex flex-col items-center mb-6">
      <img src={image || tshirt} alt={name} className="w-full object-contain mb-4" />
      <div className="w-full text-white">
        <p className="uppercase font-bold text-xs mb-1">{name}</p>
        <p>{price}₽</p>
        {discauntprice && (
          <p className="text-gray-400 line-through text-xs">{discauntprice}₽</p>
        )}
        <p className="italic font-bold text-sm mb-2">{soldOut ? "SOLD OUT" : ""}</p>
        <button
          className='uppercase w-full bg-[#e5e5e5] border border-black py-2 mt-auto text-black'
          onClick={() => addToCart({ name, price, category, image: image || tshirt, description, discauntprice, sizes }, "")}
          disabled={soldOut}
        >
          В корзину
        </button>
      </div>
    </div>
  )
}
