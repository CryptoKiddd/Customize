import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";

const CustomButton = ({ type, title, handleClick, customStyles }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };

  return (
    <button
      onClick={handleClick}
      style={generateStyle(type)}
      className={`px-4 py-1.5 rounded-md ${customStyles} `}
    >
      {title}
    </button>
  );
};

export default CustomButton;
