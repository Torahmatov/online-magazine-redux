
import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
function Home() {
  const allProducts = Object.values(products).flat();

  return (
    <div>
      <div className="home-container">
        <h1>Welcome to Our Online Store</h1>
      </div>

     
      <div className="categories">
        <Link to="/product/mens" className="category-link">
          Mens
        </Link>
        <Link to="/product/womens" className="category-link">
          Womens
        </Link>
        <Link to="/product/caps" className="category-link">
          Caps
        </Link>
        <Link to="/product/shoes" className="category-link">
          Shoes
        </Link>
      </div>

   
      <div className="product-grid">
        {allProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
