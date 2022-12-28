import { Link } from "react-router-dom";
import './index.css';
const Home = () => {
    return (
        <div className="home-page">
            <div className="text">
                <h1> Hello! I am Decidou! </h1>
                <h2>I am here to help you make a decision!</h2>
                &nbsp;
                <Link to="decidou" className="buttons"> Help me decide what to eat!</Link>
                &nbsp;
                <Link to="decidou" className="buttons"> I am lost!</Link>
                &nbsp;
                <Link to="decidou" className="buttons"> This or That?</Link>
                &nbsp;
                <Link to="decidou" className="buttons"> More about Dicidou</Link>
            </div>
        </div>
    );
}

export default Home