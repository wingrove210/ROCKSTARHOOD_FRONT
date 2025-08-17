import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import burger from "../../../assets/burger.svg";
import burgerWhite from "../../../assets/Drop/burger.svg";
import star from "../../../assets/STAR.svg";
import cartIcon from "../../../assets/cart.svg";

interface HeaderType {
  textColor: string;
  burgerColor: string;
  onCartClick: () => void;
}

export default function Header({
  textColor,
  burgerColor,
  onCartClick,
}: HeaderType) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Marsy Hub" },
    { to: "/drop", label: "Свежий дроп" },
    { to: "/catalog", label: "Эксклюзивный мерч" },
  ];

  return (
    <header
      className={`py-2 px-2 flex justify-end items-center text-${textColor} z-2 absolute top-0 w-full 2xl:justify-between 2xl:px-10 xl:justify-between xl:px-10 lg:justify-between lg:px-10 md:justify-end md:px-2 sm:justify-end sm:px-2`}
    >
      <img
        src={star}
        alt=""
        className="hidden h-15 2xl:block xl:block md:hidden sm:hidden"
      />
      <div className="hidden justify-between w-1/3 2xl:flex xl:flex lg:hidden md:hidden sm:hidden">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={
              location.pathname === link.to ? "font-bold underline" : ""
            }
          >
            {link.label}
          </Link>
        ))}
        <button onClick={onCartClick} className="ml-6">
          <img src={cartIcon} alt="Корзина" className="h-6 w-6" />
        </button>
      </div>
      <button onClick={onCartClick} className="mr-3 block 2xl:hidden xl:hidden lg:hidden md:block sm:block">
        <img src={cartIcon} alt="Корзина" className="h-6 w-6" />
      </button>
      <button
        className="block w-7 2xl:hidden xl:hidden lg:hidden md:block sm:block md:w-2 sm:w-2"
        onClick={() => setMenuOpen(true)}
      >
        <img
          src={burgerColor === "white" ? burgerWhite : burger}
          alt="menu"
          className="w-full h-full"
        />
      </button>
      {/* Мобильное меню */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col px-6 py-2">
          <div className="flex justify-between items-center mb-8">
            <img src={star} alt="" className="h-12" />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-4xl font-bold"
            >
              &times;
            </button>
          </div>
          <h2 className="text-4xl font-extrabold uppercase mb-8 text-white">
            Меню навигации
          </h2>
          <div className="flex flex-col gap-4 mb-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`w-full py-4 text-center rounded font-semibold text-lg
                  ${
                    location.pathname === link.to
                      ? "bg-[#e5e5e5] text-black"
                      : "bg-transparent text-white border border-white"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Можно добавить описание или другие элементы */}
        </div>
      )}
    </header>
  );
}
