import { useState } from "react";
import { saveOrderStep, getOrderStep } from "../../utils/order";

export default function RecipientForm({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const prev = getOrderStep(2);
  const [fio, setFio] = useState(prev.fio || "");
  const [phone, setPhone] = useState(prev.phone || "");
  const [email, setEmail] = useState(prev.email || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveOrderStep(2, { fio, phone, email });
    onNext();
  };

  return (
    <form className="max-w-xl mx-auto w-full" onSubmit={handleSubmit}>
      <h2 className="text-4xl font-extrabold uppercase mb-2">Получатель</h2>
      <div className="text-xl mb-6 font-semibold">Этап 2/3</div>
      <div className="mb-4">
        <label className="block mb-1">Ваше Ф.И.О</label>
        <input value={fio} onChange={e => setFio(e.target.value)} className="w-full border px-3 py-2" required />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Ваш номер телефона</label>
        <input value={phone} onChange={e => setPhone(e.target.value)} className="w-full border px-3 py-2" required />
        <span className="text-gray-400 text-xs">* Зарегистрированный в Telegram</span>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Ваша электронная почта</label>
        <input value={email} onChange={e => setEmail(e.target.value)} className="w-full border px-3 py-2" required />
      </div>
      <button type="submit" className="w-full bg-black text-white py-4 mt-2 text-lg font-semibold transition hover:bg-gray-900">
        Продолжить
      </button>
      <button type="button" className="w-full border border-black py-4 mt-2 text-lg font-semibold" onClick={onBack}>
        Назад
      </button>
    </form>
  );
}