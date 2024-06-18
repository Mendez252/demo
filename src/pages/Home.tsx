import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Map from "../components/Map";

import { Element } from "react-scroll";
import { useEffect } from "react";

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
      <div className="flex flex-col ">
        <Element name="home">
          <Header />
          <Carrousel />
        </Element>
        <Element name="map">
          <Map />
        </Element>
      </div>
    </>
  );
};

export default Home;
