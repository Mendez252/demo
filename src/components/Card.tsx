import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import IconContainer from "./IconContainer";

const Card = () => {
  return (
    <div className="flex flex-col p-4 card text-5xl rounded-xl  text-center">
      <div>
        <span className="cuba text-7xl text-red-700 ">La Habana</span> te
        espera!
      </div>
      <div className="text-2xl mt-3">
        Tu tour seguro comienza aqui. Registrate ahora!
      </div>
      <div className="flex flex-row justify-around mt-12 w-100 ">
        <IconContainer icon={<FcGoogle size={50} />} />
        <IconContainer icon={<FaFacebook size={50} color="#1877F2" />} />
        <IconContainer icon={<FaTwitter size={50} color="#1DA1F2" />} />
      </div>
    </div>
  );
};

export default Card;
