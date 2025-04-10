import { ContentComp } from "@/component/content/content";
import FeatureDestinationsGrid from "@/component/destination/featuredestination";
import { HeroComp } from "@/component/Hero/Hero";

export default function Home() {
  return (
    <>
      <HeroComp />
      <ContentComp />
      <FeatureDestinationsGrid />
    </>
  );
}
