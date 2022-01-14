import Tilty from "react-tilty";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className={"m4 mt0"}>
      <Tilty
        classname={"br2 shadow-2 tilt"}
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className={"Tilt-inner p3"}>
          <img style={{ paddingTop: "5px" }} src={brain} alt="logo-brain" />
        </div>
      </Tilty>
    </div>
  );
};

export default Logo;