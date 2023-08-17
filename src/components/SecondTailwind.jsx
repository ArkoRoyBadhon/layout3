import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { BsBag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const SecondTailwind = () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto pt-20 px-2 lg:px-0">
      <div className="flex outline outline-1 outline-[#5697C9] bg-custom p-[3px] rounded-lg">
        <input
          type="text"
          className="outline outline-none px-5 w-full"
          placeholder="search something"
        />
        <div className="GradientColor px-3 py-2 text-white rounded-md cursor-pointer">
          <FiSearch />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items?.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white h-fit col-span-1 w-full rounded-3xl border hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
                  alt="img"
                  className="object-fill rounded-t-3xl h-[200px] w-full"
                />
                <div className="absolute -bottom-3 left-4">
                  <div className="">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                      alt=""
                      className="h-20 w-20 rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-3 right-8 bg-[#5697C9] text-white px-2 cursor-pointer">
                  Wielder
                </div>
                <div className="absolute top-6 right-8 bg-blue-600 text-white p-1 cursor-pointer">
                  <AiOutlineHeart className="text-3xl" />
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="flex justify-between">
                  <h3 className="font-bold text-[20px]">Tom Harty</h3>
                  <div className="flex items-center justify-center text-gray-500">
                    <GrLocation />
                    <p className="">123 Main Street Toranto</p>
                  </div>
                </div>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  deserunt dolorum molestias eveniet soluta quos id iste sint
                  dolor autem ut eum eaque, et nihil quaerat animi impedit
                  perspiciatis explicabo!
                </p>
                <h5 className="font-bold my-2">Skills</h5>
                <div className="flex flex-wrap gap-3">
                  <p className="bg-gray-200 rounded-lg px-2">
                    Mathematical Skills
                  </p>
                  <p className="bg-gray-200 rounded-lg px-2">
                    Attention to Detail
                  </p>
                  <p className="bg-gray-200 rounded-lg px-2">Communication</p>
                </div>
                <div className="flex justify-between mt-6">
                  <div className="flex justify-center items-center gap-2 border rounded-lg cursor-pointer GradientColor px-6 py-3 font-semibold text-white w-fit">
                    <p className="capitalize">view Profile</p>
                    <CgProfile className="text-lg" />
                  </div>
                  <div className="flex justify-center items-center gap-2 border w-fit rounded-lg cursor-pointer GradientBg px-6 py-3 font-semibold hover:text-white outline outline-1">
                  <p className="capitalize">Invite</p>
                  <BsBag className="font-bold" />
                </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondTailwind;
