import { FaSort } from "react-icons/fa"; // или используйте свой SVG

const categories = [
  "Категории",
  "Одежда",
  "Обувь",
  "Аксессуары",
  "Новинки",
  "Скидки",
  "Для дома",
  "Электроника",
];

export default function Categories() {
  return (
    <div className="w-full overflow-x-auto pr-4">
      <div className="flex h-14 gap-4 px-4 pr-4 py-2 text-white items-center" style={{ minWidth: 600 }}>
        <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full shrink-0">
          <FaSort size={22} />
        </div>
        {categories.map((cat, idx) => (
          <div
            key={cat}
            className="bg-gray-700 rounded-full flex items-center px-6 h-12 text-lg font-semibold shrink-0"
          >
            {cat}
            {idx === 0 && (
              <svg className="ml-2" width={18} height={18} viewBox="0 0 20 20" fill="none">
                <path d="M5 8l5 5 5-5" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
