import { FaRegUserCircle } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { CiMusicNote1 } from "react-icons/ci";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { CgGames } from "react-icons/cg";
import { LuSticker } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
export const categoryList = [
  { title: "Моя Страница", icon: FaRegUserCircle, link: "/me", id: 1 },
  { title: "Новости", icon: LuNewspaper, link: "/", id: 1 },
  { title: "Мессенджер", icon: LuMessageCircle, link: "/im", id: 2 },
  { title: "Звонки", icon: FiPhone, link: "/calls", id: 3 },
  { title: "Друзья", icon: FaUserFriends, link: "/friends", id: 4 },
  { title: "Сообщества", icon: FaPeopleGroup, link: "/groups", id: 5 },
  {
    title: "Фотографии",
    icon: MdOutlinePhotoSizeSelectActual,
    link: "/photos",
    id: 6,
  },
  { title: "Музыка", icon: CiMusicNote1, link: "/audio", id: 7 },
  { title: "Видео", icon: HiOutlineVideoCamera, link: "/video", id: 8 },
  { title: "Игры", icon: CgGames, link: "/games", id: 9 },
  { title: "Стикеры", icon: LuSticker, link: "/stickers", id: 10 },
  { title: "Маркет", icon: IoBagOutline, link: "/market", id: 11 },
];

import { GrServices } from "react-icons/gr";
import { FaRubleSign } from "react-icons/fa6";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { SlDocs } from "react-icons/sl";
import { HiSpeakerphone } from "react-icons/hi";
import { IoMdHelpCircleOutline } from "react-icons/io";
export const category = [
  { title: "Сервисы", icon: GrServices, link: "/services", id: 12 },
  { title: "VK Pay", icon: FaRubleSign, link: "/vkpay", id: 13 },
];
export const list = [
  { title: "Закладки", icon: PiBookmarkSimpleBold, link: "/bookmarks", id: 44 },
  { title: "Файлы", icon: SlDocs, link: "/docs", id: 45 },
  { title: "Реклама", icon: HiSpeakerphone, link: "/rek", id: 46 },
  { title: "Помощь", icon: IoMdHelpCircleOutline, link: "/help", id: 47 },
];
export const mobileList = [
  { title: "Друзья", icon: FaUserFriends, link: "/friends", id: 14 },
  { title: "Сообщества", icon: FaPeopleGroup, link: "/groups", id: 15 },
  { title: "Клипы", icon: HiOutlineVideoCamera, link: "/clip", id: 16 },
  { title: "Музыка", icon: CiMusicNote1, link: "/audio", id: 17 },
  { title: "Игры", icon: CgGames, link: "/games", id: 18 },
  {
    title: "Фотографии",
    icon: MdOutlinePhotoSizeSelectActual,
    link: "/photos",
    id: 19,
  },
  { title: "Сервисы", icon: GrServices, link: "/services", id: 20 },
  { title: "Маркет", icon: IoBagOutline, link: "/market", id: 21 },
  { title: "Помощь", icon: IoMdHelpCircleOutline, link: "/help", id: 22 },
];
