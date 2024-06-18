import Header from "../components/Header";
import Body from "../components/Body";
import Carrousel from "../components/Carrousel";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />

      <Carrousel />
    </div>
  );
};

export default Home;
