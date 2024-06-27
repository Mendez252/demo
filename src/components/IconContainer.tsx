import { scroller } from "react-scroll";

const IconContainer = ({ icon }: IconContainerProps) => {
  return (
    <div
      className="hover:cursor-pointer flex justify-center w-[10%]"
      onClick={() => {
        scroller.scrollTo("firstStep", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }}
    >
      {icon}
    </div>
  );
};

export default IconContainer;

//=================TYPES===============
interface IconContainerProps {
  icon: React.ReactNode;
}
