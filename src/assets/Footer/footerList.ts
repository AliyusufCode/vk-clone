import { GoHome } from "react-icons/go";
import { LuMessageCircle } from "react-icons/lu";
import { PiSquaresFourLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa";
export const footerList = [
  { title: "Главная", icon: GoHome, link: "/", id: 1 },
  { title: "Сервисы", icon: PiSquaresFourLight, link: "/services", id: 2 },
  { title: "Мессенджер", icon: LuMessageCircle, link: "/im", id: 3 },
  { title: "Уведомления", icon: FaRegBell, link: "/notifications", id: 4 },
  { title: "Ещё", icon: RxHamburgerMenu, link: "/me", id: 5 },
];
