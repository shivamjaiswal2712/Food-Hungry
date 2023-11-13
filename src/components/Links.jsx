const Links = (item) => {
    const { icon, link } = item;
    const imagesrc = require(``).default;

    return(
        <li>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={imagesrc} alt="social-icon"/>
            </a>
        </li>
    );
}

export default Links;