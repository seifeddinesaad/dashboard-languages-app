import React from "react";

const Button = ({ className, setIsopen, text }) => {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        console.log("click");
        setIsopen(true);
      }}
    >
      {text}{" "}
    </button>
  );
};
export default Button;
