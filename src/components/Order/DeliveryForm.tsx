import { useState } from "react";
import { saveOrderStep, getOrderStep } from "../../utils/order";

const countries = ["Россия", "Казахстан", "Беларусь"];
const cities = {
  "Россия": ["Москва", "Санкт-Петербург", "Екатеринбург"],
  "Казахстан": ["Алматы", "Астана"],
  "Беларусь": ["Минск", "Гомель"]
};

export default function DeliveryForm({ onNext }: { onNext: () => void; onBack: () => void }) {
  const prev = getOrderStep(1);
  const [country, setCountry] = useState<keyof typeof cities | "">(prev.country || "");
  const [city, setCity] = useState(prev.city || "");
  const [street, setStreet] = useState(prev.street || "");
  const [office, setOffice] = useState(prev.office || "");
  const [intercom, setIntercom] = useState(prev.intercom || "");
  const [entrance, setEntrance] = useState(prev.entrance || "");
  const [floor, setFloor] = useState(prev.floor || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveOrderStep(1, { country, city, street, office, intercom, entrance, floor });
    onNext();
  };

  return (
    <form className="max-w-xl mx-auto w-full" onSubmit={handleSubmit}>
      <h2 className="text-4xl font-extrabold uppercase mb-2">Адрес доставки</h2>
      <div className="text-xl mb-6 font-semibold">Этап 1/3</div>
      <div className="mb-4">
        <label className="block mb-1">Страна</label>
        <select value={country} onChange={e => { setCountry(e.target.value as keyof typeof cities | ""); setCity(""); }} className="w-full border px-3 py-2">
          <option value="">Выберите страну</option>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Город</label>
        <select value={city} onChange={e => setCity(e.target.value)} className="w-full border px-3 py-2" disabled={!country}>
          <option value="">Выберите город</option>
          {country && cities[country]?.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Улица, дом</label>
        <input value={street} onChange={e => setStreet(e.target.value)} className="w-full border px-3 py-2" required />
      </div>
      <div className="mb-4 flex gap-4">
        <div className="flex-1">
          <label className="block mb-1">Кв./офис</label>
          <input value={office} onChange={e => setOffice(e.target.value)} className="w-full border px-3 py-2" />
        </div>
        <div className="flex-1">
          <label className="block mb-1">Домофон</label>
          <input value={intercom} onChange={e => setIntercom(e.target.value)} className="w-full border px-3 py-2" />
        </div>
      </div>
      <div className="mb-4 flex gap-4">
        <div className="flex-1">
          <label className="block mb-1">Подъезд</label>
          <input value={entrance} onChange={e => setEntrance(e.target.value)} className="w-full border px-3 py-2" />
        </div>
        <div className="flex-1">
          <label className="block mb-1">Этаж</label>
          <input value={floor} onChange={e => setFloor(e.target.value)} className="w-full border px-3 py-2" />
        </div>
      </div>
      <button type="submit" className="w-full bg-black text-white py-4 mt-2 text-lg font-semibold transition hover:bg-gray-900">
        Продолжить
      </button>
    </form>
  );
}