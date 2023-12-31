/* eslint-disable react/prop-types */

const SectionTitle = ({ heading }) => {
  return (
    <div className="flex items-center justify-center md:mt-32 mt-24 ">
      <h3 className="text-xl md:text-2xl lg:text-3xl  border-y-8 rounded-t-2xl bg-[#f7f7f7] rounded-b-2xl text-secondary border-secondary w-1/4 font-bold  text-center py-3">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
