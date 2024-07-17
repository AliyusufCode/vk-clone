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
import { SiGooglemarketingplatform } from "react-icons/si";
export const categoryList = [
  { title: "Моя Страница", icon: FaRegUserCircle, link: "/me" },
  { title: "Новости", icon: LuNewspaper, link: "/" },
  { title: "Мессенджер", icon: LuMessageCircle, link: "/im" },
  { title: "Звонки", icon: FiPhone, link: "/calls" },
  { title: "Друзья", icon: FaUserFriends, link: "/friends" },
  { title: "Сообщества", icon: FaPeopleGroup, link: "/groups" },
  {
    title: "Фотографии",
    icon: MdOutlinePhotoSizeSelectActual,
    link: "/photos",
  },
  { title: "Музыка", icon: CiMusicNote1, link: "/audio" },
  { title: "Видео", icon: HiOutlineVideoCamera, link: "/video" },
  //   { title: "Клипы", icon: FaRegUserCircle, link: "/clip" },
  { title: "Игры", icon: CgGames, link: "/games" },
  { title: "Стикеры", icon: LuSticker, link: "/stickers" },
  { title: "Маркет", icon: SiGooglemarketingplatform, link: "/market" },
];

import { GrServices } from "react-icons/gr";
import { FaRubleSign } from "react-icons/fa6";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { SlDocs } from "react-icons/sl";
import { HiSpeakerphone } from "react-icons/hi";
import { IoMdHelpCircleOutline } from "react-icons/io";
export const category = [
  { title: "Сервисы", icon: GrServices, link: "/services" },
  { title: "VK Pay", icon: FaRubleSign, link: "/vkpay" },
];
export const list = [
  { title: "Закладки", icon: PiBookmarkSimpleBold, link: "/bookmarks" },
  { title: "Файлы", icon: SlDocs, link: "/docs" },
  { title: "Реклама", icon: HiSpeakerphone, link: "/rek" },
  { title: "Помощь", icon: IoMdHelpCircleOutline, link: "/help" },
];
