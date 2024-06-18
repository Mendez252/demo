const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-[#CCCCCC] p-8 text-white text-center flex justify-between items-center">
        <span className="text-black text-3xl px-8">Logo o Título</span>

        <div className="flex space-x-6 px-28 text-xl ">
          <span className="cursor-pointer hover:text-gray-600 text-black">
            Sobre Nosotros
          </span>
          <span className="cursor-pointer hover:text-gray-600 text-black">
            Valores
          </span>
          <span className="cursor-pointer hover:text-gray-600 text-black">
            Servicios
          </span>
          <span className="cursor-pointer hover:text-gray-600 text-black">
            FAQ
          </span>
        </div>
      </div>
      <div className="w-full bg-stone-700 border-[4px] border-stone-700"></div>
    </div>
  );
};

export default Header;
