import Lists from "../../components/Lists";
import Ingredient from "./Ingredient";
import NutritionFacts from "./NutritionFacts";

const Product = ({ product }) => {
    const { name, fullDescription, img, ingredientsList, nutritionalInfo } = product;
    const imagesrc = require(`../../assets/${img}`).default;

    return(
        <section className="product">
            <img className="product-img" src={imagesrc} alt="delicious food" />
            <section className="product-info">
                <div className="text-box">
                    <div className="title">
                        <h2 className="oleo">The</h2>
                        <h1 className="exo">{name}</h1>
                    </div>
                    <p>{fullDescription}</p>
                </div>

                <section className="ingredients">
                    <h2 className="oleo">Ingredient list</h2>
                    <Lists list={ingredientsList} Component={Ingredient} />
                </section>

                <section className="nutrition-facts">
                    <h2 className="oleo">Nutritional Information</h2>
                    <NutritionFacts nutritionalInfo={nutritionalInfo} />
                </section>
            </section>
        </section>
    );
}

export default Product;