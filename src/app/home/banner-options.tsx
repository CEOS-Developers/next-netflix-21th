import Info from "@/assets/info.svg";
import Plus from "@/assets/plus.svg";
import PlayButton from "@/components/play-button";

const BannerOptions = () => {
  return (
    <div className="flex p-3 gap-[42px] justify-center">
      <div className="flex flex-col  items-center cursor-pointer">
        <Plus />
        <span>My List</span>
      </div>
      <div className="w-[110px]">
        <PlayButton />
      </div>
      <div className="flex flex-col  items-center cursor-pointer">
        <Info />
        <span>Info</span>
      </div>
    </div>
  );
};

export default BannerOptions;
