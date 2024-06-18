import backgroundImage from "../assets/bg.jpg";

const Body = () => {
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
