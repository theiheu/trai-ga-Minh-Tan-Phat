import CountUp from "react-countup";

const Statistic = () => {
  return (
    <section className="text-gray-600 bg-gray-100 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <img
                src="src/assets/statisticIcon/area.svg"
                className=" text-yellow-500 w-12 h-12 mb-3 inline-block"
                alt=""
              />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <CountUp end={27000} duration={2} enableScrollSpy />
              </h2>
              <p className="leading-relaxed">DIỆN TÍCH TRẠI/M2</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <img
                src="src/assets/statisticIcon/poultry.svg"
                className=" text-yellow-500 w-12 h-12 mb-3 inline-block"
                alt=""
              />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <CountUp end={500000} duration={2} enableScrollSpy />
              </h2>
              <p className="leading-relaxed">GÀ ĐẺ</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <img
                src="src/assets/statisticIcon/chicken.svg"
                className=" text-yellow-500 w-12 h-12 mb-3 inline-block"
                alt=""
              />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <CountUp end={150000} duration={2} enableScrollSpy />
              </h2>
              <p className="leading-relaxed">GÀ HẬU BỊ</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <img
                src="src/assets/statisticIcon/eggs.svg"
                className=" text-yellow-500 w-12 h-12 mb-3 inline-block"
                alt=""
              />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <CountUp end={450000} duration={2} enableScrollSpy />
              </h2>
              <p className="leading-relaxed">SẢN LƯỢNG TRỨNG/NGÀY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
