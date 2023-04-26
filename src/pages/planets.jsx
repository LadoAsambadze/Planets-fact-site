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
      <div className="px-[24px] pt-[20px] w-full flex flex-row justify-evenly items-center md:hidden    ">
        <div
          className="border-[#070724] border-b-4   cursor-pointer"
          style={{
            borderColor: active === "overview" ? planet.color : null,
          }}
        >
          <p
            onClick={forOverview}
            className="text-white font-[spartan] text-[9px] leading-[10px] uppercase tracking-[1.92px] font-bold pb-[17px] "
          >
            overview
          </p>
        </div>
        <div className="border-[#070724] border-b-4   cursor-pointer"
         style={{
          borderColor: active === "structure" ? planet.color : null,
        }}>
          <p
            onClick={forStructure}
            className="text-white font-[spartan] text-[9px] leading-[10px] uppercase tracking-[1.92px] font-bold pb-[17px]"
          >
            structure
          </p>
        </div>
        <div className="border-[#070724] border-b-4  h cursor-pointer"
         style={{
          borderColor: active === "surface" ? planet.color : null,
        }}>
          <p
            onClick={forSurface}
            className="text-white font-[spartan] text-[9px] leading-[10px] uppercase tracking-[1.92px] font-bold pb-[17px] "
          >
            surface
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-white opacity-20 w-full md:hidden "></div>

      <div className="flex flex-col justify-center items-center px-[24px] xl:px-[165px] xl:pt-[126px] xl:pb-[56px] xl:flex-row xl:justify-start xl:items-start ">
        <div className="h-[304px] xl:hidden md:h-[460px] flex justify-center items-center ">
          <img
            className=" max-w-[80%] max-h-[80%] xl:hidden  "
            src={
              active === "overview"
                ? planet.images.planet
                : active === "structure"
                ? planet.images.internal
                : active === "surface"
                ? planet.images.geology
                : null
            }
          />
        </div>
        <div className="flex flex-col  justify-center  w-full md:flex-row md:flex-col xl:mt-0  ">
          <div className="w-full flex justify-center  md:flex-row md:justify-between xl:flex-row ">
            <div className="w-[100%] h-[400px] hidden xl:flex xl:justify-center xl:items-center">
              <img
                className=" max-w-full max-h-full "
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
            </div>
            <div className="flex flex-row items-end xl:flex-col xl:w-[80%]">
              <div className="md:w-[50%] xl:w-[75%] ">
                <h1
                  className="text-[40px] font-[antonio, sans-serif] uppercase text-white text-center font-normal leading-[52px] md:text-[48px] md:leading-[62px] md:text-left 
                xl:text-left xl:text-[80px] leading-[104px]"
                >
                  {planet.name}
                </h1>
                <p
                  className="text-[#FFFFFF] font-[spartan] text-[11px] leading-[22px] font-normal text-center mt-[16px] md:text-left
                 xl:text-left xl:mt-[23px] xl:text-[14px] xl:leading-[25px]"
                >
                  {active === "overview"
                    ? planet.overview.content
                    : active === "structure"
                    ? planet.structure.content
                    : active === "surface"
                    ? planet.geology.content
                    : null}
                </p>
                <div className="flex flex-row justify-center mt-[32px] w-full md:justify-start  xl:mt-[24px]">
                  <p className="ml-[4px] text-white text-[12px] leading-[25px] opacity-50 xl:text-[14px] xl:leading-[25px]">
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
                    className="ml-[4px] text-white text-[12px] leading-[25px] opacity-50 md:text-left  xl:text-[14px] xl:leading-[25px] "
                  >
                    Wikipedia
                  </a>
                  <img />
                </div>
              </div>
              <div className="flex flex-col hidden w-[280px] md:block md:w-[50%]  xl:w-[75%] pl-[70px] xl:pl-0">
                <div
                  onClick={forOverview}
                  className="flex flex-row px-[24px] pt-[9px] pb-[13px]  items-center  w-full border-[1px] border-solid mt-[8px] py-[8px]
              pl-[20px] pr-[161px]  cursor-pointer  hover:bg-[#D8D8D8] hover:bg-opacity-20 hover:mix-blend-normal "
                  style={{
                    backgroundColor:
                      active === "overview" ? planet.color : null,
                  }}
                >
                  <p
                    className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-[16px] font-[spartan] mix-blend-normal 
                  md:text-[9px] md:leading-[25px] tracking-[1.9px] xl:text-[12px] xl:leading-[25px] tracking-[2.5px]"
                  >
                    01
                  </p>
                  <p
                    className="text-white font-[antonio] font-normal uppercase text-[20px] leading-[26px] pl-[17px] md:text-[9px] md:leading-[25px] tracking-[1.9px]
                  xl:text-[12px] xl:leading-[25px] tracking-[2.5px] "
                  >
                    overview
                  </p>
                </div>
                <div
                  onClick={forStructure}
                  className="flex flex-row px-[24px] pt-[9px] pb-[13px]  items-center  w-full border-[1px] border-solid mt-[8px] py-[8px]
              pl-[20px] pr-[87px]  hover:bg-[#D8D8D8] hover:bg-opacity-20 hover:mix-blend-normal  cursor-pointer"
                  style={{
                    backgroundColor:
                      active === "structure" ? planet.color : null,
                  }}
                >
                  <p
                    className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-[16px] font-[spartan] mix-blend-normal 
                  md:text-[9px] mde:leading-[25px] tracking-[1.9px] xl:text-[12px] xl:leading-[25px] tracking-[2.5px]"
                  >
                    02
                  </p>
                  <p
                    className="text-white font-[antonio] font-normal uppercase text-[20px] leading-[26px] pl-[17px] md:text-[9px] md:leading-[25px] tracking-[1.9px]
                  xl:text-[12px] xl:leading-[25px] tracking-[2.5px] "
                  >
                    Internal Structure
                  </p>
                </div>
                <div
                  onClick={forSurface}
                  className="flex flex-row px-[24px] pt-[9px] pb-[13px]  items-center  w-full border-[1px] border-solid mt-[8px] py-[8px]
              pl-[20px] pr-[105px] hover:bg-[#D8D8D8] hover:bg-opacity-20 hover:mix-blend-normal  cursor-pointer "
                  style={{
                    backgroundColor: active === "surface" ? planet.color : null,
                  }}
                >
                  <p
                    className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-[16px] font-[spartan] mix-blend-normal 
                  md:text-[9px] mde:leading-[25px] tracking-[1.9px] xl:text-[12px] xl:leading-[25px] tracking-[2.5px]"
                  >
                    03
                  </p>
                  <p
                    className="text-white font-[antonio] font-normal uppercase text-[20px] leading-[26px] pl-[17px] md:text-[9px] md:leading-[25px] tracking-[1.9px] 
                  xl:text-[12px] xl:leading-[25px] tracking-[2.5px] "
                  >
                    Surface Geology
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-[20px] md:flex-row md:justify-between xl:mt-[87px]">
            <div
              className="flex flex-row px-[24px] pt-[9px] pb-[13px] justify-between items-center  border-[1px] border-solid mt-[8px] 
            md:flex-col md:pt-[16px] md:pb-[19px] md:pl-[15px] md:justify-start md:pr-[0px] md:items-start  md:mt-[0px] md:w-[24%]
            xl:pt-[20px] xl:pb-[27px] xl:pl-[23px] "
            >
              <p
                className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-[16px] font-[spartan] mix-blend-normal md:text-left
              xl:text-[11px] xl:leading-[25px] xl:tracking-[1px]"
              >
                Rotation time
              </p>
              <p
                className="text-white font-[antonio] font-normal uppercase  tracking-[-0.75px] text-[20px] leading-[26px]
               md:text-[24px] md:leading-[31px] md:tracking-[0.9px]
               xl:text-[40px] xl:leading-[52px] xl:tracking-[-1.5px] "
              >
                58.6 days
              </p>
            </div>
            <div
              className="flex flex-row px-[24px] pt-[9px] pb-[13px] justify-between items-center  border-[1px] border-solid mt-[8px] 
            md:flex-col md:pt-[16px] md:pb-[19px] md:pl-[15px] md:justify-start md:pr-[0px] md:items-start  md:mt-[0px] ]  md:w-[24%]
            xl:pt-[20px] xl:pb-[27px] xl:pl-[23px]  "
            >
              <p
                className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-[16px] font-[spartan] mix-blend-normal md:text-left
              xl:text-[11px] xl:leading-[25px] xl:tracking-[1px]"
              >
                REVOLUTION TIME
              </p>
              <p
                className="text-white font-[antonio] font-normal uppercase  tracking-[-0.75px] text-[20px] leading-[26px]
               md:text-[24px] md:leading-[31px] md:tracking-[0.9px]
               xl:text-[40px] xl:leading-[52px] xl:tracking-[-1.5px]  "
              >
                87.97 days
              </p>
            </div>
            <div
              className="flex flex-row px-[24px] pt-[9px] pb-[13px] justify-between items-center  border-[1px] border-solid mt-[8px] 
            md:flex-col md:pt-[16px] md:pb-[19px] md:pl-[15px] md:justify-start md:pr-[0px] md:items-start ] md:mt-[0px] ] md:w-[24%]
            xl:pt-[20px] xl:pb-[27px] xl:pl-[23px]  "
            >
              <p
                className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-[16px] font-[spartan] mix-blend-normal md:text-left
                xl:text-[11px] xl:leading-[25px] xl:tracking-[1px]
              "
              >
                radius
              </p>
              <p
                className="text-white font-[antonio] font-normal uppercase  tracking-[-0.75px] text-[20px] leading-[26px]
               md:text-[24px] md:leading-[31px] md:tracking-[0.9px] 
               xl:text-[40px] xl:leading-[52px] xl:tracking-[-1.5px] "
              >
                2,439.7 km
              </p>
            </div>
            <div
              className="flex flex-row px-[24px] pt-[9px] pb-[13px] justify-between items-center  border-[1px] border-solid mt-[8px] 
            md:flex-col md:pt-[16px] md:pb-[19px] md:pl-[15px] md:justify-start md:pr-[0px] md:items-start  md:mt-[0px] ] md:w-[24%]
            xl:pt-[20px] xl:pb-[27px] xl:pl-[23px] "
            >
              <p
                className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-[16px] font-[spartan] mix-blend-normal md:text-left
              xl:text-[11px] xl:leading-[25px] xl:tracking-[1px]"
              >
                AVERAGE TEMP.
              </p>
              <p
                className="text-white font-[antonio] font-normal uppercase  tracking-[-0.75px] text-[20px] leading-[26px]
               md:text-[24px] md:leading-[31px] md:tracking-[0.9px]
               xl:text-[40px] xl:leading-[52px] xl:tracking-[-1.5px]  "
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
