import { Link } from "react-router-dom";
import buttonMobile from "../../public/assets/icon-hamburger.svg";

export default function Header() {
  return (
    <>
      <div className="flex justify-between md:justify-center md:flex-col items-center px-[24px] md:px-[51px] pb-[17px]">
        <h1 className="text-[#FFFFFF] font-[antonio] text-[28px] leading-9 font-[400] tracking-[-1px] ">
          THE PLANETS
        </h1>
        <div className="w-full flex justify-evenly items-center dr-row mt-[39px] hidden md:inline-flex">
          <Link
            to="/planets/mercury"
            className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px]"
          >
            mercury
          </Link>
          <Link
            to="/planets/venus"
            className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px]"
          >
            venus
          </Link>
          <Link
            to="/planets/earth"
            className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px]"
          >
            earth
          </Link>
          <Link
            to="/planets/mars"
            className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px]"
          >
            mars
          </Link>
          <Link
            to="/planets/jupiter"
            className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px]"
          >
            jupiter
          </Link>
          <Link
            to="/planets/saturn"
            className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px]"
          >
            saturn
          </Link>
          <Link
            to="/planets/uranus"
            className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px]"
          >
            uranus
          </Link>
          <Link
            to="/planets/neptune"
            className="text-[11px] text-white font-[spartan] font-bold tracking-[1px] uppercase leading-[25px]"
          >
            neptune
          </Link>
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
