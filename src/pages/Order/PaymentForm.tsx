// import { getFullOrder } from "../../utils/order";

export default function PaymentForm({ onBack }: { onBack: () => void }) {
  // Removed unused 'order' variable

  const handlePay = () => {
    // Здесь логика оплаты
    alert("Оплата прошла!");
    localStorage.removeItem('order');
  };

  return (
    <div className="max-w-xl mx-auto w-full">
      <h2 className="text-4xl font-extrabold uppercase mb-2">Оплата заказа</h2>
      <div className="text-xl mb-6 font-semibold">Этап 3/3</div>
      <button className="w-full bg-black text-white py-4 mt-2 text-lg font-semibold transition hover:bg-gray-900" onClick={handlePay}>
        Оплатить
      </button>
      <button className="w-full border border-black py-4 mt-2 text-lg font-semibold" onClick={onBack}>
        Назад
      </button>
    </div>
  );
}