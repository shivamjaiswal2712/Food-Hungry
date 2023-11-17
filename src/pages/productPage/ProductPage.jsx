import { useParams, useNavigate } from "react-router-dom";
import { productData } from "../../data/productData";
import Button from "../../components/Button";
import Product  from "./Product";

const ProductPage = () => {
    const navigate = useNavigate();
    const url = useParams();
    const category = url.category;
    const productId = url.id.toLowerCase();

    const getcategory = () => {
        const products = productData.filter((item) => {
            return item.categoryTitle.toLowerCase() === category.toLowerCase();
        })[0].product;
        return products;
    }

    const getProduct = () => {
        const productToDisplay = getcategory().filter((item) => {
            return item.id === productId;
        })[0];
        return productToDisplay;
    }

    const product = getProduct();

    return(
        <section className="product-page">
            <Product key={product.id} product={product} />
            <Button onClick={() => navigate.goBack()} theme={"primary"}>
                Return to {category}
            </Button>
        </section>
    );
}

export default ProductPage;