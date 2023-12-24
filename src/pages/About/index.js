import { Link } from "react-router-dom";
import "./index.css";
import Decidou from "../../assets/Images/dd.png";
const About = () => {
  return (
    <div className="container md:container md:mx-auto text-center">
      <h1> About Decidou! </h1>
      <h2> I help people make decisions!</h2>
      <div className="grid grid-cols-2 m-10 gap-0">
        <span className="text-left">
          <h3> What I can do:</h3>
          <ul className="functions-li">
            <li>
              <p className="function text-orange-300">Select Random Food:</p> Generates a random food choice from my
              database
            </li>
            <li>
            <p className="function text-sky-500">Book of Answers:</p> Generates a random quote from my book! &#40;
              Inspired by The Book of Answers &#41;
            </li>
            <li><p className="function text-yellow-500">Toss a coin: </p> Generate a random face of a coin</li>
            <br></br>
            <li>More functions coming soon..</li>
          </ul>
        </span>
        <div>
          <img src={Decidou} alt="decidou" />
        </div>
      </div>
    </div>
  );
};

export default About;
