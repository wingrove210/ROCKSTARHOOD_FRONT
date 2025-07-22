import album from "../../assets/Drop/album.png";
import Marsy from "../../assets/Drop/Marsy.png";
import spotify from "../../assets/Drop/spotify.png";
import yandex from "../../assets/Drop/yandex.png";
import apple from "../../assets/Drop/appleMusic.png";
import { useRef, useState } from "react";

export default function FirstSection() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 70; // 1:10 в секундах

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = percent * duration;
    setCurrentTime(audioRef.current.currentTime);
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-[#141414]">
      <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col">
        <img src={Marsy} alt="" className="w-full h-2/3 object-cover 2xl:w-2/5 2xl:h-screen xl:2/5 xl:h-screen lg:w-2/5 lg:h-screen md:w-full md:h-2/3 sm:w-full sm:h-2/3" />
        <div className="text-white mt-4 px-5 flex flex-col gap-10 2xl:mt-32 xl:mt-32 lg:mt-25 md:mt-4 sm:mt-4">
          <h1 className="font-bold text-4xl text-center 2xl:text-6xl 2xl:text-left xl:text-5xl xl:text-left lg:text-4xl lg:text-left md:text-4xl md:text-center sm:text-4xl sm:text-center">СВЕЖИЙ ДРОП</h1>
          <div className="border-2 border-white px-5 py-5">
            <h6 className="">
              Если бы чувства говорили — они звучали <br/>
              бы вот так
            </h6>
          </div>
          <div className="flex gap-3">
            <button className="w-10 h-10 bg-white rounded-full"></button>
            <button className="w-10 h-10 bg-white rounded-full"></button>
          </div>
          <div className="flex rounded-lg overflow-hidden w-full max-w-3xl">
            <div className="flex flex-col gap-2">
              {/* Картинка альбома */}
              <img src={album} alt="" className="w-56 h-56 object-cover" />
              <div className="flex w-full justify-between items-center">
                              {/* Prev button (заглушка) */}
              <button
                className="w-8 h-8 flex items-center justify-center text-white opacity-50"
                disabled
              >
                <svg width="24" height="24">
                  <polyline
                    points="16 4 8 12 16 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
              >
                {isPlaying ? (
                  <svg width="28" height="28" viewBox="0 0 28 28">
                    <rect
                      x="6"
                      y="6"
                      width="5"
                      height="16"
                      rx="2"
                      fill="#141414"
                    />
                    <rect
                      x="17"
                      y="6"
                      width="5"
                      height="16"
                      rx="2"
                      fill="#141414"
                    />
                  </svg>
                ) : (
                  <svg width="28" height="28" viewBox="0 0 28 28">
                    <polygon points="8,6 22,14 8,22" fill="#141414" />
                  </svg>
                )}
              </button>
              {/* Next button (заглушка) */}
              <button
                className="w-8 h-8 flex items-center justify-center text-white opacity-50"
                disabled
              >
                <svg width="24" height="24">
                  <polyline
                    points="8 4 16 12 8 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              </div>
            </div>
            {/* Правая часть: плеер и кнопки */}
            <div className="flex-1 flex flex-col justify-between p-6">
              {/* Кнопки платформ */}
              <div>
                <p className="text-white text-lg mb-4">Слушать на:</p>
                <div className="flex gap-4 mb-6 justify-between">
                  <a
                    href="https://open.spotify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-white px-6 py-3 rounded text-white hover:bg-white hover:text-black transition"
                  >
                    <img src={spotify} alt="Spotify" className="" />
                  </a>
                  <a
                    href="https://music.apple.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-white px-6 py-3 rounded text-white hover:bg-white hover:text-black transition"
                  >
                    <img src={apple} alt="Apple Music" className="" />
                  </a>
                  <a
                    href="https://music.yandex.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-white px-6 py-3 rounded text-white hover:bg-white hover:text-black transition"
                  >
                    <img src={yandex} alt="Яндекс Музыка" className="" />
                  </a>
                </div>
              </div>
              {/* Название трека */}
              <div className="mb-2">
                <p className="text-white text-2xl font-bold">
                  НИКОМУ ВЕРИТЬ НЕЛЬЗЯ
                </p>
                <p className="text-gray-400 text-lg">MARSY</p>
              </div>
              {/* Кастомный аудио-плеер */}
              <div>
                <audio
                  ref={audioRef}
                  src="/audio/nikomu-verit-nelzya.mp3"
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={() => setIsPlaying(false)}
                  className="hidden"
                />
                <div className="flex items-center gap-4">
                  {/* Прогресс-бар и тайминги */}
                  <div className="flex-1 flex items-center ml-4">
                    <span className="text-gray-400 text-sm w-10">
                      {formatTime(currentTime)}
                    </span>
                    <div
                      className="relative h-1 bg-gray-700 rounded w-full mx-2 cursor-pointer"
                      onClick={handleProgressClick}
                    >
                      <div
                        className="absolute top-0 left-0 h-1 bg-white rounded"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      />
                      <div
                        className="absolute top-1/2 -translate-y-1/2"
                        style={{
                          left: `calc(${
                            (currentTime / duration) * 100
                          }% - 6px)`,
                        }}
                      >
                        <div className="w-3 h-3 bg-white rounded-full shadow" />
                      </div>
                    </div>
                    <span className="text-gray-400 text-sm w-10 text-right">
                      {formatTime(duration)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
