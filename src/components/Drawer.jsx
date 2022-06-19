import React from "react";
import close from "../Assets/Close.svg";
export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        " fixed inset-0 z-10 transform overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out " +
        (isOpen
          ? " translate-x-0 opacity-100 transition-opacity duration-500  "
          : " translate-x-full opacity-0 transition-all delay-500  ")
      }
    >
      <section
        className={
          " delay-400 absolute right-0 h-full w-screen max-w-lg transform bg-white shadow-xl transition-all duration-500 ease-in-out  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative flex h-full w-screen max-w-lg flex-col space-y-6 overflow-y-scroll pb-10">
          <div className="flex w-full flex-row-reverse justify-between bg-[#CCFF33]">
            <header className="p-4 text-lg font-normal">Filter By</header>

            <button
              className="h-18 mt-2 mr-2 flex w-16 items-center justify-center rounded-3xl bg-[#CCFF33] "
              onClick={() => setIsOpen(false)}
            >
              <img src={close} className="" alt="close icon " />
            </button>
          </div>
          <div className="flex h-screen justify-center"> {children}</div>
        </article>
      </section>
      <section
        className=" h-full w-screen cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
