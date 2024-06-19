import { useState, useContext } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoCaretBackCircleSharp } from "react-icons/io5";
import { scroller } from "react-scroll";
import { SectionContext } from "../contexts/SectionContext";
import { IoCaretForwardCircleSharp } from "react-icons/io5";

const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const context = useContext(SectionContext);
  if (!context) {
    // Manejar el caso donde el contexto es undefined
    return <div>Error: El contexto no está disponible.</div>;
  }
  const { section, setSection } = context;

  const images = [
    "https://res.cloudinary.com/universalm/image/upload/v1718762661/cuba2_gkr83x.jpg?text=Slide+1",
    "https://res.cloudinary.com/universalm/image/upload/v1718763903/cuba4_zgwdsx.jpg?text=Slide+2",
    "https://res.cloudinary.com/universalm/image/upload/v1718763219/auto_iww0vw.jpg?text=Slide+3",
    "https://res.cloudinary.com/universalm/image/upload/v1718763351/cuba_jewaz7.jpg?text=Slide+4",
    "https://res.cloudinary.com/universalm/image/upload/v1718763515/cuba3_lftplf.jpg?text=Slide+5",
    "https://res.cloudinary.com/universalm/image/upload/v1718826260/cuba6_nsiev2.jpg?text=Slide+6",
    "https://res.cloudinary.com/universalm/image/upload/v1718826515/cuba7_s3p730.jpg?text=Slide+7",
    "https://res.cloudinary.com/universalm/image/upload/v1718829163/cuba8_p1fs3r.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="fixed bottom-[170px] right-[100px] z-10 hover:cursor-pointer">
        <div
          className="p-2  rounded-full glassmorphism shadow-lg"
          onClick={() => {
            if (section === "map") {
              setSection("home");
              scroller.scrollTo("home", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
              });
            } else if (section === "home") {
              setSection("map");
              scroller.scrollTo("map", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
              });
            }
          }}
        >
          {section === "map" ? (
            <FaHome
              size={45}
              className="text-[#1679AB] group-hover:text-[#123456]"
            />
          ) : (
            <FaLocationDot
              size={45}
              className="text-red-500 group-hover:text-[#654321]"
            />
          )}
        </div>
      </div>
      <div
        className="fixed bottom-[80px] right-[100px] z-10 group hover:cursor-pointer "
        onClick={() => alert("Contact us")}
      >
        <div className="p-2 glassmorphism rounded-full shadow-lg">
          <IoLogoWhatsapp
            size={45}
            className="text-[#25D366] group-hover:text-[#1a9949]"
          />
        </div>
      </div>
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center glassmorphism w-[35px] h-full border-0 group hover:cursor-pointer"
        onClick={prevSlide}
      >
        <IoCaretBackCircleSharp
          size={50}
          className="text-white group-hover:text-[#CF142B]"
        />
      </div>
      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center glassmorphism w-[35px] h-full border-0 group hover:cursor-pointer"
        onClick={nextSlide}
      >
        <IoCaretForwardCircleSharp
          size={50}
          className="text-white group-hover:text-[#CF142B]"
        />
      </div>
      <div className="flex h-full items-start justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-[97%] ${
              index === currentIndex ? "block" : "hidden"
            } transition-opacity duration-500 ease-in-out`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
