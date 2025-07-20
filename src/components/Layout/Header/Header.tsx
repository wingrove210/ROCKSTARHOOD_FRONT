import burger from '../../../assets/burger.svg'
import star from '../../../assets/STAR.svg'
export default function Header() {
  return (
      <header className="py-2 px-2 flex justify-end items-center text-black z-2 absolute top-0 w-full 2xl:justify-between 2xl:px-10 xl:justify-between xl:px-10 lg:justify-between lg:px-10 md:justify-end md:px-2 sm:justify-end sm:px-2">
        <img src={star} alt="" className="h-15 hidden 2xl:block xl:block md:hidden sm:hidden" />
        <div className="hidden justify-between w-1/3 2xl:flex xl:flex lg:hidden md:hidden sm:hidden">
          <p>Marsy Hub</p>
          <p>Свежий дроп</p>
          <p>Эксклюзивный мерч</p>
        </div>
        <img src={burger} alt="" className='block 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden'/>
      </header>
  )
}
