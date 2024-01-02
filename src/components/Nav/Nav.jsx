import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
            <Link
              to="/"
              className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
              <span>Trang chủ</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
              <span>Giới thiệu</span>
            </Link>
          </li>
          <li className="relative parent">
            <Link
              to="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2"
            >
              <span>Dịch vụ</span>
            </Link>
          </li>
          <li className="relative parent">
            <Link
              to="/manure-factory"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2"
            >
              <span>Phân bón</span>
            </Link>
          </li>
          <li className="relative parent">
            <Link className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2">
              <span>Trang trại</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current pt-1"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </Link>
            <div className="before:h-5 before:content before:w-full before:absolute before:right-0 before:-bottom-4 before:left-0 before:block"></div>
            <ul className="child transition duration-300 md:absolute right-0 md:w-48 bg-white md:shadow-lg md:rounded md:mt-2">
              <li>
                <Link
                  to="/area/area1"
                  className="flex px-5 py-3 hover:bg-gray-50"
                >
                  Trang trại 1
                </Link>
              </li>
              <li>
                <Link
                  to="/area/area2"
                  className="flex px-5 py-3 hover:bg-gray-50"
                >
                  Trang trại 2
                </Link>
              </li>
              <li>
                <Link
                  to="/area/area3"
                  className="flex px-5 py-3 hover:bg-gray-50"
                >
                  Trang trại 3
                </Link>
              </li>
              <li>
                <Link
                  to="/area/area4"
                  className="flex px-5 py-3 hover:bg-gray-50"
                >
                  Trang trại 4
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/blogs"
              className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
              <span>Tin tức</span>
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
              <span>Sự kiện</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
              <span>Liên hệ</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
