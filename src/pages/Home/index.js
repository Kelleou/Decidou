import { Link } from "react-router-dom";
import "./index.css";
import Decidou from "../../assets/Images/decidou_hi.PNG";
const Home = () => {
  return (
    <div className="container md:container md:mx-auto text-center">
      <h1> Hello! I am Decidou! </h1>
      <h2>I am here to help you make a decision!</h2>
      <div className="grid grid-cols-2 m-10 gap-0">
        <span className="mr-5">
          <Link to="/food" className="but1">
            Help me decide what to eat!
          </Link>
          <Link to="/answer" className="but2">
            I am lost!
          </Link>
          <Link to="/coin" className="but3">
            Flip a coin!
          </Link>
          <Link to="/decidou" className="but4">
            More about Dicidou
          </Link>
        </span>
        <span> <img src={Decidou} alt="decidou" className="hi object-contain h-full w-full" /></span>
      </div>
    </div>
  );
};

export default Home;
