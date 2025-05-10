import HeaderNavigation from "./header-navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full overflow-auto scrollbar-none">
      <div className="absolute w-full z-20">
        <HeaderNavigation />
      </div>
      {children}
    </div>
  );
}
