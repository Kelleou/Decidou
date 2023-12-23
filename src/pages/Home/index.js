import { Link } from "react-router-dom";
import "./index.css";
import Decidou from "../../assets/Images/decidou_hi.PNG";
export default function Home(){
  return (
    <div className="container md:container md:mx-auto text-center">
      <h1> Hello! I am Decidou! </h1>
      <h2>I am here to help you make a decision!</h2>
      <div className="grid grid-cols-2 m-10 gap-0">
        <span>
          <Link to="/food" className="btns">
            Help me decide what to eat!
          </Link>
          <Link to="/answer" className="btns">
            I am lost!
          </Link>
          <Link to="/coin" className="btns">
            Flip a coin!
          </Link>
          <Link to="/decidou" className="btns">
            More about Dicidou
          </Link>
        </span>
        <span> <img src={Decidou} alt="decidou" className="hi object-contain h-full w-full" /></span>
      </div>
    </div>
  );
};