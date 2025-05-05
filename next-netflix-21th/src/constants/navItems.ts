import HomeIcon from "@/public/icons/bottomNavBar/HomeIcon.svg";
import SearchIcon from "@/public/icons/bottomNavBar/SearchIcon.svg";
import ComingSoonIcon from "@/public/icons/bottomNavBar/ComingSoonIcon.svg";
import DownloadIcon from "@/public/icons/bottomNavBar/DownloadIcon.svg";
import MoreIcon from "@/public/icons/bottomNavBar/MoreIcon.svg";

export const navItems = [
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
