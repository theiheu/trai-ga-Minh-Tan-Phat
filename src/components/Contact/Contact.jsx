const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative mt-24">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10758.575559576422!2d106.4273172980677!3d11.413070753581648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1703577097007!5m2!1svi!2s"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h1 className="text-gray-900 text-2xl mb-1 font-semibold title-font">
            Phản hồi
          </h1>
          <p className="leading-relaxed mb-5 text-gray-600">
            Nếu có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi.
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            Gửi
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Chúng tôi sẽ phản hồi lại bạn trong vòng 24 giờ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
