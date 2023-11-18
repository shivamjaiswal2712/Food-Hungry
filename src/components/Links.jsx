const Links = ({ item }) => {
    const { link } = item;
    // const imagesrc = require(`../assets/icons/${icon}`).default;

    return(
        <li>
            <a href={link} target="_blank" rel="noopener noreferrer">
                {/* <img src={imagesrc} alt="social icon"/> */}
            </a>
        </li>
    );
}

export default Links;