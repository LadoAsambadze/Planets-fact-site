import { Link } from "react-router-dom";
import buttonMobile from "../../public/assets/icon-hamburger.svg";

export default function Header() {
  return (
    <>
      <div
        className="flex justify-between md:justify-center md:flex-col items-center px-[24px] md:px-[51px] pb-[17px] md:pb-[22px] xl:pt-0
      xl:flex-row  xl:pr-[41px] xl:pb-[27px] xl:pl-[32px] xl:items-center  xl:justify-evenly md:pt-[32px]"
      >
        <h1 className="text-[#FFFFFF] font-[antonio, sans-serif] text-[28px] leading-9 font-[400] tracking-[-1px] w-full md:text-center xl:text-left xl:mt-[15px]">
          THE PLANETS
        </h1>
        <div className="w-full flex justify-evenly items-center flex-row  hidden md:inline-flex md:mt-[39px]  xl:mt-0 ">
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
        <Link to="/menu">
          <img
            src={buttonMobile}
            className="button-for-list cursor-pointer md:hidden "
            alt="button"
          />
        </Link>
      </div>
      <div className="h-px opacity-20 mix-blend-normal w-full bg-white"></div>
    </>
  );
}
