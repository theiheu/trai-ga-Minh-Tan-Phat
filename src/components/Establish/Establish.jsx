import { Button, Typography } from "@material-tailwind/react";

const Establish = () => {
  return (
    <section className="min-h-[500px] text-center flex flex-col items-center justify-center mt-10 before:block before:absolute before:inset-0 before:top-0 before:left-0 before:bg-establish before:bg-no-repeat before:bg-cover before:bg-fixed before:-z-10 bg-blackOpacity relative">
      <div className="h-full w-full text-white text-center flex flex-col items-center justify-center">
        <div>
          <Typography variant="h3" color="white" className="italic">
            Thành lập từ năm 2012
          </Typography>
          <Typography variant="h2" color="white" className="mt-3 font-bold">
            PHÁT TRIỂN BỀN VỮNG - THÀNH CÔNG VƯỢT TRỘI.
          </Typography>
        </div>
        <Button className="bg-amber-800 mt-3">Xem thêm</Button>
      </div>
    </section>
  );
};

export default Establish;
