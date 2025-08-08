import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Good from './Good'
import { fetchProducts, type Product } from '../../api/productsApi'

const categories = [
  "ДЖЕРСИ",
  "КУПАЛЬНЫЕ ШОРТЫ (МУЖ.)",
  "КУПАЛЬНИК (ЖЕН.)",
  "КЕПКИ УНИСЕКС"
];

const ITEMS_PER_PAGE = 3;

export default function ItemList() {
  const [page, setPage] = useState<{[key: string]: number}>({});
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

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

  if (loading) return <div className="text-white">Загрузка...</div>;

  return (
    <div className="w-full">
      {categories.map((category, idx) => {
        // idx — это и есть integer категория из бэка
        const items = products.filter(product => product.category === idx);
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
                  {items.map((product) => (
                    <div
                      key={product.id}
                      className="w-1/3 min-w-[320px] max-w-[440px] flex-shrink-0"
                    >
                      <Link to={`/product/${product.id}`}>
                        <Good
                          name={product.name}
                          price={product.price}
                          image={product.images?.[0] || ""}
                          soldOut={product.stock === 0}
                          description={product.description}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              {/* Mobile horizontal scroll */}
              <div className="flex md:hidden gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {items.map((product) => (
                  <div
                    key={product.id}
                    className="min-w-[180px] max-w-[220px] flex-shrink-0"
                  >
                    <Link to={`/product/${product.id}`}>
                      <Good
                        name={product.name}
                        price={product.price}
                        image={product.images?.[0] || ""}
                        soldOut={product.stock === 0}
                        description={product.description}
                      />
                    </Link>
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
