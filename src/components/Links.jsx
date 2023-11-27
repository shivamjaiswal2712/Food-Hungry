const Links = ({ item }) => {
    const { link, icon } = item;
    const imagesrc = require(`../assets/icons/${icon}`);

    return(
        <li>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={imagesrc} alt="social icon" className="icons"/>
            </a>
        </li>
    );
}

export default Links;