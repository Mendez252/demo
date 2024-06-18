import React, { useState, useContext } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { scroller } from "react-scroll";
import { SectionContext } from "../contexts/SectionContext";

const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const context = useContext(SectionContext);
  const { section, setSection } = context;

  const images = [
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?text=Slide+1",
    "https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?text=Slide+2",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?text=Slide+3",
    "https://images.unsplash.com/photo-1612965607446-25e1332775ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?text=Slide+4",
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
            <FaHome size={45} color={"#1679AB"} />
          ) : (
            <FaLocationDot size={45} color={"red"} />
          )}
        </div>
      </div>
      <div
        className="fixed bottom-[80px] right-[100px] z-10  hover:cursor-pointer "
        onClick={() => alert("Contact us")}
      >
        <div className="p-2 glassmorphism rounded-full shadow-lg">
          <IoLogoWhatsapp size={45} color={"#25D366"} />
        </div>
      </div>

      <div className="flex h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full ${
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
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 hover:border-orange-400 text-white hover:text-orange-400 text-3xl px-4 py-2 rounded-full shadow-md z-10 border-4"
        onClick={prevSlide}
      >
        {"<"}
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 hover:border-orange-400 text-white hover:text-orange-400 text-3xl px-4 py-2 rounded-full shadow-md z-10 border-4"
        onClick={nextSlide}
      >
        {">"}
      </button>
    </div>
  );
};

export default Carrousel;
