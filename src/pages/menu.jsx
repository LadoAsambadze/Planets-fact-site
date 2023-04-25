import { Link } from "react-router-dom";

import arrow from "../../public/assets/icon-chevron.svg";

function Menu() {
  return (
    <>
      <div className="md:hidden ">
        <div className="pt-[24px] px-[24px]  w-full">
          <div className="flex items-center flex-row justify-between w-full mt-[20px]">
            <div className="flex items-center justify-center">
              <div className="bg-[#DEF4FC] w-[20px] h-[20px] rounded-full"></div>
              <Link
                to="/planets/mercury"
                className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
              >
                mercury
              </Link>
            </div>
            <img src={arrow} alt="arrow button" />
          </div>
          <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-[23px]"></div>
          <div className="flex items-center flex-row justify-between w-full mt-[20px]">
            <div className="flex items-center justify-center">
              <div className="bg-[#F7CC7F] w-[20px] h-[20px] rounded-full"></div>
              <Link
                to="/planets/venus"
                className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
              >
                venus
              </Link>
            </div>
            <img src={arrow} alt="arrow button" />
          </div>
          <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-[23px]"></div>

          <div className="flex items-center flex-row justify-between w-full mt-[20px]">
            <div className="flex items-center justify-center">
              <div className="bg-[#545BFE] w-[20px] h-[20px] rounded-full"></div>
              <Link
                to="/planets/earth"
                className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
              >
                earth
              </Link>
            </div>
            <img src={arrow} alt="arrow button" />
          </div>
          <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-[23px]"></div>

          <div className="flex items-center flex-row justify-between w-full mt-[20px]">
            <div className="flex items-center justify-center">
              <div className="bg-[#FF6A45] w-[20px] h-[20px] rounded-full"></div>
              <Link
                to="/planets/mars"
                className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
              >
                mars
              </Link>
            </div>
            <img src={arrow} alt="arrow button" />
          </div>
          <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-[23px]"></div>

          <div className="flex items-center flex-row justify-between w-full mt-[20px]">
            <div className="flex items-center justify-center">
              <div className="bg-[#ECAD7A] w-[20px] h-[20px] rounded-full"></div>
              <Link
                to="/planets/jupiter"
                className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
              >
                jupiter
              </Link>
            </div>
            <img src={arrow} alt="arrow button" />
          </div>
          <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-[23px]"></div>

          <div className="flex items-center flex-row justify-between w-full mt-[20px]">
            <div className="flex items-center justify-center">
              <div className="bg-[#FCCB6B] w-[20px] h-[20px] rounded-full"></div>
              <Link
                to="/planets/saturn"
                className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
              >
                saturn
              </Link>
            </div>
            <img src={arrow} alt="arrow button" />
          </div>
          <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-[23px]"></div>

          <div className="flex items-center flex-row justify-between w-full mt-[20px]">
            <div className="flex items-center justify-center">
              <div className="bg-[#FCCB6B] w-[20px] h-[20px] rounded-full"></div>
              <Link
                to="/planets/uranus"
                className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
              >
                uranus
              </Link>
            </div>
            <img src={arrow} alt="arrow button" />
          </div>
          <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-[23px]"></div>

          <div className="flex items-center flex-row justify-between w-full mt-[20px]">
            <div
              className="flex items-cent
            
            er justify-center"
            >
              <div className="bg-[#497EFA] w-[20px] h-[20px] rounded-full"></div>
              <Link
                to="/planets/neptune"
                className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
              >
                neptune
              </Link>
            </div>
            <img src={arrow} alt="arrow button" />
          </div>
          <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-[23px]"></div>
        </div>
      </div>
    </>
  );
}

export { Menu };
