import { Carousel } from "flowbite-react";

export function HeroComp() {
  return (
    <div className="h-[80vh] sm:h-[90vh] xl:h-screen">
      <Carousel>
        <img src="/banner1.jpg" alt="Banner 1" className="object-cover w-full h-full" />
        <img src="/banner2.jpg" alt="Banner 2" className="object-cover w-full h-full" />
        <img src="/banner4.jpg" alt="Banner 4" className="object-cover w-full h-full" />
        <img src="/banner5.jpg" alt="Banner 5" className="object-cover w-full h-full" />
      </Carousel>
    </div>
  );
}
