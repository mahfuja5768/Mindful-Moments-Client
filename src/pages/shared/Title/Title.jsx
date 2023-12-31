import React from "react";

const Title = ({ title }) => {
  return (
    <div className="flex justify-center my-12">
    <h3 className="text-xl md:text-2xl lg:text-3xl border-y-8 bg-[#f7f7f7] rounded-t-2xl rounded-b-2xl text-secondary border-secondary w-1/4 font-bold  text-center py-3">
      {title}
    </h3>
  </div>
  );
};

export default Title;
