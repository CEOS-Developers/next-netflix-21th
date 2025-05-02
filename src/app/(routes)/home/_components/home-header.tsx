import NetFlixLogoIcon from '@public/icons/home/netflix-logo.svg';

export default function HomeHeader() {
  return (
    <header className="absolute top-6 z-900 flex w-full items-center justify-between pr-[18px] pl-[19px]">
      <NetFlixLogoIcon />
      <span className="text-caption-01 text-grayscale-02-white">TV Shows</span>
      <span className="text-caption-01 text-grayscale-02-white">Movies</span>
      <span className="text-caption-01 text-grayscale-02-white">My List</span>
    </header>
  );
}
