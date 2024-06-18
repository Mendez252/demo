import backgroundImage from "../assets/bg.jpg";

interface BodyProps {
  children: React.ReactNode;
}

const Body = ({ children }: BodyProps) => {
  return (
    <div>
      <img
        src={backgroundImage}
        className="w-full h-screen  flex bg-[#CCCCCC]"
        style={{ opacity: 0.5 }}
      ></img>
    </div>
  );
};

export default Body;
