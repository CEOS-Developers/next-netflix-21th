const SqaurePoster = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex-shrink-0 rounded-full w-[102px] h-[102px] overflow-hidden">
      {children}
    </div>
  );
};

export default SqaurePoster;
