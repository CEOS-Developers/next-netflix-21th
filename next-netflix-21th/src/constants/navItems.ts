import ComingSoonIcon from "@/public/icons/bottomNavBar/ComingSoonIcon.svg";
import DownloadIcon from "@/public/icons/bottomNavBar/DownloadIcon.svg";
import HomeIcon from "@/public/icons/bottomNavBar/HomeIcon.svg";
import MoreIcon from "@/public/icons/bottomNavBar/MoreIcon.svg";
import SearchIcon from "@/public/icons/bottomNavBar/SearchIcon.svg";

// 하단 바 내비게이션
export const bottomNavItems = [
  { label: "Home", icon: HomeIcon, path: "/home", spacing: "mr-[50px]" },
  { label: "Search", icon: SearchIcon, path: "/search", spacing: "mr-[35px]" },
  {
    label: "Coming Soon",
    icon: ComingSoonIcon,
    path: "/coming-soon",
    spacing: "mr-[28px]",
  },
  {
    label: "Downloads",
    icon: DownloadIcon,
    path: "/downloads",
    spacing: "mr-[42px]",
  },
  { label: "More", icon: MoreIcon, path: "/more", spacing: "" },
];

// 헤더 메뉴
export const headerNavItems = [
  { label: "TV Shows", path: "/tv" },
  { label: "Movies", path: "/movies" },
  { label: "My List", path: "/my" },
];
