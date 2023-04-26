import { Link } from "react-router-dom";
import buttonMobile from "../../public/assets/icon-hamburger.svg";
import { useState } from "react";
import arrow from "../../public/assets/icon-chevron.svg";

export default function Header() {
  const [active, setActive] = useState(false);

  function show() {
    setActive(!active);
  }

  return (
    <>
      <div
        className="flex justify-between md:justify-center md:flex-col items-center px-[24px] md:px-[51px] pb-[17px] md:pb-[22px] xl:pt-0
      xl:flex-row  xl:pr-[41px] xl:pb-[27px] xl:pl-[32px] xl:items-center  xl:justify-evenly md:pt-[32px]"
      >
        <h1 className="text-[#FFFFFF] font-[antonio, sans-serif] text-[28px] leading-9 font-[400] tracking-[-1px] w-full md:text-center xl:text-left xl:mt-[15px]">
          THE PLANETS
        </h1>
        <div className="w-full  justify-evenly items-center flex-row  hidden md:inline-flex md:mt-[39px]  xl:mt-0 ">
          <div className="flex flex-col border-t-4 hover:border-[#419EBB]   border-[#070724]">
            <Link
              to="/planets/mercury"
              className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px]  xl:mt-[22px]
            "
            >
              mercury
            </Link>
          </div>
          <div className="flex flex-col border-t-4 hover:border-[#419EBB]   border-[#070724]">
            <Link
              to="/planets/venus"
              className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px] xl:mt-[22px]
            "
            >
              venus
            </Link>
          </div>
          <div className="flex flex-col border-t-4 hover:border-[#6D2ED5]   border-[#070724]">
            <Link
              to="/planets/earth"
              className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px] xl:mt-[22px]"
            >
              earth
            </Link>
          </div>
          <div className="flex flex-col border-t-4 hover:border-[#D14C32]   border-[#070724]">
            <Link
              to="/planets/mars"
              className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px] xl:mt-[22px]"
            >
              mars
            </Link>
          </div>
          <div className="flex flex-col border-t-4 hover:border-[#D83A34]   border-[#070724]">
            <Link
              to="/planets/jupiter"
              className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px] xl:mt-[22px]"
            >
              jupiter
            </Link>
          </div>
          <div className="flex flex-col border-t-4 hover:border-[#CD5120]   border-[#070724]">
            <Link
              to="/planets/saturn"
              className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px] xl:mt-[22px]"
            >
              saturn
            </Link>
          </div>
          <div className="flex flex-col border-t-4 hover:border-[#1EC1A2]   border-[#070724]">
            <Link
              to="/planets/uranus"
              className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px] xl:mt-[22px]"
            >
              uranus
            </Link>
          </div>
          <div className="flex flex-col border-t-4 hover:border-[#2D68F0]   border-[#070724]">
            <Link
              to="/planets/neptune"
              className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px] xl:mt-[22px]"
            >
              neptune
            </Link>
          </div>
        </div>

        <img
          onClick={show}
          src={buttonMobile}
          className="button-for-list cursor-pointer md:hidden "
          alt="button"
        />
      </div>
      <div className="h-px opacity-20 mix-blend-normal  w-full bg-white"></div>
      {active ? (
        <div className="md:hidden  fixed z-10 w-full  min-h-screen bg-[#070724] 	">
          <div className="pt-[24px] px-[24px]  w-full ">
            <div className="flex items-center flex-row justify-between w-full mt-[20px]">
              <div className="flex items-center justify-center">
                <div className="bg-[#DEF4FC] w-[20px] h-[20px] rounded-full"></div>
                <Link
                  to="/planets/mercury"
                  onClick={show}
                  className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
                >
                  mercury
                </Link>
              </div>
              <Link to="/planets/mercury">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
            </div>
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-[23px]"></div>
            <div className="flex items-center flex-row justify-between w-full mt-[20px]">
              <div className="flex items-center justify-center">
                <div className="bg-[#F7CC7F] w-[20px] h-[20px] rounded-full"></div>
                <Link
                  to="/planets/venus"
                  onClick={show}
                  className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
                >
                  venus
                </Link>
              </div>
              <Link to="/planets/venus">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
            </div>
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-[23px]"></div>

            <div className="flex items-center flex-row justify-between w-full mt-[20px]">
              <div className="flex items-center justify-center">
                <div className="bg-[#545BFE] w-[20px] h-[20px] rounded-full"></div>
                <Link
                  to="/planets/earth"
                  onClick={show}
                  className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
                >
                  earth
                </Link>
              </div>
              <Link to="/planets/earth">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
            </div>
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-[23px]"></div>

            <div className="flex items-center flex-row justify-between w-full mt-[20px]">
              <div className="flex items-center justify-center">
                <div className="bg-[#FF6A45] w-[20px] h-[20px] rounded-full"></div>
                <Link
                  to="/planets/mars"
                  onClick={show}
                  className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
                >
                  mars
                </Link>
              </div>
              <Link to="/planets/mars">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
            </div>
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-[23px]"></div>

            <div className="flex items-center flex-row justify-between w-full mt-[20px]">
              <div className="flex items-center justify-center">
                <div className="bg-[#ECAD7A] w-[20px] h-[20px] rounded-full"></div>
                <Link
                  to="/planets/jupiter"
                  onClick={show}
                  className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
                >
                  jupiter
                </Link>
              </div>
              <Link to="/planets/jupiter">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
            </div>
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-[23px]"></div>

            <div className="flex items-center flex-row justify-between w-full mt-[20px]">
              <div className="flex items-center justify-center">
                <div className="bg-[#FCCB6B] w-[20px] h-[20px] rounded-full"></div>
                <Link
                  to="/planets/saturn"
                  onClick={show}
                  className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
                >
                  saturn
                </Link>
              </div>
              <Link to="/planets/saturn">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
            </div>
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-[23px]"></div>

            <div className="flex items-center flex-row justify-between w-full mt-[20px]">
              <div className="flex items-center justify-center">
                <div className="bg-[#FCCB6B] w-[20px] h-[20px] rounded-full"></div>
                <Link
                  to="/planets/uranus"
                  onClick={show}
                  className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
                >
                  uranus
                </Link>
              </div>
              <Link to="/planets/uranus">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
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
                  onClick={show}
                  className="text-white font-[spartan] ml-[25px] font-bold tracking-[1.3px] uppercase text-[15px] leading-[25px]"
                >
                  neptune
                </Link>
              </div>
              <Link to="/planets/neptune">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
            </div>
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-[23px]"></div>
          </div>
        </div>
      ) : null}
    </>
  );
}
