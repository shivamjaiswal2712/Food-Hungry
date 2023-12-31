import React from "react";
import { Link } from "react-router-dom";

const Category = ({ item }) => {
	const { id, categoryTitle, subtitle, description, img } = item;
	const imageSrc = require(`../assets/categories/${img}`);
	const url = categoryTitle.toLowerCase();
	return (
	<article className="category-card" key={id}>
				<img src={imageSrc} alt="delicious food" />
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