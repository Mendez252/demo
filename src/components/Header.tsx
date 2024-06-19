import { FaStar } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-black p-5 text-white text-center flex justify-between items-center">
        <span className="text-white text-3xl px-8">
          <span className="text-[#CF142B]">Cubano</span>

          <span className="text-[#002A8F]">
            Tours
            <span className="text-xs absolute">
              <FaStar size={15} color={"white"} />
            </span>
          </span>
        </span>

        <div className="flex space-x-6 px-28 text-xl ">
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
