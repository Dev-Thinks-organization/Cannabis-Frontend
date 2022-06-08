import React from "react";
import close from "../Assets/Close.svg";
export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="flex w-full justify-between bg-[#CCFF33]">
            <header className="p-4 font-bold text-lg">Filter By</header>

            <button
              className="bg-[#CCFF33] h-18 mt-2 mr-2 w-16 rounded-3xl flex items-center justify-center "
              onClick={() => setIsOpen(false)}
            >
              <img src={close} className="" alt="close icon " />
            </button>
          </div>
          <div className="h-screen flex justify-center"> {children}</div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
