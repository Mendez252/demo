import { Element } from "react-scroll";
import { useEffect } from "react";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Map from "../components/Map";
import Card from "../components/Card";
import FirstStep from "./FirstStep";

const Home = () => {
  useEffect(() => {
    // Deshabilitar el scroll manual
    document.body.style.overflow = "hidden";

    // Limpiar el efecto para habilitar el scroll manual al desmontar el componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="fixed top-0 w-full z-50">
          <Header />
        </div>
        <Element name="home" className="pt-[var(--header-height)]">
          <div className="absolute z-10 w-[30%] h-48 top-60 right-56">
            <Card />
          </div>
          <Carrousel />
        </Element>
        <Element name="firstStep" className="pt-[var(--header-height)]">
          <FirstStep />
        </Element>
        <Element name="map" className="pt-[var(--header-height)]">
          <Map />
        </Element>
      </div>
    </>
  );
};

export default Home;
