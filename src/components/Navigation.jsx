import { Link } from "react-router-dom";
import food from "../assets/logo.jpeg";

const Navigation = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <Link to="/">
                    <li>
                        <img className="logo" src={food} alt="background" />
                    </li>
                </Link>

                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/pizzas">
                    <li>Pizzas</li>
                </Link>

                <Link to="/desserts">
                    <li>Desserts</li>
                </Link>

                <Link to="/drinks">
                    <li>Drinks</li>
                </Link>

                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navigation;