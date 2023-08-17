import { BiEdit, BiLogoTelegram } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { GiDuration } from "react-icons/gi";

const ThirdTailwind = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-2 lg:px-0 mx-auto pt-20 h-[200vh]">
      <div className="outline outline-1 outline-gray-300 py-10 px-8">
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
          <div className="">
            <h3 className="text-[28px] md:text-[32px] font-bold mb-2">Looking for a Welder</h3>
            <div className="flex gap-5 items-center">
              <p className="font-bold text-[18px]">Service tradesman</p>
              <p className="">23-July-2023</p>
            </div>
          </div>
          <div className="flex text-2xl gap-5 text-purple-500">
            <div className="p-2 outline outline-1 hover:text-white hover:bg-purple-500 rounded-full">
              <MdDelete className="" />
            </div>
            <div className="p-2 outline outline-1 hover:text-white hover:bg-purple-500 rounded-full">
              <BiEdit />
            </div>
          </div>
        </div>
      </div>
      <div className="flex outline outline-1 outline-gray-300 py-12 px-5 md:px-12">
        <div className="border-r-4 pr-4 md:pr-8 w-[30%]">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-10">
            <div className="bg-purple-500 rounded-full p-2">
              <GiDuration className="text-lg md:text-2xl text-purple-300" />
            </div>
            <div className="font-bold text-[12px]">
              <p className="text-gray-400 ">Duration</p>
              <p className="">2023-05-22 - 2023-05-22</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center  items-center gap-3 mb-10">
            <div className="bg-purple-500 rounded-full p-2">
              <GiDuration className="text-2xl text-purple-300" />
            </div>
            <div className="font-bold text-[12px]">
              <p className="text-gray-400 ">Job Location:</p>
              <p className="">2023-05-22 - 2023-05-22</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center  items-center gap-3 mb-10">
            <div className="bg-purple-500 rounded-full p-2">
              <GiDuration className="text-2xl text-purple-300" />
            </div>
            <div className="font-bold text-[12px]">
              <p className="text-gray-400 ">Budget:</p>
              <p className="">2023-05-22 - 2023-05-22</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center  items-center gap-3 mb-10">
            <div className="bg-purple-500 rounded-full p-2">
              <GiDuration className="text-2xl text-purple-300" />
            </div>
            <div className="font-bold text-[12px]">
              <p className="text-gray-400 ">Specialty</p>
              <p className="">2023-05-22 - 2023-05-22</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center  items-center gap-3 mb-10">
            <div className="bg-purple-500 rounded-full p-2">
              <GiDuration className="text-2xl text-purple-300" />
            </div>
            <div className="font-bold text-[12px]">
              <p className="text-gray-400 ">Availability</p>
              <p className="">2023-05-22 - 2023-05-22</p>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-12 w-[70%]">
          <h2 className="font-bold md:text-[24px]">Job Description</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
            ipsum necessitatibus neque aliquid possimus odio minus id? Dolorem
            unde commodi eligendi illo nemo, quis saepe consectetur, corrupti,
            doloribus at doloremque. Beatae, cum, molestiae qui ducimus
            accusantium ad, non atque dolorem nemo deserunt perferendis incidunt
            optio. Atque neque unde laudantium, sequi inventore obcaecati, magni
            nostrum, nisi minus culpa doloremque molestias quis.
          </p>

          <hr className="divider mt-20 my-12" />
          <div className="flex justify-between">
            <h5 className="font-bold md:text-[24px]">Hired</h5>
            <div className="text-[10px] md:text-[16px]">
              <p className="">
                Submitted Proposals: 30{" "}
                <span className="underline text-blue-400">views</span>
              </p>
              <p className="">
                Messages: 30{" "}
                <span className="underline text-blue-400">views</span>
              </p>
            </div>
          </div>
          <div className="flex gap-5 mt-5 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
              alt=""
              className="w-20 md:w-32 h-20 md:h-32 rounded-full"
            />
            <div className="">
              <p className="bg-violet-600 h-fit w-fit text-white px-2 py-1 rounded-md text-[10px] md:text-[16px]">
                Welder
              </p>
              <p className="font-bold text-[16px] md:text-[32px]">Tom Harty</p>
              <div className="flex items-center gap-2 md:gap-3">
                <BiLogoTelegram className="text-gray-500 text-[20px]" />
                <p className="text-gray-500 text-[10px]">Dhaka Uttara 103-A</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdTailwind;
