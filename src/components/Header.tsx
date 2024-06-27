import { FaStar } from "react-icons/fa6";
import { scroller } from "react-scroll";

const Header = () => {
  return (
    <div className="flex flex-col z-20">
      <div className="w-full bg-black p-5 text-white text-center flex justify-between items-center">
        <span
          className="text-white text-5xl px-8 hover:cursor-pointer"
          onClick={() => {
            scroller.scrollTo("home", {
              duration: 800,
              delay: 0,
              smooth: "easeInOutQuart",
            });
          }}
        >
          <span className="text-[#CF142B] cuba text-6xl">Cubano</span>

          <span className="text-[#002A8F] tours text-5xl font-medium">
            Tours
            <span className="text-xs absolute">
              <FaStar size={15} color={"white"} />
            </span>
          </span>
        </span>

        <div className="flex space-x-6 px-28 text-2xl ">
          <span className="cursor-pointer hover:text-gray-600 text-white">
            Sobre Nosotros
          </span>
          <span className="cursor-pointer hover:text-gray-600 text-white">
            Valores
          </span>
          <span className="cursor-pointer hover:text-gray-600 text-white">
            Servicios
          </span>
          <span className="cursor-pointer hover:text-gray-600 text-white">
            FAQ
          </span>
        </div>
      </div>
      <div className="w-full border-[3px] border-white"></div>
    </div>
  );
};

export default Header;
