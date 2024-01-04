import { Globe, Mail, MapPinned, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t-2 mt-24 flex flex-col">
      <div className="container mx-auto flex flex-col xl:flex-row md:items-center lg:items-start justify-between py-4">
        <div className="md:w-3/5 h-[280px] flex justify-between items-start p-4">
          <div className="w-1/2 md:mx-0 mx-auto text-center md:text-left">
            <span className="font-bold text-md md:text-xl">
              TRẠI GÀ MINH TÂN PHÁT
            </span>
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src="/looogo.png" alt="" />
            </a>
          </div>
          <div className="w-1/2 flex-grow flex flex-wrap md:pl-20 ml-3 -mb-10 md:text-left text-center">
            <span className="font-bold text-md md:text-xl">
              THÔNG TIN LIÊN HỆ
            </span>
            <ul className="mt-2 text-xs md:text-sm text-left text-gray-500">
              <li className="flex items-center justify-start">
                <i className="p-2">
                  <MapPinned size={24} />
                </i>

                <span className="ml-2">
                  Địa chỉ: Ấp Tân Đức, xã Minh Tân, huyện Dầu Tiếng, tỉnh Bình
                  Dương
                </span>
              </li>
              <li className="flex items-center justify-start mt-2">
                <i className="p-2">
                  <Phone size={24} />
                </i>
                <span className="ml-2">SDT: 096 407 78 79</span>
              </li>
              <li className="flex items-center justify-start mt-2">
                <i className="p-2">
                  <Mail size={24} />
                </i>
                <span className="ml-2">Email: ttgminhtanphat@gmail.com</span>
              </li>
              <li className="flex items-center justify-start mt-2">
                <i className="p-2">
                  <Globe size={24} />
                </i>
                <span className="ml-2">Website: traigaminhtanphat.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-2/5 md:px-4 md:ml-3">
          <iframe
            className="w-full h-[220px]"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61554767048879&tabs=timeline&width=700&height=366&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
            // style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder={0}
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>

      {/* bot footer */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 MINHTANPHAT -
            <a
              href="/"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @LTH
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              href="https://www.facebook.com/profile.php?id=61554767048879&ref=embed_page"
              target="noreferer"
              className="text-gray-500"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
