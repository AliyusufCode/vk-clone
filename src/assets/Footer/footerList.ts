import { GoHome } from "react-icons/go";
import { LuMessageCircle } from "react-icons/lu";
import { PiSquaresFourLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa";
export const footerList = [
  { title: "Главная", icon: GoHome, link: "/" },
  { title: "Сервисы", icon: PiSquaresFourLight, link: "/services" },
  { title: "Чаты", icon: LuMessageCircle, link: "/im" },
  { title: "Уведомления", icon: FaRegBell, link: "/notifications" },
  { title: "Ещё", icon: RxHamburgerMenu, link: "/me" },
];
