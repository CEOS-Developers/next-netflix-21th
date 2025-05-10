import TopTenIcon from "@/assets/topten.svg";

const BannerDescription = ({ rank }: { rank: number }) => {
  return (
    <div className="flex gap-[5px] justify-center">
      <TopTenIcon />
      <h2 className="font-body-2-medium">#{rank} in Korea Today</h2>
    </div>
  );
};

export default BannerDescription;
