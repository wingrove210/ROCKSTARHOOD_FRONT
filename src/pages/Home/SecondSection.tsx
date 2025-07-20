import devider from "../../assets/Devider.svg";
import sofa from "../../assets/sofa.png";
import sign from "../../assets/Sign.svg";

export default function SecondSection() {
  return (
    <div className="min-h-screen bg-black">
      <img src={devider} alt="" />
      <div className="px-4 py-8 flex flex-col lg:flex-row gap-10">
        {/* Левая часть: картинка с текстом */}
        <div className="relative w-full max-w-[700px] min-w-[300px] aspect-square flex-shrink-0 mx-auto lg:mx-0">
          <img src={sofa} alt="" className="w-full h-full object-cover" />
          {/* Текст и подпись поверх изображения */}
          <div className="absolute inset-0 pointer-events-none">
            {/* ОТ УЛИЦ */}
            <p className="text-white font-extrabold leading-none absolute left-4 top-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              ОТ УЛИЦ
            </p>
            {/* ДО СЦЕНЫ и подпись */}
            <div className="absolute left-4 bottom-4">
              <p className="text-white font-extrabold leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl z-10 relative">
                ДО СЦЕНЫ
              </p>
              <img
                src={sign}
                alt=""
                className="w-44 sm:w-56 md:w-60 lg:w-72 xl:w-80 mt-[-20px] z-0 relative"
                style={{ filter: "drop-shadow(0 2px 8px #000a)" }}
              />
            </div>
          </div>
        </div>
        {/* Правая часть: текст */}
        <div className="flex-1 flex items-center">
          <div className="text-white w-full max-w-2xl mx-auto lg:ml-10">
            <p className="font-bold italic mb-4 text-lg">
              "Никому верить нельзя, кроме MARSY"
            </p>
            <p className="mb-2">
              Он родом не из города — он из сигнала.
              <br />
              Из шумов, багов и глянца. Его биография — это микс из улиц, драм и неона,
              записанный не на бумаге, а на старом VHS, который уже не перемотать.
              MARSY — это чёрный русский, который говорит от лица тех, кого не слышали.
              Его треки — это как письма себе, но открытые всем. Его голос — смесь боли и
              стиля, грайма и любви, афробита и цифрового постпанка.
              <br />
              В 2021 он пережил клиническую смерть. Но музыка осталась в нём. С тех пор
              каждый трек — это пульс. Это предупреждение. Это надежда.
              <br />
              Он не пытается понравиться — он заставляет чувствовать. Его стиль —
              гангстерский, но с тенью евангельской трагедии. Его мерч — не вещи, а
              символы. Его образы — из детства, которого не было.
            </p>
            <p className="font-bold mt-4">
              “Я артист, который читает не строки, а команды” —{" "}
              <span className="italic">из интервью «ПРОШИТО MAG», 2024.</span>
              <br />
              И если ты это читаешь, ты уже на частоте.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
