import links from "./data/data";
import { Link } from "react-router-dom";
import companyLogo from "./assets/Group 3225.png";
export const Sidebar = () => {
  console.log(links, "links");
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={companyLogo} alt="takiacademy" />
      </div>
      <div className="links">
        <ul>
          {links.map((link, index) => {
            return (
              <Link key={index} to={link.name}>
                <li>{link.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
