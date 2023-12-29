import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 400 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="transition-all container mx-auto sticky top-0 z-30 rounded-b-md bg-white ">
      <header className={``}>
        <div
          className={`${
            header ? "hidden" : "w-full bg-gray-600"
          } p-3 flex justify-between items-center`}
        >
          <div className="text-amber-700 flex justify-between">
            <ul className="flex gap-2">
              <li>
                <a href="mailto:tenmien@cuaban.com" className="flex gap-2">
                  <Mail />
                  ttgminhtanphat@gmail.com
                </a>
              </li>
              <li className="border-l-2 border-gray-500 pl-2">
                <a href="tel:0942166086" className="flex gap-2">
                  <Phone />
                  096 407 78 79
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 text-white">
            <a
              className="rounded-full border-2 p-2"
              href="https://www.facebook.com/profile.php?id=61554767048879&ref=embed_page"
              target="noreferre"
            >
              <Facebook size={16} />
            </a>{" "}
            <a className="rounded-full border-2 p-2" href="#">
              <Youtube size={16} />
            </a>{" "}
            <a className="rounded-full border-2 p-2" href="#">
              <Instagram size={16} />
            </a>{" "}
          </div>
        </div>
        <nav className="flex px-4 border-b md:shadow-lg items-center relative rounded-md">
          <div className="text-lg font-bold md:py-0 py-4">
            <div className="w-[180px] h-[50px] bg-logo bg-no-repeat bg-contain bg-center" />
          </div>
          <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
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
                href="about"
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
                href="#"
                className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
              >
                <span>Tin tức</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
              >
                <span>Liên hệ</span>
              </a>
            </li>
          </ul>
          <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
