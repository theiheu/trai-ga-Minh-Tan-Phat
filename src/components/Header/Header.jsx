import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import MobileNav from "../MobileNav/MobileNav";

const Header = () => {
  const [size, setSize] = useState(16);

  useEffect(() => {
    // Add SEO optimization logic here
  }, []);

  return (
    <>
      <div className="w-full bg-gray-600 p-3 flex justify-between items-center">
        <div className="text-amber-700 flex items-center justify-between">
          <ul className="flex flex-col items-start md:flex-row gap-2 text-sm md:text-lg">
            <li>
              <a
                href="mailto:tenmien@cuaban.com"
                className="flex items-center justify-center gap-2"
              >
                <Mail size={size} />
                ttgminhtanphat@gmail.com
              </a>
            </li>
            <li className="md:border-l-2 md:pl-2 border-gray-500">
              <a
                href="tel:0942166086"
                className="flex items-center justify-center gap-2"
              >
                <Phone size={size} />
                096 407 78 79
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-2 text-white">
          <a
            className="rounded-full border-2 p-2"
            href="https://www.facebook.com/profile.php?id=61554767048879&ref=embed_page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={size} />
          </a>{" "}
          <a
            className="rounded-full border-2 p-2"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={size} />
          </a>{" "}
          <a
            className="rounded-full border-2 p-2"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={size} />
          </a>{" "}
        </div>
      </div>
      <header className="sticky top-0 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-md z-[500] bg-white">
        <div className="flex justify-between px-0 md:px-4 border-b md:shadow-lg items-center relative rounded-md">
          <a href="/" className="text-lg font-bold py-4 md:py-0">
            <div className="w-[180px] h-[50px] bg-logo bg-no-repeat bg-contain bg-center"></div>
          </a>
          <Nav />
        </div>
      </header>
    </>
  );
};

export default Header;
