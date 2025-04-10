import { Carousel } from "flowbite-react";
import { HeroCardComp } from "../Herocard/Herocard";

export function HeroComp() {
  return (
    <div className="h-[80vh] sm:h-[90vh] xl:h-screen">
      <Carousel>
        {/* Banner 1 with vertical overlay at slanted angle */}
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <img
            src="/banner1.jpg"
            alt="Banner 1"
            className="object-cover w-full h-full"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(-70deg, rgba(0,0,0,0.6) 50%, transparent 50%)", // Slanted gradient on the left side
            }}
          >
            {/* HeroCardComp positioned on the right side */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 mr-[100px]">
              <HeroCardComp />
            </div>
          </div>
        </div>

        {/* Banner 2 with vertical overlay at slanted angle */}
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <img
            src="/banner2.jpg"
            alt="Banner 2"
            className="object-cover w-full h-full"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(-70deg, rgba(0,0,0,0.6) 50%, transparent 50%)", // Slanted gradient on the left side
            }}
          >
            {/* HeroCardComp positioned on the right side */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 mr-[100px]">
              <HeroCardComp />
            </div>
          </div>
        </div>

        {/* Banner 4 with vertical overlay at slanted angle */}
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <img
            src="/banner4.jpg"
            alt="Banner 4"
            className="object-cover w-full h-full"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(-70deg, rgba(0,0,0,0.6) 50%, transparent 50%)", // Slanted gradient on the left side
            }}
          >
            {/* HeroCardComp positioned on the right side */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 mr-[100px]">
              <HeroCardComp />
            </div>
          </div>
        </div>

        {/* Banner 5 with vertical overlay at slanted angle */}
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <img
            src="/banner5.jpg"
            alt="Banner 5"
            className="object-cover w-full h-full"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(-70deg, rgba(0,0,0,0.6) 50%, transparent 50%)", // Slanted gradient on the left side
            }}
          >
            {/* HeroCardComp positioned on the right side */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 mr-[100px]">
              <HeroCardComp />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
