import deonigi from '../../assets/Deonigi.png'
import ava from '../../assets/Ava.svg'
import burger from '../../assets/burger.svg'

export default function FourthSection() {
  return (
    <div className='h-auto 2xl:min-h-screen xl:min-h-screen lg:h-auto md:h-auto sm:h-auto'>
      <h1 className="w-full max-w-full break-words font-bold text-right text-white px-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
        В ОБЪЕКТИВЕ <br />РАЙОНА
      </h1>
      <div className='w-full bg-white flex justify-center items-center flex-col py-5 h-auto'>
         <div className='hidden w-full justify-center gap-5 2xl:flex xl:flex md:hidden sm:hidden'>
            <p>Marsy Hub</p>
            <p>Свежий дроп</p>
            <p>Fresh мерч-лист</p>
         </div>
         <div className='w-full flex justify-end px-5 2xl:hidden xl:hidden lg:hidden md:flex sm:flex-2/4'>
            <img src={burger} alt="" className=''/>
         </div>
         <img src={ava} alt="" className='w-1/2 h-1/2'/>
         <div className='flex items-center gap-2 w-auto'>
            <img src={deonigi} alt="" className='w-30'/>
            <p className='w-auto text-sm'>Задизайнено в студии Дениса Быкова <br></br> DEONIGI DESIGN</p>
         </div>
      </div>
    </div>
  )
}
