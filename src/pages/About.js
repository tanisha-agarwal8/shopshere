import * as React from "react";
import { Footer } from "../components/Footer";

function About() {
  return (
    <>
    <div className="flex flex-col justify-center bg-white">
      <div className="flex justify-center items-center px-4 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col my-5 w-full max-w-[1120px] max-md:max-w-full">
          <div className="mt-1 text-5xl font-medium tracking-tighter text-center text-stone-950 max-md:max-w-full max-md:text-4xl">
            Transforming Dreams into Reality
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col flex-wrap grow justify-center content-center max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="assets/images/Frame 1.png"
                    className="w-full aspect-[2.04] max-md:max-w-full"
                  />
                  <div className="justify-between mt-8 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                      <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="assets/images/Frame 2.png"
                          className="grow shrink-0 w-48 max-w-full aspect-[0.77] max-md:mt-8"
                        />
                      </div>
                      <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="assets/images/Frame 3.png"
                          className="grow w-full aspect-[1.02] max-md:mt-8"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center self-stretch my-auto text-lg text-zinc-500 max-md:mt-10 max-md:max-w-full">
                  <div className="text-5xl font-medium tracking-tighter text-stone-950 max-md:max-w-full max-md:text-4xl">
                    Our mission and vision
                  </div>
                  <div className="mt-8 leading-7 max-md:max-w-full">
                    We have considered our solutions for all of a support every
                    stage of your growth. We are the fastest and easiest way to
                    launch company for clients software method for the new
                    startups.
                  </div>
                  <div className="mt-8 leading-7 max-md:max-w-full">
                    The digital revolution is here, and Ultran is at the center,
                    and try supporting entrepreneurs and businesses propelling
                    the growth of the global internet economy. Ultran is
                    building banking products and services to support the next
                    generation of entrepreneurs.
                  </div>
                  <div className="flex gap-1.5 justify-center self-start px-4 py-2.5 mt-8 text-base font-semibold leading-6 bg-indigo-700 rounded-lg border border-indigo-700 border-solid shadow-sm text-zinc-50">
                    <div>Learn More</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/52a1f189208c27382960eb274db7b3d536a13bebb8523fd7aa09e94913fdb09c?"
                      className="shrink-0 my-auto w-5 aspect-square fill-white fill-opacity-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;