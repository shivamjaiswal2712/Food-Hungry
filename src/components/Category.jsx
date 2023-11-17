import { Link } from "react-router-dom";
import React from "react";

const Category = ({ item }) => {
    const { id, categoryTitle, subtitle, description, img } = item;
    const imagesrc = require(`../assets/${img}`).default;
    const url = categoryTitle.toLowerCase();

    return (
        <article className="category-card" key={id}>
            <img src={imagesrc} alt="" />
            <div className="text-box">
                <h2 className="category-subtitle">{subtitle}</h2>
                <h1 className="category-name">{categoryTitle}</h1>
                <p className="category-description">{description}</p>
                <Link className="btn btn-secondary" to={`/${url}`}>
                    {" "}
                    See menu{" "}
                </Link>
            </div>
        </article>
    );
}

export default Category;