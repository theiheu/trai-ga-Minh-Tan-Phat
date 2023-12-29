import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const dataInfrastructure = [
  {
    title: "Khu 1",
    description:
      "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near.",
    image:
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8",
    link: "/",
  },
  {
    title: "Khu 2",
    description:
      "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near.",
    image:
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8",
    link: "/",
  },
  {
    title: "Khu 3",
    description:
      "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near.",
    image:
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8",
    link: "/",
  },
  {
    title: "Khu 4",
    description:
      "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near.",
    image:
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8",
    link: "/",
  },
];

const Infrastructure = () => {
  return (
    <section className="container mx-auto min-h[500px] md:w-3/4 w-full relative md:-top-16 bg-white border-[1px] rounded-md z-500 p-2">
      <div className="flex flex-col items-center justify-center mt-10 before:block before:absolute before:inset-2 before:-top-10 before:bg-gray-500 before:left-1 before:w-2 before:h-40 before:-rotate-3 before:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] before:-z-[1] after:block after:absolute  after:-top-10 after:bg-gray-500 after:right-1 after:w-2 after:h-40 after:rotate-3 after:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] after:-z-[1] relative z-1">
        <Typography variant="h2">Cơ sở vật chất</Typography>
        <Typography variant="paragraph" className="text-center">
          Hoạt động trong lĩnh vực: Xây dựng, lắp đặt, sửa chữa các công trình
          dân dụng, công trình công nghiệp, kỹ thuật hạ tầng.Trong suốt thời
          gian hoạt động, chúng tôi tự hào đã không ngừng cung cấp cho khách
          hàng những giải pháp xây dựng tối ưu nhờ vào thế mạnh.
        </Typography>
      </div>
      <div className="grid md:grid-cols-2 mt-4 gap-1">
        {dataInfrastructure.map((item, index) => {
          return (
            <div className="flex mt-2 border-2" key={index}>
              <>
                <Card className="flex rounded-none w-1/2 h-full border-none shadow-none">
                  <CardBody className="p-0 px-2">
                    <Typography
                      variant="h5"
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
                      <a href={item.link}></a>Xem thêm
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
