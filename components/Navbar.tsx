/**
 * Navbar
 */

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Navbar() {
  return (
    <nav className="border-gray-200" id="navbar__custom" >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <p className="text-xl text-black font-bold">HI-TECH Barbershop</p>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto " id="navbar-default">
          <ul className="font-light flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="#navbar__custom"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:hover:text-white md:dark:hover:bg-transparent navbar__elements"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:hover:text-white md:dark:hover:bg-transparent navbar__elements"
              >
                About
              </Link>
            </li>
            {/* <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:hover:text-white md:dark:hover:bg-transparent navbar__elements"
              >
                Services
              </Link>
            </li> */}
            <li>
              <Link
                href="#reviews"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:hover:text-white md:dark:hover:bg-transparent navbar__elements"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="#gallery"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:hover:text-white md:dark:hover:bg-transparent navbar__elements"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 pl-3 pr-4 text-white-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-white-700 md:p-0 md:dark:hover:text-white-500 dark:hover:text-white md:dark:hover:bg-orange-500 bg-orange-400 rounded-full "
                id="navbar__contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
