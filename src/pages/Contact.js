import * as React from "react";
import { Footer } from "../components/Footer";

function Contact() {
  return (
    <>
      <div className="flex justify-center items-center self-stretch px-4 py-20 bg-white max-md:px-5">
        <div className="mt-5 w-full max-w-[1120px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-1.5 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-medium tracking-tighter text-stone-950 max-md:max-w-full max-md:text-4xl">
                  Get in Touch
                </div>
                <form className="mt-10">
                  <label className="block text-base leading-6 text-stone-950 max-md:max-w-full">
                    Full Name
                  </label>
                  <div className="flex gap-5 justify-between mt-2 max-md:flex-wrap max-md:max-w-full">
                    <input
                      type="text"
                      placeholder="First name"
                      className="px-3 py-3.5 bg-white rounded-lg border border-solid border-zinc-300 max-md:pr-5"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="px-3 py-3.5 bg-white rounded-lg border border-solid border-zinc-300 max-md:pr-5"
                    />
                  </div>
                  <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap">
                    <div className="flex flex-col w-full max-md:w-full">
                      <label className="text-base leading-6 text-stone-950">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-3 py-3.5 mt-2 text-sm leading-5 bg-white rounded-lg border border-solid border-zinc-300 text-zinc-300 max-md:pr-5"
                      />
                    </div>
                    <div className="flex flex-col w-full max-md:w-full">
                      <label className="text-base leading-6 text-stone-950">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter 10 Digit Number"
                        className="px-3 py-3.5 mt-2 text-sm leading-5 bg-white rounded-lg border border-solid border-zinc-300 text-zinc-300 max-md:pr-5"
                      />
                    </div>
                  </div>
                  <label className="block mt-6 text-base leading-6 text-stone-950 max-md:max-w-full">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Write Subject"
                    className="px-3 py-3.5 mt-2 text-sm leading-5 bg-white rounded-lg border border-solid border-zinc-300 text-zinc-300 max-md:pr-5 max-md:max-w-full"
                  />
                  <label className="block mt-6 text-base leading-6 text-stone-950 max-md:max-w-full">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Write Here..."
                    className="px-3 pt-3.5 pb-5 mt-2 text-sm leading-5 bg-white rounded-lg border border-solid border-zinc-300 text-zinc-300 max-md:pr-5 max-md:max-w-full"
                  />
                  <button
                    type="submit"
                    className="flex gap-1.5 justify-center self-start px-4 py-2.5 mt-10 text-base font-semibold leading-6 bg-indigo-700 rounded-lg border border-indigo-700 border-solid shadow-sm text-zinc-50"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img alt="Ellipse2" src="assets/images/model.png" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
