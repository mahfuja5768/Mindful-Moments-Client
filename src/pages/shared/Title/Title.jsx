import React from "react";

const Title = ({ title, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="md:text-3xl text-2xl font-bold text-gray-700">{title}</div>
    </div>
  );
};

export default Title;
