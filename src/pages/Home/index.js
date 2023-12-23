import { Link } from "react-router-dom";
import "./index.css";
import Decidou from "../../assets/Images/decidou_hi.PNG";
const Home = () => {
  return (
    <div className="container md:container md:mx-auto">
      <h1> Hello! I am Decidou! </h1>
      <h2>I am here to help you make a decision!</h2>
      <div class="grid grid-cols-2 mt-5">
        <span>
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
        <span> <img src={Decidou} alt="decidou" className="object-contain md:object-scale-down hi" /></span>
      </div>
    </div>
  );
};

export default Home;
