import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font p-2">
      <div className="container mx-auto flex py-12 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 h-[200px] md:h-[300px]">
          <img
            className="object-cover object-center rounded h-full w-full"
            alt="hero"
            src="/img/e0988c87-739b-4917-ad63-3c7715a783c3.jpeg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Trại gà Minh Tân Phát
          </h1>
          <p className="mb-8 leading-relaxed">
            Kính Thưa Quý Khách! Trước hết thay mặt Trại Gà Minh Tân Phát, chúng
            tôi xin gửi đến Quý khách hàng lời chào trân trọng nhất và xin cảm
            ơn Quý khách hàng đã dành chút thời gian quý báu của mình để tìm
            hiểu về đơn vị và những sản phẩm của chúng tôi. Ra đời và hoạt động
            trong lĩnh vực trứng gia cầm trong suốt 21 năm qua chúng tôi luôn
            luôn đem...
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              <Link to="/about">Xem tất cả</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
