import Category from "../../components/Category";
import Lists from "../../components/Lists";
import Hero from "./Hero";
import { productData } from "../../data/productData";

const Home = () => {
    return (
        <section className="home">
            <Hero />
            <div className="categories">
                <Lists list={productData} Component={Category} />
            </div>
        </section>
    );
}

export default Home;