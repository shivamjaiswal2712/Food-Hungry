import React from "react";
import Lists from "./Lists";
import Links from "./Links";
// import { restaurant } from "../data/restaurantData";

const Footer = () => {
    // const socials = restaurant.links;

    return(
        <footer className="footer">
            <Lists Component={Links} />
            <p>Copyright @ 2023 Food-Hungry</p>
        </footer>
    );
}

export default Footer;