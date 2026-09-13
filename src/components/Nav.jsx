import { useState } from "react";
import Bookmark from "../assets/images/logo-bookmark.svg";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="container relative mx-auto p-6">
      {/* Flex Container For Nav Items */}
      <div className="my-6 flex items-center justify-between space-x-20">
        {/* Logo */}
        <div className="z-30">
          <img src={Bookmark} alt="Bookmark logo" id="logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
          <a href="#features" className="tracking-widest hover:text-softRed">
            Features
          </a>

          <a href="#download" className="tracking-widest hover:text-softRed">
            Download
          </a>

          <a href="#faq" className="tracking-widest hover:text-softRed">
            FAQ
          </a>

          <a
            href="#"
            className="rounded-lg border-2 border-softRed bg-softRed px-8 py-2 text-white shadow-md hover:bg-white hover:text-softRed"
          >
            Login
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          id="menu-btn"
          className={`hamburger z-30 block focus:outline-none md:hidden ${
            isMenuOpen ? "open" : ""
          }`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="menu"
        className={`${isMenuOpen ? "flex" : "hidden"} fixed inset-0 z-20 h-full min-h-screen w-full flex-col items-center self-end divide-y divide-gray-500 bg-veryDarkBlue px-6 pb-4 pt-24 text-white opacity-90`}
      >
        <div className="w-full py-3 text-center">
          <a href="#features" className="block hover:text-softRed">
            Features
          </a>
        </div>

        <div className="w-full py-3 text-center">
          <a href="#download" className="block hover:text-softRed">
            Download
          </a>
        </div>

        <div className="w-full py-3 text-center">
          <a href="#faq" className="block hover:text-softRed">
            FAQ
          </a>
        </div>

        <div className="w-full py-3 text-center">
          <a href="#" className="block hover:text-softRed">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
