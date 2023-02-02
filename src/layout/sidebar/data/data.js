import { BsCardChecklist } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { AiOutlineMessage, AiOutlineMenu } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { SlSettings } from "react-icons/sl";
export { default as category } from "../assets/category.svg";
export { default as message } from "../assets/message 2.svg";
export { default as list } from "../assets/task-square.svg";
export { default as user } from "../assets/profile-2user.svg";
export { default as settings } from "../assets/setting-2.svg";

const links = [
  {
    id: "1",
    name: "الفصول",
    icon: <BiCategory fontSize="1.6rem" />,
    englishName: "chapters",
  },
  {
    id: "2",
    name: "الدروس",
    icon: <AiOutlineMessage fontSize="1.6rem" />,
    englishName: "lessons",
  },
  {
    id: "3",
    name: "المستويات",
    icon: <BsCardChecklist fontSize="1.6rem" />,
    englishName: "levels",
  },
  {
    id: "4",
    name: "المستخدمين",
    icon: <FiUsers fontSize="1.6rem" />,
    englishName: "users",
  },
  {
    id: "5",
    name: "إعدادات",
    icon: <SlSettings fontSize="1.6rem" />,
    englishName: "settings",
  },
];
export default links;
