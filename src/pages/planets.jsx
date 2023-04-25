import { useState } from "react";
import { useParams } from "react-router-dom";

import planets from "../data/data.json";

export default function Main() {
  const [active, setActive] = useState("overview");
  const { name } = useParams();
  const planet = planets.find((p) => p.name.toLowerCase() === name);

  function forOverview() {
    const name = "overview";
    setActive(name);
  }
  function forStructure() {
    const name = "structure";
    setActive(name);
  }
  function forSurface() {
    const name = "surface";
    setActive(name);
  }

  return (
    <>
      <div className="px-[24px] py-[20px] w-full flex flex-row justify-evenly items-center md:hidden  ">
        <p
          onClick={forOverview}
          className="text-white font-[spartan] text-[9px] leading-[10px] uppercase tracking-[1.92px] font-bold"
        >
          overview
        </p>
        <p
          onClick={forStructure}
          className="text-white font-[spartan] text-[9px] leading-[10px] uppercase tracking-[1.92px] font-bold"
        >
          structure
        </p>
        <p
          onClick={forSurface}
          className="text-white font-[spartan] text-[9px] leading-[10px] uppercase tracking-[1.92px] font-bold"
        >
          surface
        </p>
      </div>
      <div className="h-[1px] bg-white opacity-20 w-full md:hidden "></div>

      <div className="flex flex-col justify-center items-center px-[24px] ">
        <img
          className="mt-[95px] md:mt-[146px] w-[40%] md:w-[15%]"
          src={
            active === "overview"
              ? planet.images.planet
              : active === "structure"
              ? planet.images.internal
              : active === "surface"
              ? planet.images.planet && planet.images.geology
              : null
          }
        />
        <div className="flex flex-col mt-[98px] justify-center md:mt-[130px] w-full md:flex-row md:flex-col">
          <div className="w-full flex justify-center  md:flex-row md:justify-between">
            <div className="md:w-[50%]">
              <h1 className="text-[40px] font-[antonio] uppercase text-white text-center font-normal leading-[52px] md:text-[48px] md:leading-[62px] md:text-left">
                {planet.name}
              </h1>
              <p className="text-[#FFFFFF] font-[spartan] text-[11px] leading-[22px] font-normal text-center mt-[16px] md:text-left ">
                {active === "overview"
                  ? planet.overview.content
                  : active === "structure"
                  ? planet.structure.content
                  : active === "surface"
                  ? planet.geology.content
                  : null}
              </p>
              <div className="flex flex-row justify-center mt-[32px] w-full md:justify-start">
                <p className="ml-[4px] text-white text-[12px] leading-[25px] opacity-50">
                  Source:
                </p>
                <a
                  href={
                    active === "overview"
                      ? planet.overview.source
                      : active === "structure"
                      ? planet.structure.source
                      : active === "surface"
                      ? planet.geology.source
                      : null
                  }
                  className="ml-[4px] text-white text-[12px] leading-[25px] opacity-50 md:text-left  "
                >
                  Wikipedia
                </a>
                <img />
              </div>
            </div>
            <div className="flex flex-col hidden w-[280px] md:block  w-[50%] pl-[70px]">
              <div
                onClick={forOverview}
                className="flex flex-row px-[24px] pt-[9px] pb-[13px]  items-center  w-full border-[1px] border-solid mt-[8px] py-[8px]
              pl-[20px] pr-[161px]"
              >
                <p
                  className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-[16px] font-[spartan] mix-blend-normal 
                  md:text-[9px] mde:leading-[25px] tracking-[1.9px]"
                >
                  01
                </p>
                <p className="text-white font-[antonio] font-normal uppercase text-[20px] leading-[26px] pl-[17px] md:text-[9px] md:leading-[25px] tracking-[1.9px] ">
                  overview
                </p>
              </div>
              <div
                onClick={forStructure}
                className="flex flex-row px-[24px] pt-[9px] pb-[13px]  items-center  w-full border-[1px] border-solid mt-[8px] py-[8px]
              pl-[20px] pr-[87px]"
              >
                <p
                  className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-[16px] font-[spartan] mix-blend-normal 
                  md:text-[9px] mde:leading-[25px] tracking-[1.9px]"
                >
                  02
                </p>
                <p className="text-white font-[antonio] font-normal uppercase text-[20px] leading-[26px] pl-[17px] md:text-[9px] md:leading-[25px] tracking-[1.9px] ">
                  Internal Structure
                </p>
              </div>
              <div
                onClick={forSurface}
                className="flex flex-row px-[24px] pt-[9px] pb-[13px]  items-center  w-full border-[1px] border-solid mt-[8px] py-[8px]
              pl-[20px] pr-[105px]"
              >
                <p
                  className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-[16px] font-[spartan] mix-blend-normal 
                  md:text-[9px] mde:leading-[25px] tracking-[1.9px]"
                >
                  03
                </p>
                <p className="text-white font-[antonio] font-normal uppercase text-[20px] leading-[26px] pl-[17px] md:text-[9px] md:leading-[25px] tracking-[1.9px] ">
                  Surface Geology
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-[20px] md:flex-row md:justify-between">
            <div
              className="flex flex-row px-[24px] pt-[9px] pb-[13px] justify-between items-center  border-[1px] border-solid mt-[8px] 
            md:flex-col md:pt-[16px] md:pb-[19px] md:pl-[15px] md:justify-start md:pr-[0px] md:items-start  md:mt-[0px] md:w-[24%] "
            >
              <p className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-[16px] font-[spartan] mix-blend-normal md:text-left">
                Rotation time
              </p>
              <p
                className="text-white font-[antonio] font-normal uppercase  tracking-[-0.75px] text-[20px] leading-[26px]
               md:text-[24px] md:leading-[31px] md:tracking-[0.9px] "
              >
                58.6 days
              </p>
            </div>
            <div
              className="flex flex-row px-[24px] pt-[9px] pb-[13px] justify-between items-center  border-[1px] border-solid mt-[8px] 
            md:flex-col md:pt-[16px] md:pb-[19px] md:pl-[15px] md:justify-start md:pr-[0px] md:items-start  md:mt-[0px] ]  md:w-[24%]  "
            >
              <p className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-[16px] font-[spartan] mix-blend-normal md:text-left">
                REVOLUTION TIME
              </p>
              <p
                className="text-white font-[antonio] font-normal uppercase  tracking-[-0.75px] text-[20px] leading-[26px]
               md:text-[24px] md:leading-[31px] md:tracking-[0.9px] "
              >
                87.97 days
              </p>
            </div>
            <div
              className="flex flex-row px-[24px] pt-[9px] pb-[13px] justify-between items-center  border-[1px] border-solid mt-[8px] 
            md:flex-col md:pt-[16px] md:pb-[19px] md:pl-[15px] md:justify-start md:pr-[0px] md:items-start ] md:mt-[0px] ] md:w-[24%]  "
            >
              <p className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-[16px] font-[spartan] mix-blend-normal md:text-left">
                radius
              </p>
              <p
                className="text-white font-[antonio] font-normal uppercase  tracking-[-0.75px] text-[20px] leading-[26px]
               md:text-[24px] md:leading-[31px] md:tracking-[0.9px] "
              >
                2,439.7 km
              </p>
            </div>
            <div
              className="flex flex-row px-[24px] pt-[9px] pb-[13px] justify-between items-center  border-[1px] border-solid mt-[8px] 
            md:flex-col md:pt-[16px] md:pb-[19px] md:pl-[15px] md:justify-start md:pr-[0px] md:items-start  md:mt-[0px] ] md:w-[24%] "
            >
              <p className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-[16px] font-[spartan] mix-blend-normal md:text-left">
                AVERAGE TEMP.
              </p>
              <p
                className="text-white font-[antonio] font-normal uppercase  tracking-[-0.75px] text-[20px] leading-[26px]
               md:text-[24px] md:leading-[31px] md:tracking-[0.9px] "
              >
                430°c
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
