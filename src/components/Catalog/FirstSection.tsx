import Marsy from '../../assets/Catalog/130532 1-Photoroom 1.svg'
import divider from '../../assets/Devider.svg'

export default function FirstSection() {
  return (
    <>
      <div className="bg-white flex justify-center items-center py-10 w-full relative mt-10 2xl:py-0 2xl:mt-15 xl:py-0 xl:mt-20 lg:py-0 lg:mt-10 md:py-0 md:mt-10 sm:mt-6 sm:py-10">
        <h1 className="text-black font-bold tracking-widest
          text-[60px] sm:text-[40px] md:text-[100px] lg:text-[180px] xl:text-[250px]
          leading-none select-none"
        >
          MARSY
        </h1>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full max-w-[500px] sm:max-w-[220px] md:max-w-[320px] lg:max-w-[400px] xl:max-w-[500px]">
          <img src={Marsy} alt="" className="w-full z-2" />
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
            text-white font-bold
            text-2xl sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl
            whitespace-nowrap"
          >
            MARSY MERSCH
          </p>
        </div>
      </div>
      <div className="mt-5 sm:mt-2">
        <img src={divider} alt="" className="w-full" />
      </div>
    </>
  )
}
