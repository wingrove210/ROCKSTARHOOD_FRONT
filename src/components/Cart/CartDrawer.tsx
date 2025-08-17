import { useEffect, useState } from "react";
import { getCart, removeFromCart, changeCount, clearCart } from "../../utils/cart";
import { useNavigate } from "react-router-dom";
import { CartItemDesktop } from "../CartItem/CartItemDesctop";
import { CartItemMobile } from "../CartItem/CartItemMobile";
import cross from "../../assets/cross.svg";
import bucket from "../../assets/bucket.svg";

export default function CartDrawer({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();

  interface CartItem {
    product: {
      name: string;
      price: number;
      discauntprice?: number;
      image: string;
    };
    size: string;
    count: number;
  }

  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (index: number) => {
    removeFromCart(index);
    setCart(getCart());
  };

  const handleChangeCount = (index: number, delta: number) => {
    changeCount(index, delta);
    setCart(getCart());
  };

  const handleClearCart = () => {
    clearCart();
    setCart([]);
  };

  // Итоговая сумма
  const filteredCart = cart.filter(
    (item) => item.product && typeof item.product.price === "number"
  );
  const total = filteredCart.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.count,
    0
  );
  const oldTotal = filteredCart.reduce(
    (sum, item) => sum + (item.product?.discauntprice || 0) * item.count,
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative ml-auto w-full h-full bg-white z-50 overflow-y-auto flex flex-col max-w-xl md:max-w-none md:w-full">
        <div className="w-full flex justify-between px-4 py-4 mt-2">
           <h2 className="text-3xl font-extrabold uppercase">Корзина</h2>
          <div className="flex gap-2">
            <button onClick={handleClearCart}>
              <img src={bucket} alt="" />
            </button>
            <span className="h-full w-[1px] bg-black"></span>
            <button className="top-6 right-6 text-3xl" onClick={onClose}>
              <img src={cross} alt="" />
            </button>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-8 2xl:p-10 xl:p-8 lg:p-6 md:p-4 sm:p-4">
          {filteredCart.length === 0 ? (
            <div className="text-center text-gray-500">Корзина пуста</div>
          ) : (
            filteredCart.map((item, idx) => (
              <>
                <div className="hidden md:block">
                  <CartItemDesktop
                    item={item}
                    idx={idx}
                    onRemove={handleRemove}
                    onChangeCount={handleChangeCount}
                  />
                </div>
                <div className="block md:hidden">
                  <CartItemMobile
                    item={item}
                    idx={idx}
                    onRemove={handleRemove}
                    onChangeCount={handleChangeCount}
                  />
                </div>
              </>
            ))
          )}
          {/* Промокод */}
          <input
            type="text"
            placeholder="Промокод"
            className="border border-black px-4 py-3 text-center font-semibold mb-6"
          />
          {/* Итог */}
          <div className="mb-2">
            <span className="block text-lg mb-1">Итого</span>
            <span className="text-2xl font-extrabold italic">
              {total.toLocaleString()}₽
            </span>
            {oldTotal > 0 && (
              <span className="text-xl line-through text-gray-400 ml-4">
                {oldTotal.toLocaleString()}₽
              </span>
            )}
          </div>
          {/* Кнопка оформления */}
          <button
            className="w-full bg-black text-white py-4 mt-2 text-lg font-semibold transition hover:bg-gray-900"
            onClick={() => {
              onClose();
              navigate("/order");
            }}
          >
            Перейти к оформлению
          </button>
        </div>
      </div>
    </div>
  );
}
