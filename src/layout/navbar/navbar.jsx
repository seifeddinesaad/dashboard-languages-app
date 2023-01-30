import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { MdOutlineExpandMore } from "react-icons/md";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="searchbar">
        <div className="icon">
          <AiOutlineSearch />
        </div>{" "}
        <input type="text" placeholder="إبحث عن أي شيئ" />
      </div>
      <div className="user">
        <div className="img">
          <AiOutlineUser />
        </div>
        <div className="description">
          <p>سيف الدين سعد</p>
          <p>Admin</p>
        </div>
        <MdOutlineExpandMore />
      </div>
    </div>
  );
};
