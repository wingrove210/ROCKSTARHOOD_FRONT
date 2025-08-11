import { useState } from "react";
import Good from './Good'
import { goods } from './goods'

const categories = [
  "ДЖЕРСИ",
  "КУПАЛЬНЫЕ ШОРТЫ (МУЖ.)",
  "КУПАЛЬНИК (ЖЕН.)",
  "КЕПКИ УНИСЕКС"
];

const ITEMS_PER_PAGE = 3;

type Product = {
  name: string;
  category: number;
  image: string;
  description: string;
  price: number;
  discauntprice?: number;
  sizes?: string[]; // добавлено
};

function Drawer({ open, onClose, product }: { open: boolean, onClose: () => void, product: Product | null }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!open || !product) return null;
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* затемнение */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      {/* сама плашка */}
      <div className="relative ml-auto w-full max-w-xl h-full bg-white z-50 overflow-y-auto flex flex-col">
        <button className="absolute top-6 right-6 text-3xl" onClick={onClose}>×</button>
        <div className="p-10 flex flex-col gap-8">
          <div>
            <h2 className="text-4xl font-extrabold uppercase mb-2">{product.name}</h2>
            <div className="italic font-bold text-xl mb-4">{categories[product.category]}</div>
          </div>
          <div className="w-full bg-gray-200 flex justify-center items-center py-8">
            <img src={product.image} alt={product.name} className="max-h-60 object-contain" />
          </div>
          <div>
            <div className="mb-4 text-lg font-semibold">Выбор размера</div>
            <div className="flex gap-3 mb-8">
              {(product.sizes ?? []).map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 border-2 text-lg font-bold rounded transition
                    ${selectedSize === size ? "bg-black text-white border-black" : "bg-white text-black border-gray-400 hover:border-black"}`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="mb-2 text-gray-700">{product.description}</div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-extrabold italic">{product.price.toLocaleString()}₽</span>
              {product.discauntprice && (
                <span className="text-xl line-through text-gray-400">{product.discauntprice.toLocaleString()}₽</span>
              )}
            </div>
            <button
              className="w-full bg-black text-white py-4 mt-2 text-lg font-semibold transition hover:bg-gray-900"
              disabled={!selectedSize}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ItemList() {
  const [page, setPage] = useState<{[key: string]: number}>({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handlePrev = (category: string) => {
    setPage(prev => ({
      ...prev,
      [category]: Math.max((prev[category] || 0) - 1, 0)
    }));
  };

  const handleNext = (category: string, max: number) => {
    setPage(prev => ({
      ...prev,
      [category]: Math.min((prev[category] || 0) + 1, max)
    }));
  };

  return (
    <div className="w-full">
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} product={selectedProduct} />
      {categories.map((category, idx) => {
        const items = goods.filter(product => product.category === idx);
        const maxPage = Math.max(0, items.length - ITEMS_PER_PAGE);
        const currentPage = page[category] || 0;

        return (
          <div key={category} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-3xl font-extrabold">{category}</h2>
              <div className="hidden md:flex gap-4">
                <button
                  onClick={() => handlePrev(category)}
                  disabled={currentPage === 0}
                  className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white text-2xl opacity-80 hover:opacity-100 transition"
                >
                  ←
                </button>
                <button
                  onClick={() => handleNext(category, maxPage)}
                  disabled={currentPage === maxPage}
                  className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white text-2xl opacity-80 hover:opacity-100 transition"
                >
                  →
                </button>
              </div>
            </div>
            <div className="relative">
              {/* Desktop slider */}
              <div className="hidden md:block overflow-hidden">
                <div
                  className="flex gap-8 transition-transform duration-500"
                  style={{
                    width: `${items.length * (100 / ITEMS_PER_PAGE)}%`,
                    transform: `translateX(-${currentPage * (100 / ITEMS_PER_PAGE)}%)`
                  }}
                >
                  {items.map((product, i) => (
                    <div
                      key={i}
                      className="w-1/3 min-w-[320px] max-w-[440px] flex-shrink-0 cursor-pointer"
                      onClick={() => { setSelectedProduct(product); setDrawerOpen(true); }}
                    >
                      <Good
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        soldOut={product.soldOut}
                        description={product.description}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Mobile horizontal scroll */}
              <div className="flex md:hidden gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {items.map((product, i) => (
                  <div
                    key={i}
                    className="min-w-[180px] max-w-[220px] flex-shrink-0 cursor-pointer"
                    onClick={() => { setSelectedProduct(product); setDrawerOpen(true); }}
                  >
                    <Good
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      soldOut={product.soldOut}
                      description={product.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
