const Blogs = () => {
  return (
    <section className="container mx-auto text-gray-600 body-font overflow-hidden mt-24 p-2">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            TIN TỨC - SỰ KIỆN
          </h1>
          <div className="h-1 w-20 bg-yellow-500 rounded" />
        </div>
      </div>
      <div className="">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col pr-5">
              <img
                src="src/assets/mh_giacam_binhduong3.jpg"
                alt=""
                className="rounded-md "
              />
              <div className="flex my-2">
                <img
                  src="/img/vukehoach.png"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col ml-2">
                  <span className="font-semibold title-font text-gray-700">
                    Vụ kế hoạch
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    10/10/2018 | 2:18:00 PM
                  </span>
                </div>
              </div>
            </div>

            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Mô hình Trại gia cầm ứng dụng công nghệ cao tại tỉnh Bình Dương
              </h2>
              <p className="leading-relaxed">
                Trại gia cầm Trại gia cầm của ông Lê Văn Dương (trại gia cầm
                Minh Tân Phát) có tổng diện tích 3 ha được đầu tư xây dựng tại
                xã Minh Tân, huyện Dầu Tiếng, tỉnh Bình Dương với tổng đàn
                240.000 con gà đẻ, cung ứng ra thị trường gần 220.000 quả trứng
                mỗi ngày.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://vukehoach.mard.gov.vn/Webcontent/MoHinh.aspx?ID=32"
                className="text-yellow-500 inline-flex items-center mt-4"
              >
                Đọc thêm
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col pr-5">
              <img src="/img/t7vevanduong.jpg" alt="" className="rounded-md " />
              <div className="flex my-2">
                <img
                  src="/img/baobinhduong.png"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col ml-2">
                  <span className="font-semibold title-font text-gray-700">
                    Báo bình dương
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    07/10/2015 | 08:29:47 AM
                  </span>
                </div>
              </div>
            </div>

            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Lê Văn Dương: Kỹ sư xây dựng làm… nông nghiệp công nghệ cao
              </h2>
              <p className="leading-relaxed">
                Thành công trên đất mới Bình Dương với nghề cơ khí, xây dựng nhà
                xưởng, đột nhiên, anh Lê Văn Dương (phường Lái Thiêu, TX.Thuận
                An) lại rẽ bước kinh doanh sang một ngành nghề mới lạ, quyết chí
                làm nông nghiệp công nghệ cao tại xã Minh Tân, huyện Dầu Tiếng.
                Quyết định có phần mạo hiểm ấy đã mang lại thành công…
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://baobinhduong.vn/le-van-duong-ky-su-xay-dung-lam-nong-nghiep-cong-nghe-cao-a128477.html"
                className="text-yellow-500 inline-flex items-center mt-4"
              >
                Đọc thêm
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
