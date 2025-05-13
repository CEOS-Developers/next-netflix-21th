import GenrePreview from "@/components/home/GenrePreview";
import HeroSlider from "@/components/home/HeroSlider";
import KoreaMovie from "@/components/home/KoreaMovie";
import NetflixOriginal from "@/components/home/NetflixOriginal";
import Preview from "@/components/home/Preview";
import Header from "@/components/layout/Header";

const Home = () => {
  return (
    <main className="scrollbar-hide relative h-screen w-full overflow-auto pb-20">
      <Header />
      <HeroSlider />
      <div className="flex flex-col gap-[22px] pt-[101px]">
        <Preview />
        <GenrePreview />
        <NetflixOriginal />
        <KoreaMovie />
      </div>
    </main>
  );
};
export default Home;
