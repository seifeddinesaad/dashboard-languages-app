import links from "./data/data";
import { NavLink } from "react-router-dom";

// icons
import { BsCardChecklist } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { AiOutlineMessage, AiOutlineMenu } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { SlSettings } from "react-icons/sl";
import companyLogo from "./assets/Group 3225.png";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const Sidebar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="menu">
        <AiOutlineMenu fontSize="1.4rem" onClick={() => setMenu(!menu)} />
        <div className={menu ? "sidebar__fullscreen " : "none"}>
          <div className="header">
            <img src={companyLogo} alt="companyLogo" />
            <AiOutlineClose
              fontSize="1.8rem"
              style={{ alignSelf: "center" }}
              onClick={() => setMenu(false)}
            />
          </div>
          <div className="links1">
            <ul>
              <li>
                <NavLink to="/chapters" onClick={() => setMenu(false)}>
                  <div className="align">
                    <BiCategory fontSize="1.6rem" /> <p>الفصول</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/lessons" onClick={() => setMenu(false)}>
                  {" "}
                  <div className="align">
                    <AiOutlineMessage fontSize="1.6rem" /> <p>الدروس</p>
                  </div>
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/levels" onClick={() => setMenu(false)}>
                  {" "}
                  <div className="align">
                    <BsCardChecklist fontSize="1.6rem" /> <p>المستويات</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/users" onClick={() => setMenu(false)}>
                  {" "}
                  <div className="align">
                    <FiUsers fontSize="1.6rem" /> <p>المستخدمين</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings" onClick={() => setMenu(false)}>
                  <div className="align">
                    <SlSettings fontSize="1.6rem" /> <p>إعدادات</p>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sidebar none">
        <div className="logo">
          <img src={companyLogo} alt="takiacademy" />
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink to="/chapters" onClick={() => setMenu(false)}>
                <div className="align">
                  <BiCategory fontSize="1.6rem" /> <p>الفصول</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/lessons" onClick={() => setMenu(false)}>
                {" "}
                <div className="align">
                  <AiOutlineMessage fontSize="1.6rem" /> <p>الدروس</p>
                </div>
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/levels" onClick={() => setMenu(false)}>
                {" "}
                <div className="align">
                  <BsCardChecklist fontSize="1.6rem" /> <p>المستويات</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" onClick={() => setMenu(false)}>
                {" "}
                <div className="align">
                  <FiUsers fontSize="1.6rem" /> <p>المستخدمين</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" onClick={() => setMenu(false)}>
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
