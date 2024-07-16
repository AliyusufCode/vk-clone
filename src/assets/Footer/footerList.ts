import { GrServices } from "react-icons/gr";
import { GoHome } from "react-icons/go";
import { LuMessageCircle } from "react-icons/lu";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FaPhotoVideo } from "react-icons/fa";
export const footerList = [
  { title: "Главная", icon: GoHome, link: "/" },
  { title: "Сервисы", icon: GrServices, link: "/services" },
  { title: "Чаты", icon: LuMessageCircle, link: "/im" },
  { title: "Клипы", icon: HiOutlineVideoCamera, link: "/video" },
  { title: "Видео", icon: FaPhotoVideo, link: "/services" },
];
