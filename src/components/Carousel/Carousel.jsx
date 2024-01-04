import { Carousel } from "@material-tailwind/react";
import { ModalVideo, useToggle } from "@baskvava/react-video-modal";
import { PlayCircle } from "lucide-react";

export function CarouselDefault() {
  const { isOpen, toggle, close } = useToggle();
  return (
    <section className="grid  w-full place-items-center md:rounded-lg p-2 md:p-6 lg:overflow-visible z-1">
      <Carousel
        className="rounded-xl md:h-[70vh] h-[30vh]"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-2 md:bottom-12 left-2/4 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-amber-700" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        autoplay
        loop
      >
        <img
          src="/img/khu4/cbf9ad34dc7a77242e6b5.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="/img/khu5/33dc9a1cf7525c0c054326.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src="/img/khu4/1dce6100104ebb10e25f6.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="/img/phanbon/bb6475fe0845a01bf954.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
      </Carousel>
      {/*
      <div>
        <video width={"100%"} height={"100%"} className="relative">
          <source
            src="/img/khu4/41593751105600607679.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center ">
          <PlayCircle
            className="text-gray-300 font-sans cursor-pointer hover:text-gray-400 transition-all"
            size={80}
            strokeWidth={0.5}
            onClick={toggle}
          />
        </div>
      </div>
      <ModalVideo
        title="video"
        className="rounded-xl z-[100]"
        isOpen={isOpen}
        onClosed={close}
        url="/img/khu4/41593751105600607679.mp4"
      /> */}
    </section>
  );
}
