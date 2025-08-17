import bucket from '../../assets/bucket.svg'
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
export function CartItemMobile({
  item,
  idx,
  onRemove,
  onChangeCount,
}: CartItemProps) {
  return (
    <>
      <div className="flex flex-col gap-3 pb-4 mb-4 items-center w-full">
        <div className="flex gap-2">
        <div className="flex items-center justify-center">
<div className="relative w-34 h-24 flex-shrink-0">
  <span
    className={`absolute left-2 top-2 w-5 h-5 rounded-full border-2 mr-2 ${idx === 0 ? "bg-black" : ""}`}
  ></span>
  <img
    src={item.product.image}
    alt={item.product.name}
    className="w-fit h-24 object-contain bg-gray-200"
  />
</div>
        </div>
        <div className="flex flex-col w-full justify-between items-start">
          <div className="font-extrabold text-md uppercase text-left">
            {item.product.name}
          </div>
          <div className="italic font-bold text-sm mb-2 text-center">
            Джерси
          </div>
          <div className="inline-block px-2 py-1 bg-black text-white font-bold text-sm w-auto">
            {item.size}
          </div>
        </div>
          <div className="flex gap-2 items-end">
            <span className="font-bold text-lg italic">
              {item.product.price.toLocaleString()}₽
            </span>
            {item.product.discauntprice && (
              <span className="line-through text-gray-400 text-sm">
                {item.product.discauntprice.toLocaleString()}₽
              </span>
            )}
          </div>
        </div>
        <div className="w-full flex justify-start">
                    <div className="flex items-center gap-2">
          <button className="" onClick={() => onRemove(idx)}>
            <img src={bucket} alt="" className='w-7 h-7'/>
          </button>
          <button
            className="bg-gray-200 rounded-full w-8 h-8 text-xl ml-2"
            onClick={() => onChangeCount(idx, -1)}
          >
            -
          </button>
          <span className="font-bold text-lg">{item.count}</span>
          <button
            className="bg-gray-200 rounded-full w-8 h-8 text-xl"
            onClick={() => onChangeCount(idx, 1)}
          >
            +
          </button>
        </div>
        </div>
      </div>
    </>
  );
}
