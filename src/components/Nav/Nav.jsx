import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowNav(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav ref={navRef} className="bg-white transition-all z-2">
        <button
          className={`${showNav ? "group relative" : "md:hidden"}`}
          onClick={() => {
            setShowNav((prevShowNav) => !prevShowNav);
          }}
        >
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div className="bg-yellow-600 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]" />
              <div className="bg-yellow-600 h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10" />
              <div className="bg-yellow-600 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]" />
            </div>
          </div>
        </button>

        <ul
          className={`${
            showNav ? "block" : "hidden"
          } md:flex md:px-2 ml-auto md:space-x-2 absolute md:relative top-full left-0 right-0 bg-white mt-1 md:shadow-none shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`}
        >
          <li>
            <a
              href="/"
              className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
              <span>Trang chủ</span>
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
              <span>Giới thiệu</span>
            </a>
          </li>
          <li className="relative parent">
            <a
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2"
            >
              <span>Dịch vụ</span>
              {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 fill-current pt-1"
            viewBox="0 0 24 24"
          >
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
          </svg> */}
            </a>
            {/* <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b">
          <li>
            <a href="#" className="flex px-4 py-3 hover:bg-gray-50">
              Web development
            </a>
          </li>
          <li>
            <a href="#" className="flex px-4 py-3 hover:bg-gray-50">
              Web Design
            </a>
          </li>
          <li>
            <a href="#" className="flex px-4 py-3 hover:bg-gray-50">
              Machine Learning
            </a>
          </li>
        </ul> */}
          </li>
          <li>
            <a
              href="/blogs"
              className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
              <span>Tin tức</span>
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
              <span>Liên hệ</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
