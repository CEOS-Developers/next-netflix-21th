import HeroSlider from "@/components/home/HeroSlider";
import Header from "@/components/layout/Header";
import GenrePreview from "@/components/home/GenrePreview";

const Home = () => {
  return (
    <div className="relative w-full pb-16">
      <Header />
      <HeroSlider />
      <GenrePreview/>
    </div>
  );
};
export default Home;
