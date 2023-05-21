import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { ChangeEvent, useEffect, useState } from "react";

interface SoundData {
  name: string;
  url: HTMLAudioElement;
  status: boolean;
  volume: number;
}
function RoomScene() {
  const rainAudio = new Audio("./assets/scenes/room/sounds/rain.mp3");
  const burnAudio = new Audio("./assets/scenes/room/sounds/burn.mp3");
  const pianoAudio = new Audio("./assets/scenes/room/sounds/piano1.mp3");
  const catAudio = new Audio("./assets/scenes/room/sounds/cat.mp3");
  const hbdAudio = new Audio("./assets/scenes/room/sounds/hbd.mp3");
  const speaker1 = new Audio("./assets/scenes/room/sounds/speaker1.mp3");
  const [soundDatas, setSoundDatas] = useState<SoundData[]>([
    {
      name: "rain",
      url: rainAudio,
      status: false,
      volume: 1,
    },
    {
      name: "burn",
      url: burnAudio,
      status: false,
      volume: 1,
    },
    {
      name: "piano",
      url: pianoAudio,
      status: false,
      volume: 1,
    },
    {
      name: "cat",
      url: catAudio,
      status: false,
      volume: 1,
    },
    {
      name: "hbd",
      url: hbdAudio,
      status: false,
      volume: 1,
    },
    {
      name: "speaker1",
      url: speaker1,
      status: false,
      volume: 1,
      
    }

  ]);
  useEffect(() => {
    soundDatas.forEach((soundData) => {
      soundData.url.volume = 0.5;
    });
  }, []);
  
  const changeStatusAudio = (soundName: string) => {
    setSoundDatas((prevSoundDatas) => {
      return prevSoundDatas.map((data) => {
        if (data.name === soundName) {
          const updatedData = { ...data };
          if (updatedData.status) {
            updatedData.status = false;
            updatedData.url.pause();
          } else {
            updatedData.status = true;
            updatedData.url.addEventListener("timeupdate", function () {
              var buffer = 0.44;
              if (this.currentTime > this.duration - buffer) {
                this.currentTime = 0;
                this.play();
              }
            });
            updatedData.url.play();
          }
          return updatedData;
        }
        return data;
      });
    });
  };
  const handleChangeVolume = (
    soundName: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSoundDatas((prevSoundDatas) => {
      return prevSoundDatas.map((data) => {
        if (data.name === soundName) {
          const updatedData = { ...data, volume: Number(event.target.value) };
          updatedData.url.volume = updatedData.volume / 100;
          if(!updatedData.status){
            updatedData.url.play();
            updatedData.status = true;
          }
          return updatedData;
        }
        return data;
      });
    });
  };
  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 ">
        <video
          autoPlay
          loop
          muted
          className="z-10 w-full max-w-full h-full max-h-full object-cover"
        >
          <source src="./assets/scenes/room/scene.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative h-screen z-30">
        <div className="absolute left-[40%] top-[35%]">
          <div className="group  flex justify-center translate-x-[-50%] transition-all duration-300 ease-out">
            {/* <div className="m-5"> */}
            <CircleOutlinedIcon
              className=""
              sx={{ cursor: "pointer", color: "white" }}
              fontSize="large"
            />
            <RadioButtonCheckedIcon
              className="absolute transition-all scale-0 invisible group-hover:visible group-hover:scale-100 group-hover:w-[10rem]"
              sx={{ cursor: "pointer", color: "white" }}
              fontSize="large"
              onClick={() => changeStatusAudio("rain")}
            />
            {/* </div> */}
            <span className="absolute opacity-90 w-[10rem] top-10 scale-0 transition-all rounded-md bg-gray-800 p-2 text-xs text-white group-hover:scale-100 flex flex-col items-center justify-center">
              <span className="text-lg">Rain</span>
              <input
                className="accent-orange-500 cursor-pointer "
                type="range"
                name="volume"
                min="0"
                max="100"
                step="0.01"
                value={soundDatas[0].url.volume * 100}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeVolume("rain", e)
                }
              />
            </span>
          </div>
        </div>
        <div className="absolute left-[91%] top-[60%]">
          <div className="group  flex justify-center translate-x-[-50%] transition-all duration-300 ease-out">
            {/* <div className="m-5"> */}
            <CircleOutlinedIcon
              className=""
              sx={{ cursor: "pointer", color: "white" }}
              fontSize="large"
            />
            <RadioButtonCheckedIcon
              className="absolute transition-all scale-0 invisible group-hover:visible group-hover:scale-100 group-hover:w-[10rem]"
              sx={{ cursor: "pointer", color: "white" }}
              fontSize="large"
              onClick={() => changeStatusAudio("burn")}

            />
            {/* </div> */}
            <span className="absolute opacity-90 w-[10rem] top-10 scale-0 transition-all rounded-md bg-gray-800 p-2 text-xs text-white group-hover:scale-100 flex flex-col items-center justify-center">
              <span className="text-lg">Burn</span>
              <input
                className="accent-orange-500 cursor-pointer "
                type="range"
                name="volume"
                min="0"
                max="100"
                step="0.01"
                value={soundDatas[1].url.volume * 100}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeVolume("burn", e)
                }
              />
            </span>
          </div>
        </div>
        <div className="absolute left-[70%] top-[83%]">
          <div className="group  flex justify-center translate-x-[-50%] transition-all duration-300 ease-out">
            <CircleOutlinedIcon
              className=""
              sx={{ cursor: "pointer", color: "white" }}
              fontSize="large"
            />
            <RadioButtonCheckedIcon
              className="absolute transition-all scale-0 invisible group-hover:visible group-hover:scale-100 group-hover:w-[10rem]"
              sx={{ cursor: "pointer", color: "white" }}
              fontSize="large"
              onClick={() => changeStatusAudio("piano")}

            />
            <span className="absolute opacity-90 w-[10rem] top-10 scale-0 transition-all rounded-md bg-gray-800 p-2 text-xs text-white group-hover:scale-100 flex flex-col items-center justify-center">
              <span className="text-lg">Piano</span>
              <input
                className="accent-orange-500 cursor-pointer "
                type="range"
                name="volume"
                min="0"
                max="100"
                step="0.01"
                value={soundDatas[2].url.volume * 100}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeVolume("piano", e)
                }
              />
            </span>
          </div>
        </div>
        <div className="absolute left-[10%] top-[55%]">
          <div className="group  flex justify-center translate-x-[-50%] transition-all duration-300 ease-out">
            <CircleOutlinedIcon
              className=""
              sx={{ cursor: "pointer", color: "white" }}
              fontSize="large"
            />
            <RadioButtonCheckedIcon
              className="absolute transition-all scale-0 invisible group-hover:visible group-hover:scale-100 group-hover:w-[10rem]"
              sx={{ cursor: "pointer", color: "white" }}
              fontSize="large"
              onClick={() => changeStatusAudio("cat")}

            />
            <span className="absolute opacity-90 w-[10rem] top-10 scale-0 transition-all rounded-md bg-gray-800 p-2 text-xs text-white group-hover:scale-100 flex flex-col items-center justify-center">
              <span className="text-lg">Cat</span>
              <input
                className="accent-orange-500 cursor-pointer "
                type="range"
                name="volume"
                min="0"
                max="100"
                step="0.01"
                value={soundDatas[3].url.volume * 100}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeVolume("cat", e)
                }
              />
            </span>
          </div>
        </div>
        <div className="absolute left-[31%] top-[55%]">
          <div className="group  flex justify-center translate-x-[-50%] transition-all duration-300 ease-out">
            <CircleOutlinedIcon
              className=""
              sx={{ cursor: "pointer", color: "white" }}
              fontSize="large"
            />
            <RadioButtonCheckedIcon
              className="absolute transition-all scale-0 invisible group-hover:visible group-hover:scale-100 group-hover:w-[10rem]"
              sx={{ cursor: "pointer", color: "white" }}
              fontSize="large"
              onClick={() => changeStatusAudio("speaker1")}

            />
            <span className="absolute opacity-90 w-[10rem] top-10 scale-0 transition-all rounded-md bg-gray-800 p-2 text-xs text-white group-hover:scale-100 flex flex-col items-center justify-center">
              <span className="text-lg">Speaker</span>
              <input
                className="accent-orange-500 cursor-pointer "
                type="range"
                name="volume"
                min="0"
                max="100"
                step="0.01"
                value={soundDatas[5].url.volume * 100}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeVolume("speaker1", e)
                }
              />
            </span>
          </div>
        </div>


      </div>
    </>
  );
}

export default RoomScene;
