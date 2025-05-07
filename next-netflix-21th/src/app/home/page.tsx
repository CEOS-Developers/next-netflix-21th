import HeroSlider from "@/components/home/HeroSlider";
import Header from "@/components/layout/Header";
import GenrePreview from "@/components/home/GenrePreview";
import NetflixOriginal from "@/components/home/NetflixOriginal";
import Preview from "@/components/home/Preview";

const Home = () => {
  return (
    <div className="relative w-full pb-16">
      <Header />
      <HeroSlider />
      {/* <Preview /> */}
      <GenrePreview />
      <NetflixOriginal />
    </div>
  );
};
export default Home;
