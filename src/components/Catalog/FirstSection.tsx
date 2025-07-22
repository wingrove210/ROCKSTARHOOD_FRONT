import Marsy from '../../assets/Catalog/130532 1-Photoroom 1.svg'
import divider from '../../assets/Devider.svg'

export default function FirstSection() {
  return (
        <>
            <div className="bg-white h-60 mt-20 flex justify-center items-center w-full">
                <h1 className="text-black text-[250px] font-bold tracking-widest">MARSY</h1>
                <div className="absolute w-1/2 flex items-center justify-center">
                   <img src={Marsy} alt="" className="w-full z-2"/>
                   <p className="absolute z-10 text-5xl font-bold text-white">MARSY MERSCH</p>
                </div>
            </div>
            <div className="mt-5">
              <img src={divider} alt="" />
            </div>
    </>
  )
}
