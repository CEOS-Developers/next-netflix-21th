import InfoIcon from "@/public/icons/home/infoIcon.svg";
import MyListIcon from "@/public/icons/home/myListIcon.svg";
import RightArrow from "@/public/icons/home/rightArrow.svg";
const BannerOption = () => {
  return (
    <div className="flex justify-between items-center w-[375px] h-[87px] pt-[16px] pb-[16px] pr-[48px] pl-[48px]">
      <button className="flex flex-col justify-center items-center hover:text-gray-200">
        <MyListIcon className="mx-auto stroke-current" />
        <p>My List</p>
      </button>
      
      <button className="w-[124px] h-[55px] bg-gray-100 rounded-[4px] flex justify-center items-center pt-[12px] pb-[12px] pr-[20px] pl-[20px] gap-2 hover:bg-gray-200">
        <RightArrow/>
        <p className="text-[24px] font-semibold text-black">Play</p>
      </button>

      <button className="flex flex-col justify-center items-center hover:text-gray-200">
        <InfoIcon className="mx-auto stroke-current" />
        <p>Info</p>
      </button>
    </div>
  );
};
export default BannerOption;
