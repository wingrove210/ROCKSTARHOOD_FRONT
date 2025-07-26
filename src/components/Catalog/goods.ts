import tshirt from '../../assets/Catalog/nameSetDark.png'
import shorts from '../../assets/Catalog/shortsDark.png'
import ava from '../../assets/Ava.svg'
export interface Good {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  soldOut: boolean;
}

export const goods: Good[] = [
  // Джерси
  {
    name: "NAME SET DARK",
    price: 0,
    description: "",
    image: `${tshirt}`,
    category: "ДЖЕРСИ",
    soldOut: true,
  },
  {
    name: "NAME SET WHITE - DARK",
    price: 0,
    description: "",
    image: `${tshirt}`,
    category: "ДЖЕРСИ",
    soldOut: true,
  },
  {
    name: "NAME SET DARK",
    price: 0,
    description: "",
    image: `${tshirt}`,
    category: "ДЖЕРСИ",
    soldOut: true,
  },
  {
    name: "NAME SET RED",
    price: 0,
    description: "",
    image: `${tshirt}`,
    category: "ДЖЕРСИ",
    soldOut: true,
  },
  {
    name: "NAME SET GOLD",
    price: 0,
    description: "",
    image: `${tshirt}`,
    category: "ДЖЕРСИ",
    soldOut: true,
  },
  // Купальные шорты (муж.)
  {
    name: "NAME SHORTS DARK",
    price: 0,
    description: "",
    image: `${shorts}`,
    category: "КУПАЛЬНЫЕ ШОРТЫ (МУЖ.)",
    soldOut: true,
  },
  {
    name: "NAME SHORTS WHITE",
    price: 0,
    description: "",
    image: `${shorts}`,
    category: "КУПАЛЬНЫЕ ШОРТЫ (МУЖ.)",
    soldOut: true,
  },
  {
    name: "NAME SHORTS DARK",
    price: 0,
    description: "",
    image: `${shorts}`,
    category: "КУПАЛЬНЫЕ ШОРТЫ (МУЖ.)",
    soldOut: true,
  },
  {
    name: "NAME SHORTS RED",
    price: 0,
    description: "",
    image: `${shorts}`,
    category: "КУПАЛЬНЫЕ ШОРТЫ (МУЖ.)",
    soldOut: true,
  },
  {
    name: "NAME SHORTS GOLD",
    price: 0,
    description: "",
    image: `${shorts}`,
    category: "КУПАЛЬНЫЕ ШОРТЫ (МУЖ.)",
    soldOut: true,
  },
  // Купальник (жен.)
  {
    name: "NAME SWIMSUIT",
    price: 0,
    description: "",
    image: `${ava}`,
    category: "КУПАЛЬНИК (ЖЕН.)",
    soldOut: true,
  },
  {
    name: "NAME SWIMSUIT",
    price: 0,
    description: "",
    image: `${ava}`,
    category: "КУПАЛЬНИК (ЖЕН.)",
    soldOut: true,
  },
  {
    name: "NAME SWIMSUIT",
    price: 0,
    description: "",
    image: `${ava}`,
    category: "КУПАЛЬНИК (ЖЕН.)",
    soldOut: true,
  },
  {
    name: "NAME SWIMSUIT RED",
    price: 0,
    description: "",
    image: `${ava}`,
    category: "КУПАЛЬНИК (ЖЕН.)",
    soldOut: true,
  },
  {
    name: "NAME SWIMSUIT GOLD",
    price: 0,
    description: "",
    image: `${ava}`,
    category: "КУПАЛЬНИК (ЖЕН.)",
    soldOut: true,
  },
  // Кепки унисекс
  {
    name: "NAME CAP",
    price: 0,
    description: "",
    image: `${ava}`,
    category: "КЕПКИ УНИСЕКС",
    soldOut: true,
  },
  {
    name: "NAME CAP",
    price: 0,
    description: "",
    image: `${ava}`,
    category: "КЕПКИ УНИСЕКС",
    soldOut: true,
  },
  {
    name: "NAME CAP",
    price: 0,
    description: "",
    image: `${ava}`,
    category: "КЕПКИ УНИСЕКС",
    soldOut: true,
  },
  {
    name: "NAME CAP RED",
    price: 0,
    description: "",
    image: `${ava}`,
    category: "КЕПКИ УНИСЕКС",
    soldOut: true,
  },
  {
    name: "NAME CAP GOLD",
    price: 0,
    description: "",
    image: `${ava}`,
    category: "КЕПКИ УНИСЕКС",
    soldOut: true,
  },
];