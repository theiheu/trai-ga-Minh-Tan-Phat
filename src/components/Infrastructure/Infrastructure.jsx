import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const dataInfrastructure = [
  {
    title: "Xưởng phân",
    description:
      "Đây là nơi quan trọng giúp chúng tôi quản lý và tận dụng tối đa phân bón từ đàn gà, đồng thời đóng góp vào chu kỳ sinh thái bền vững.",
    image: "public/img/phanbon/bb6475fe0845a01bf954.jpg",
    link: "/manure-factory",
  },
  {
    title: "Khu 1",
    description:
      "Khu chăn nuôi gà đẻ trứng chính là trái tim của hoạt động chăn nuôi của chúng tôi. Ở đây, chúng tôi tập trung vào chăm sóc và thu hoạch trứng sạch.",
    image: "public/img/khu4/01f8ba0ad6447d1a245517.jpg",
    link: "/area/area1",
  },
  {
    title: "Khu 2",
    description:
      "Khu 2 là nơi mở rộng của khu 1. Điều này giúp chúng tôi đáp ứng nhu cầu ngày càng tăng của thị trường và đảm bảo chất lượng sản phẩm.",
    image: "public/img/khu2/a4949b8b28d78389dac61.jpg",
    link: "/area/area2",
  },
  {
    title: "Khu 3",
    description:
      "Nuôi nhốt, dinh dưỡng cân đối và chăm sóc tận tình để đảm bảo gà phát triển khỏe mạnh và sẵn sàng cho chuỗi sản xuất chính.",
    image: "public/img/khu4/01f8ba0ad6447d1a245517.jpg",
    link: "/area/area3",
  },
  {
    title: "Khu 4",
    description:
      "Chúng tôi đang tập trung vào phát triển mô hình chăm sóc mới, áp dụng những kinh nghiệm học được từ các khu trước đó để tối ưu hóa quy trình và nâng cao hiệu suất.",
    image: "public/img/khu4/01f8ba0ad6447d1a245517.jpg",
    link: "/area/area4",
  },
  {
    title: "Khu 5",
    description:
      "Khu 5 là động viên mới của chúng tôi trong việc mở rộng quy mô sản xuất. Đang trong thời gian phát triển và xây dựng.",
    image: "public/img/khu5/f001a097ccd967873ec821.jpg",
    link: "/area/area5",
  },
];

const Infrastructure = () => {
  return (
    <section className="container mx-auto min-h[500px] md:w-3/4 w-full relative md:-top-16 bg-white border-[1px] rounded-md z-500 p-2">
      <div className="flex flex-col items-center justify-center mt-10 before:block before:absolute before:inset-2 before:-top-10 before:bg-gray-500 before:left-1 before:w-2 before:h-40 before:-rotate-3 before:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] before:-z-[1] after:block after:absolute  after:-top-10 after:bg-gray-500 after:right-1 after:w-2 after:h-40 after:rotate-3 after:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] after:-z-[1] relative z-1">
        <Typography variant="h2">Trang trại</Typography>
        <Typography variant="paragraph" className="text-center w-3/4">
          Chào mừng bạn đến với trang trại chăn nuôi gà đẻ trứng của chúng tôi!
          Tại đây, chúng tôi tự hào giới thiệu về cơ sở vật chất hiện đại và
          chăm sóc đặc biệt mà chúng tôi cung cấp để đảm bảo sự thoải mái và an
          toàn cho đàn gà, đồng thời tối ưu hóa sản lượng trứng.
        </Typography>
      </div>
      <div className="grid md:grid-cols-2 mt-4 gap-1">
        {dataInfrastructure.map((item, index) => {
          return (
            <div
              className="flex mt-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-lg overflow-hidden"
              key={index}
            >
              <>
                <Card className="flex rounded-none w-1/2 h-full border-none shadow-none">
                  <CardBody className="p-0 px-2 flex-1">
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className="md:py-1"
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="paragraph" className="line-clamp-3">
                      {item.description}
                    </Typography>
                  </CardBody>
                  <CardFooter className="p-3">
                    <Button>
                      <Link to={item.link}>Xem thêm</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <figure className="relative h-52 w-1/2">
                  <img
                    className={`h-full w-full object-cover object-center polygon-left-point
                    }`}
                    src={item.image}
                    alt="nature image"
                  />
                </figure>
              </>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Infrastructure;
