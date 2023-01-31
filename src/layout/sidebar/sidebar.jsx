import links from "./data/data";
import { NavLink } from "react-router-dom";

// icons
import { BsCardChecklist } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { AiOutlineMessage, AiOutlineMenu } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { SlSettings } from "react-icons/sl";
import companyLogo from "./assets/Group 3225.png";

export const Sidebar = () => {
  return (
    <>
      <div className="menu">
        <AiOutlineMenu fontSize="1.4rem" />
        <div className="sidebar__fullscreen"></div>
      </div>
      <div className="sidebar none">
        <div className="logo">
          <img src={companyLogo} alt="takiacademy" />
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink to="/chapters">
                <div className="align">
                  <BiCategory fontSize="1.6rem" /> <p>الفصول</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/lessons">
                {" "}
                <div className="align">
                  <AiOutlineMessage fontSize="1.6rem" /> <p>الدروس</p>
                </div>
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/levels">
                {" "}
                <div className="align">
                  <BsCardChecklist fontSize="1.6rem" /> <p>المستويات</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/users">
                {" "}
                <div className="align">
                  <FiUsers fontSize="1.6rem" /> <p>المستخدمين</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings">
                <div className="align">
                  <SlSettings fontSize="1.6rem" /> <p>إعدادات</p>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

//   {
//     links.map((link, index) => {
//       return (
//         <Link key={index} to="/chapters">
//   <li>
//     {`<${link.icon} fontSize="1.6rem" />`} <p>{link.name}</p>
//   </li>
// </Link>
//     }
// <Link key={index} to={link.name}>
//   <li>{link.name}</li>
//   <img src={`./assets/${link.icon}`} alt="" />
// </Link>
//     );
//   });
// }
