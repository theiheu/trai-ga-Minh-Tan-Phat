import { Globe, Mail, MapPinned, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <span className="font-bold text-xl">TRẠI GÀ MINH TÂN PHÁT</span>
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="public/looogo.png" alt="" />
          </a>
        </div>
        <div className=" lg:w-1/3 md:w-1/2 w-fulflex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <span className="font-bold text-xl">THÔNG TIN LIÊN HỆ</span>
          <ul className="mt-2 text-sm text-gray-500l px-4">
            <li className="flex items-center justify-start">
              <MapPinned size={36} />
              <span className="ml-2">
                Địa chỉ: Ấp Tân Đức, xã Minh Tân, huyện Dầu Tiếng, tỉnh Bình
                Dương
              </span>
            </li>
            <li className="flex items-center justify-start mt-2">
              <PhoneCall />
              <span className="ml-2">SDT: 096 407 78 79</span>
            </li>
            <li className="flex items-center justify-start mt-2">
              <Mail size={24} />
              <span className="ml-2">Email: ttgminhtanphat@gmail.com</span>
            </li>
            <li className="flex items-center justify-start mt-2">
              <Globe size={24} />
              <span className="ml-2">Website: taigaminhtanphat.com</span>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61554767048879&tabs=timeline&width=700&height=366&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
            width={800}
            height={266}
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder={0}
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
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
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
