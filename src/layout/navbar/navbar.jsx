import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { MdOutlineExpandMore } from "react-icons/md";

import { useState } from "react";
import { useGlobalContext } from "../../context/context";
export const Navbar = () => {
  const { handleChange, result } = useGlobalContext();

  return (
    <div className="Navbar">
      <div className="searchbar">
        <div className="icon">
          <AiOutlineSearch />
        </div>{" "}
        <input
          type="text"
          placeholder="إبحث عن أي شيئ"
          onChange={(e) => {
            console.log(e.target);
            handleChange(e);
          }}
        />
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
