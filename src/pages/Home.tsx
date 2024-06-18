import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
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
      <Header />
      <div className="flex flex-col ">
        <Element name="home">
          <Carrousel />
        </Element>
        <Element name="map">
          <div className="w-full h-screen">Map</div>
        </Element>
      </div>
    </>
  );
};

export default Home;
