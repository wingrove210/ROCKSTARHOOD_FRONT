import star from '../../assets/STAR.svg'
import marsy from '../../assets/MARSY.svg'
import Marsy from '../../assets/Marsy.png'
import Ma from '../../assets/MA.svg'
import Rsy from '../../assets/RSY.svg'
import MarsyHorizontal from '../../assets/Marsy_horizontal.svg'
import burger from '../../assets/burger.svg'
export default function Home() {
  return (
    <div>
      <header className="py-2 px-2 flex justify-end items-center text-black z-2 absolute top-0 w-full 2xl:justify-between 2xl:px-10 xl:justify-between xl:px-10 lg:justify-between lg:px-10 md:justify-end md:px-2 sm:justify-end sm:px-2">
        <img src={star} alt="" className="h-15 hidden 2xl:block xl:block md:hidden sm:hidden" />
        <div className="hidden justify-between w-1/3 2xl:flex xl:flex lg:hidden md:hidden sm:hidden">
          <p>Marsy Hub</p>
          <p>Свежий дроп</p>
          <p>Эксклюзивный мерч</p>
        </div>
        <img src={burger} alt="" className='block 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden'/>
      </header>
      <div className="w-full h-screen absolute flex flex-col md:flex-row 2xl:flex-row">
        <div className="h-full bg-black flex justify-between order-2 2xl:order-2 2xl:w-1/2 xl:order-1 xl:w-1/2 md:order-2 md:w-full sm:order-2 sm:w-full">
          <div className="text-white h-full flex items-start flex-col justify-center gap-5 pl-4 px-4 2xl:pl-10 2xl:px-0 xl:pl-10 xl:px-0 lg:pl-10 lg:px-0 md:pl-4 md:px-4 sm:pl-4 sm:px-4">
            <div>
              <img src={MarsyHorizontal} alt="" />
            </div>
            <p className="w-full">
              Йо, слушай сюда! Этот сайт — не просто страница, это твоя входная
              дверь в мир MARSY — короля улиц и битов. Здесь, в чёрно-белом
              стиле 00-х, ты почувствуешь настоящую гангстерскую атмосферу, где
              каждый кадр — как снимок из истории, а имя MARSY на правом краю —
              это знак уважения и власти.
            </p>
            <p className="w-3/4 ml-20">
              Заходи, смотри, погружайся — этот сайт для тех, кто ценит стиль,
              силу и настоящую культуру улиц. MARSY не просто имя, это движение.
              Добро пожаловать в его мир.
            </p>
            <button className="bg-white text-black w-full py-2">
              ВХОД В АККАУНТ
            </button>
          </div>
          <div className="w-full hidden 2xl:block xl:block lg:block md:hidden sm:hidden">
            <img src={marsy} alt="" className="h-full object-cover right-5" />
          </div>
        </div>
        <div className="h-full bg-white order-1 2xl:order-2 2xl:w-1/2 xl:order-2 xl:w-1/2 md:order-2 md:w-full sm:order-1 sm:w-full">
          <img src={Marsy} alt="" className="h-full object-cover" />
          <div className="h-1/2 absolute top-0 flex flex-col justify-center ml-5 2xl:h-full xl:h-full lg:h-1/2 md:h-1/2 sm:h-1/2">
            <div className='flex flex-col gap-20'>
              <img src={Ma} alt="" className="w-1/2" />
              <img src={Rsy} alt="" className="w-3/4 ml-[20%] 2xl:ml-[30%] xl:ml-[30%] lg:ml-[30%] md:ml-[30%] sm:ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
