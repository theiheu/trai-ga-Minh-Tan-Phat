const About = () => {
  return (
    <div className="container mx-auto mt-12">
      <div>
        <header className="flex flex-wrap w-full mb-10 text-gray-700">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Trại Gà Minh Tân Phát - Nguồn Cung Ứng Trứng Sạch
            </h1>
            <div className="h-1 w-20 bg-yellow-500 rounded" />
          </div>
        </header>
        <section className="container mx-auto px-8 py-6 bg-white shadow-lg rounded-lg">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Chào mừng bạn đến với trại gà của chúng tôi!
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Trải qua nhiều năm hình thành và phát triển, trại gà của chúng tôi
              tự hào là địa chỉ uy tín chuyên cung cấp trứng sạch chất lượng
              cao, tuân thủ các tiêu chuẩn an toàn thực phẩm cao nhất. Chúng tôi
              không chỉ là những người nông dân đam mê nghề chăn nuôi mà còn là
              những người chú trọng đến sự chất lượng và an toàn của sản phẩm.
            </p>
            <h2 className="text-2xl font-semibold my-4">
              Chăm Sóc Gà với Định Hướng Chất Lượng
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tại trại gà của chúng tôi, chúng tôi đặt ra quy trình chăm sóc gà
              với định hướng chất lượng cao. Gia cầm của chúng tôi được nuôi
              dưỡng trong môi trường thoải mái và sạch sẽ, với chế độ dinh dưỡng
              cân đối và đảm bảo sức khỏe tốt nhất cho đàn gà. Chúng tôi sử dụng
              công nghệ hiện đại để giám sát sức khỏe của đàn gà hàng ngày, đảm
              bảo rằng chúng đang phát triển mạnh mẽ và đưa ra những quả trứng
              chất lượng cao.
            </p>
            <h2 className="text-2xl font-semibold my-4">
              Trứng Sạch với Tiêu Chuẩn An Toàn Thực Phẩm
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Sự an toàn của thực phẩm là ưu tiên hàng đầu của chúng tôi. Trứng
              sản xuất từ trại gà của chúng tôi đều tuân thủ các tiêu chuẩn an
              toàn thực phẩm nghiêm ngặt. Quy trình sản xuất và đóng gói được
              kiểm soát chặt chẽ, từ việc chọn lọc nguyên liệu đến quá trình
              đóng gói cuối cùng. Chúng tôi cam kết mang đến cho khách hàng
              những sản phẩm trứng sạch, đảm bảo an toàn cho sức khỏe và dinh
              dưỡng gia đình bạn.
            </p>
            <h2 className="text-2xl font-semibold my-4">
              Nguồn Cung Ứng Ổn Định và Đáng Tin Cậy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Khách hàng của chúng tôi không chỉ là người tiêu dùng mà còn là
              đối tác của chúng tôi trong hành trình cung cấp thực phẩm chất
              lượng. Chúng tôi cam kết cung cấp nguồn cung ổn định và đáng tin
              cậy, đảm bảo rằng mọi lô trứng bạn nhận được đều đạt đến chất
              lượng tối ưu. Điều này là kết quả của sự chăm sóc đặc biệt và sự
              tận tâm của đội ngũ nông dân và nhân viên chúng tôi.
            </p>
          </div>

          <h2 className="text-2xl font-semibold my-4">Liên hệ với chúng tôi</h2>
          <p className="text-gray-700">
            Để đặt hàng hoặc biết thêm chi tiết, vui lòng liên hệ với chúng tôi
            qua địa chỉ email:{" "}
            <a className="text-blue-500" href="mailto:ttgminhtanphat@gmail.com">
              ttgminhtanphat@gmail.com
            </a>{" "}
            hoặc số điện thoại:
            <strong className="text-blue-500"> 096 407 78 79</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
