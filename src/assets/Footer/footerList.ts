import { GoHome } from "react-icons/go";
import { LuMessageCircle } from "react-icons/lu";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FaPhotoVideo } from "react-icons/fa";
import { PiSquaresFourLight } from "react-icons/pi";
export const footerList = [
  { title: "Главная", icon: GoHome, link: "/" },
  { title: "Сервисы", icon: PiSquaresFourLight, link: "/services" },
  { title: "Чаты", icon: LuMessageCircle, link: "/im" },
  { title: "Клипы", icon: FaPhotoVideo, link: "/video" },
  { title: "Видео", icon: HiOutlineVideoCamera, link: "/video" },
];
