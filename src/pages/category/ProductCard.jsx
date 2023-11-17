import { useLocation, useNavigate } from "react-router-dom";

const ProductCard = (item) => {
    const { id, name, shortDescription, img } = item;
    const imageSrc = require(`../../assets/menu-10.jpg`).default;
    const navigate = useNavigate();
    const category = useLocation().pathname.toLowerCase();
    const url = `../../${category}/${id}`;

    return(
        <li>
            <article className="product-card">
                <button onClick={() => navigate.push(url)}>
                    <img className="product-img" src={imageSrc} alt="delicious food" />
                    <div className="text-box">
                        <h3 className="product-the">The</h3>
                        <h2 className="product-name">{name}</h2>
                        <p className="category-short-description">{shortDescription}</p>
                    </div>
                </button>
            </article>
        </li>
    );
}

export default ProductCard;