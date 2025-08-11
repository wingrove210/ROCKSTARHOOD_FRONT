import tshirt from '../../assets/Catalog/nameSetDark.png'
import shorts from '../../assets/Catalog/shortsDark.png'
import ava from '../../assets/Ava.svg'
export interface Good {
  name: string;
  category: number;
  image: string;
  description: string;
  price: number;
  discauntprice?: number;
  sizes?: string[]; 
  soldOut: boolean;
}

export const goods: Good[] = [
  // Джерси
  {
    name: "NEM SET DARK",
    category: 0,
    image: `${tshirt}`,
    description: "Описание товара...",
    price: 4500,
    discauntprice: 7550,
    sizes: ["XS", "S", "M", "L", "XL"],
    soldOut: false,
  },
  {
    name: "NAME SET WHITE - DARK",
    price: 0,
    description: "",
    image: `${tshirt}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NAME SET DARK",
    price: 0,
    description: "",
    image: `${tshirt}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NAME SET RED",
    price: 0,
    description: "",
    image: `${tshirt}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NAME SET GOLD",
    price: 0,
    description: "",
    image: `${tshirt}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NEM SET DARK",
    category: 0,
    image: "/img/nem-set-dark.png",
    description: "Описание товара...",
    price: 4500,
    discauntprice: 7550,
    sizes: ["XS", "S", "M", "L", "XL"],
    soldOut: false,
  },
  // Купальные шорты (муж.)
  {
    name: "NAME SHORTS DARK",
    price: 0,
    description: "",
    image: `${shorts}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NAME SHORTS WHITE",
    price: 0,
    description: "",
    image: `${shorts}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NAME SHORTS DARK",
    price: 0,
    description: "",
    image: `${shorts}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NAME SHORTS RED",
    price: 0,
    description: "",
    image: `${shorts}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NAME SHORTS GOLD",
    price: 0,
    description: "",
    image: `${shorts}`,
    category: 0,
    soldOut: true,
  },
  // Купальник (жен.)
  {
    name: "NAME SWIMSUIT",
    price: 0,
    description: "",
    image: `${ava}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NAME SWIMSUIT",
    price: 0,
    description: "",
    image: `${ava}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NAME SWIMSUIT",
    price: 0,
    description: "",
    image: `${ava}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NAME SWIMSUIT RED",
    price: 0,
    description: "",
    image: `${ava}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NAME SWIMSUIT GOLD",
    price: 0,
    description: "",
    image: `${ava}`,
    category: 0,
    soldOut: true,
  },
  // Кепки унисекс
  {
    name: "NAME CAP",
    price: 0,
    description: "",
    image: `${ava}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NAME CAP",
    price: 0,
    description: "",
    image: `${ava}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NAME CAP",
    price: 0,
    description: "",
    image: `${ava}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NAME CAP RED",
    price: 0,
    description: "",
    image: `${ava}`,
    category: 0,
    soldOut: true,
  },
  {
    name: "NAME CAP GOLD",
    price: 0,
    description: "",
    image: `${ava}`,
    category: 0,
    soldOut: true,
  },
];