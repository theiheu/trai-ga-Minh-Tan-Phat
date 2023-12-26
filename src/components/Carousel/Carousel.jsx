import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <section className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <Carousel className="rounded-xl" autoplay loop>
        <img
          src="src/assets/img/4790120988.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="src/assets/img/3738162470.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="src/assets/img/2876273062.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </section>
  );
}
