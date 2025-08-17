import { getCart } from "../../utils/cart";
import { useState, useEffect } from "react";

export default function OrderSummary() {
  interface CartItem {
    product: {
      price: number;
      discauntprice?: number;
    };
    count: number;
  }

  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => { setCart(getCart()); }, []);
  const total = cart.reduce((sum, item) => sum + item.product.price * item.count, 0);
  const oldTotal = cart.reduce((sum, item) => sum + (item.product.discauntprice || 0) * item.count, 0);

  return (
    <>
    <div className="bg-gray-200 p-8 rounded max-w-md hidden 2xl:block 2xl:p-8 xl:block lg:block md:hidden sm:hidden">
      <h2 className="text-3xl font-extrabold uppercase mb-4">Сумма заказа</h2>
      <input type="text" placeholder="Промокод" className="border border-black px-4 py-3 text-center font-semibold mb-6 w-full" />
      <div className="flex justify-between mb-2">
        <span>Сумма корзины</span>
        <span>
          <span className="text-xl font-extrabold italic">{total.toLocaleString()}₽</span>
          {oldTotal > 0 && <span className="text-xl line-through text-gray-400 ml-2">{oldTotal.toLocaleString()}₽</span>}
        </span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Сумма доставки</span>
        <span className="text-xl font-extrabold italic">1250 ₽</span>
      </div>
    </div>
    <div className="absolute bottom-5 flex w-full justify-between px-10 items-center 2xl:hidden xl:hidden lg:hidden md:flex sm:flex">
        <p>Сумма заказа:</p>
        <p className="text-xl font-bold">{total.toLocaleString()}₽</p>
      </div>
    </>
  );
}