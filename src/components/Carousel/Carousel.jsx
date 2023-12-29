import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <section className="grid min-h-[140px] w-full place-items-center md:rounded-lg p-2 md:p-6 lg:overflow-visible z-1">
      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-2 md:bottom-12 left-2/4 z-50 flex -translate-x-2/4 gap-2">
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
