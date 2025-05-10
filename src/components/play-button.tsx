import Play from "@/assets/play.svg";
const PlayButton = () => {
  return (
    <button className="bg-[#C4C4C4] flex gap-[15px] items-center justify-center rounded-[5.63px] py-2 w-full cursor-pointer">
      <Play />
      <span className="font-Headline2 text-black">Play</span>
    </button>
  );
};

export default PlayButton;
