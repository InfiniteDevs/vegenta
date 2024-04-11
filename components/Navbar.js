import React, { useState } from "react";
import { useSelector } from "react-redux";
import Search from '../components/sidebar/search'
import { Transition } from "@headlessui/react";
import  Toogle  from '../components/nav/Toggle'

function Navbar({visit}) {
	const [isOpen, setIsOpen] = useState(false);
	const theme = useSelector((state) => state.theme);
	return (
    <div>
      <nav className=" shadow-sm fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className=" font-bold text-xl cursor-pointer">
                  <span className="text-blue-500"></span>
                </h1>
              </div>
              <Search className="pl-65" />
              <div className="flex justify-left items-left flex-shrink-0 ">
                <h1
                  className={`${theme.text.selected} font-bold text-xl cursor-pointer`}
                >
                  Veg<span className="text-blue-500">enta</span>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/recentlyadded/1"
                    class={`${theme.text.selected} block py-2 pl-3 pr-4 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                  >
                    🗓️ Recently Added
                  </Link>
                  <Link
                    href="/myList"
                    class={`${theme.text.selected} block py-2 pl-3 pr-4 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                  >
                    ❤️ My List
                  </Link>
                  <Link
                    href="/popular/1"
                    class={`${theme.text.selected} block py-2 pl-3 pr-4 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                  >
                    ⭐ Popular
                  </Link>
                  <Link
                    class={`${theme.text.selected} block py-2 pl-3 pr-4 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                  >
                    Visits: {visit}
                  </Link>
                  <Toogle />
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className={`bg-${theme.button.background} px-2 pt-2 pb-3 space-y-1 sm:px-3`}
              >
                <Link
                  href="/recentlyadded/1"
                  class={`${theme.text.selected} block py-2 pl-3 pr-4 text-white-700 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  🗓️ Recently Added
                </Link>
                <Link
                  href="/myList"
                  class={`${theme.text.selected} block py-2 pl-3 pr-4 text-white-700 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  ❤️ My List
                </Link>
                <Link
                  href="/popular/1"
                  class={`${theme.text.selected} block py-2 pl-3 pr-4 text-white-700 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  ⭐ Popular
                </Link>
                <p
                  className={`${theme.text.selected} block py-2 pl-3 pr-4 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Visits: {visit}
                </p>
                <Toogle />
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;