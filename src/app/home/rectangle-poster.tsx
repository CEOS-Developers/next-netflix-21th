const RectanglePoster = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex-shrink-0 rounded-[2px] w-[103px] h-[161px] overflow-hidden">
      {children}
    </div>
  );
};

export default RectanglePoster;
