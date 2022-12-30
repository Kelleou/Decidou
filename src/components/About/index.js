import { Link } from "react-router-dom";
import './index.css';
import Decidou from '../Images/dd.png'
const About = () => {
    return (
        <div className="about-page">
            <div className="text">
                <h1> About Decidou! </h1>
                <h2> I help people make decisions!</h2>
                <h2> What I can do:</h2>
                <img src={Decidou} alt='decidou' className="hi" />
                <p className="about">
                    <ul>
                        <li>Select Random Food: Generates a random food choice from my database</li>
                        <li>Book of Answers: Generates a random quote from my book! &#40; Inspired by The Book of Answers &#41;</li>
                        <li>Toss a coin: Generate a random face of a coin</li>
                        <li>More functions coming soon..</li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default About