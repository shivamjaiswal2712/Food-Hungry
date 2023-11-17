import { useParams } from "react-router-dom";
import Category from "../../components/Category";
import Lists from "../../components/Lists";
import { productData } from "../../data/productData";
import ProductCard from "./ProductCard";

const CategoryPage = () => {
    const category = useParams();
    const selectedCategory = productData.filter((item) => {
        return item.categoryTitle.toLowerCase() === category.category.toLowerCase();
    })[0];

    return(
        <section className={category.category}>
            <Category item={selectedCategory} />
            <div className="product-list">
                <Lists list={selectedCategory.products} Component={ProductCard} />
            </div>
        </section>
    );
}

export default CategoryPage;