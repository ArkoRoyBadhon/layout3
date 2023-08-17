import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { RiMoneyDollarBoxLine, RiDeleteBinLine } from "react-icons/ri";
import { BsBag, BsArrowUpRight } from "react-icons/bs";

const FirstTailwind = () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto pt-20 px-2 lg:px-0">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="flex border border-spacing-10 bg-custom p-[3px] rounded-lg">
          <input
            type="text"
            className="outline outline-none px-5 w-full md:w-fit"
            placeholder="search something"
          />
          <div className="GradientColor px-3 py-2 text-white rounded-md cursor-pointer">
            <FiSearch />
          </div>
        </div>
        <div className="flex GradientColor text-white justify-center items-center rounded-lg px-5 gap-2 font-semibold mt-5 md:mt-0 py-2 md:py-0">
          <p className="cursor-pointer">Post a New Job</p>
          <AiOutlinePlus />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-18 lg:gap-10">
        {items?.map((item) => {
          return (
            <div
            key={item.id}
            className="hover:bg-[#8d54f0] transition-all ease-in bg-blue-200 min-h-[35vh] mt-14 md:mt-0 relative w-full rounded-[14px]"
          >
            <div className="absolute top-[6px]  z-5 bg-white min-h-[40vh] col-span-1 w-full rounded-xl px-5 py-6 shadow-lg">
              <h2 className="text-lg font-bold">looking for a Welder</h2>
              <p className="text-gray-400 text-[12px] mt-1 mb-2">25-July</p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, harum modi. Consequatur quaerat praesentium
                consectetur, atque impedit aliquam aperiam officiis, non itaque
                qui saepe voluptas quae nemo id eum quos!
              </p>
              <div className="flex justify-between mt-2">
                <div className="flex justify-center items-center gap-2">
                  <RiMoneyDollarBoxLine className="text-sky-700" />
                  <div className="text-[12px]">
                    <p className="text-gray-400 leading-5">Budget:</p>
                    <p className="leading-5">$100</p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <BsBag className="text-sky-700" />
                  <div className="text-[12px]">
                    <p className="text-gray-400 leading-5">Job Type</p>
                    <p className="leading-5">Fixed-Price</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-2 gap-10">
                <div className="flex justify-center items-center gap-2 border w-full rounded-lg cursor-pointer GradientBg font-semibold hover:text-white">
                  <p className="capitalize">view details</p>
                  <BsArrowUpRight className="font-bold" />
                </div>
                <div className="flex justify-center items-center gap-2 border rounded-full p-2 cursor-pointer GradientBg">
                  <RiDeleteBinLine className="text-sky-700 text-xl" />
                </div>
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default FirstTailwind;
