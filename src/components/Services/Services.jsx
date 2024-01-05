const dataServices = [
  {
    subtitle: "PHÂN BÓN",
    title: "Cung cấp phân bón",
    srcImg: "/src/assets/img/712656736788.jpg",
    content:
      "Chúng tôi cam kết duy trì chất lượng cao trong quá trình xử lý phân bón, đảm bảo rằng sản phẩm cuối cùng là một nguồn dinh dưỡng an toàn và hiệu quả cho việc trồng trọt.",
  },
  {
    subtitle: "GÀ HẬU BỊ",
    title: "Cung cấp gà hậu bị",
    srcImg: "/src/assets/img/527279020508.jpg",
    content: `Gà hậu bị của chúng tôi được chọn lọc kỹ lưỡng từ những đàn gà
      ngoại nhập và được chăm sóc đặc biệt để đảm bảo sức khỏe và tính
      trạng tốt nhất.`,
  },
  {
    subtitle: "GÀ GIỐNG",
    title: "Cung cấp gà giống",
    srcImg: "/src/assets/img/142223600882.jpg",
    content: `Được xây dựng trên nền tảng của kinh nghiệm chăm sóc gà và sự
      chú ý đặc biệt đến sức khỏe của đàn gà, chúng tôi cam kết mang
      đến cho khách hàng những giải pháp nuôi gà giống hiệu quả và
      đáng tin cậy.`,
  },
  {
    subtitle: "TRỨNG SẠCH",
    title: "Cung cấp trứng sạch",
    srcImg: "/img/khu4/a08fffb790f93ba762e812.jpg",
    content: `Chúng tôi tự hào về việc cung cấp trứng sạch và chất lượng từ
      trang trại chăn nuôi gà của chúng tôi. Chăm sóc đặc biệt và tiêu
      chuẩn cao đảm bảo rằng những quả trứng là sản phẩm tốt nhất.`,
  },
];

const Services = () => {
  return (
    <section className="text-gray-600 body-font p-2">
      <div className="container pt-24 mx-auto">
        <div className="flex flex-wrap w-full mb-10 md:mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              SẢN PHẨM - DỊCH VỤ
            </h1>
            <div className="h-1 w-20 bg-yellow-500 rounded" />
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {dataServices.map((item, index) => {
            return (
              <div className="xl:w-1/4 md:w-1/2 p-4 min-h-[500px] " key={index}>
                <div className="bg-gray-100 p-4 rounded-md h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={item.srcImg}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">
                    {item.subtitle}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed text-base">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
