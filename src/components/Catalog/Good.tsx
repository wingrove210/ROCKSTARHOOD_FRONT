interface Good {
    name: string;
    price: number;
    description: string;
    image: string;
    soldOut: boolean;
}

export default function Good({name, price, image, soldOut}:Good) {
  return (
    <div className="flex flex-col items-center mb-6">
      <img src={image} alt={name} className="w-full object-contain mb-4" />
      <div className="w-full text-white">
              <p className="uppercase font-bold text-xs mb-1">{name}</p>
      <p>{price}</p>
      <p className="italic font-bold text-sm mb-2">{soldOut ? "SOLD OUT" : ""}</p>
      <button className='uppercase w-full bg-[#e5e5e5] border border-black py-2 mt-auto text-black'>{'В корзину'}</button>
      </div>
    </div>
  )
}
