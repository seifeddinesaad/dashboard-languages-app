import links from "./data/data";
import { NavLink } from "react-router-dom";

// icons

import { AiOutlineMenu } from "react-icons/ai";

import companyLogo from "./assets/Group 3225 9.08.39 AM.png";
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
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={`/${link.englishName}`}
                      onClick={() => setMenu(false)}
                    >
                      <div className="align">
                        {link.icon} <p>{link.name}</p>
                      </div>
                    </NavLink>
                  </li>
                );
              })}
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
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={`/${link.englishName}`}
                    onClick={() => setMenu(false)}
                  >
                    <div className="align">
                      {link.icon} <p>{link.name}</p>
                    </div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
