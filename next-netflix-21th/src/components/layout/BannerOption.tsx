import InfoIcon from "@/public/icons/home/infoIcon.svg";
import MyListIcon from "@/public/icons/home/myListIcon.svg";
import RightArrow from "@/public/icons/home/rightArrow.svg";
const BannerOption = () => {
  return (
    <div className="flex justify-between items-center w-[375px] h-[87px] pt-[16px] pb-[16px] pr-[48px] pl-[48px]">
      <button className="flex flex-col justify-center items-center hover:text-gray-200 cursor-pointer">
        <MyListIcon className="mx-auto stroke-current" />
        <p className="body3">My List</p>
      </button>

      <button className="w-[110px] h-[45px] bg-gray-100 rounded-[4px] flex justify-center items-center py-[12px] px-[20px] gap-[15px] hover:bg-gray-200 cursor-pointer">
        <RightArrow />
        <p className="subhead1 text-black">Play</p>
      </button>

      <button className="flex flex-col justify-center items-center hover:text-gray-200 cursor-pointer">
        <InfoIcon className="mx-auto stroke-current" />
        <p className="body3">Info</p>
      </button>
    </div>
  );
};
export default BannerOption;
