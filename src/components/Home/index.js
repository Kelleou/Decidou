import { Link } from "react-router-dom";
import './index.css';
import Decidou from '../Images/decidou_hi.PNG'
const Home = () => {
    return (
        <div className="home-page">
            <div className="text">
                <h1> Hello! I am Decidou! </h1>
                <h2>I am here to help you make a decision!</h2>
                <img src={Decidou} alt='decidou' className="hi"/>
                &nbsp;
                <Link to="/food" className="but1"> Help me decide what to eat!</Link>
                &nbsp;
                <Link to="/answer" className="but2"> I am lost!</Link>
                &nbsp;
                <Link to="/which" className="but3"> This or That?</Link>
                &nbsp;
                <Link to="/decidou" className="but4"> More about Dicidou</Link>
            </div>
        </div>
    );
}

export default Home