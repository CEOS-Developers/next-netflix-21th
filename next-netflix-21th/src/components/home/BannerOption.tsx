import InfoIcon from "@/public/icons/home/infoIcon.svg";
import MyListIcon from "@/public/icons/home/myListIcon.svg";
import RightArrow from "@/public/icons/home/rightArrow.svg";

const IconButton = ({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) => (
  <button className="flex cursor-pointer flex-col items-center justify-center hover:text-gray-200">
    <Icon className="mx-auto stroke-current" />
    <p className="text-body3">{label}</p>
  </button>
);

const BannerOption = () => {
  return (
    <div className="flex h-[87px] w-[375px] items-center justify-between px-[48px] pt-[16px] pb-[16px]">
      <IconButton icon={MyListIcon} label="My List" />

      <button className="flex h-[45px] w-[110px] cursor-pointer items-center justify-center gap-[15px] rounded-[4px] bg-gray-100 px-[20px] py-[12px] hover:bg-gray-200">
        <RightArrow />
        <p className="text-subhead1 text-black">Play</p>
      </button>

      <IconButton icon={InfoIcon} label="Info" />
    </div>
  );
};

export default BannerOption;
