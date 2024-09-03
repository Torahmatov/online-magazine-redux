import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere
        doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi
        facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas
        provident ipsam, veritatis nostrum velit quos recusandae est mollitia
        esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem
        praesentium, doloremque distinctio nesciunt porro tempore quis eaque
        labore voluptatibus ea necessitatibus exercitationem tempora molestias.
        Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore
        sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint
        nemo totam dolorum! Reprehenderit delectus expedita a alias nam
        recusandae illo debitis repellat libero, quasi explicabo molestiae
        saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis
        excepturi harum numquam vel nihil? Ipsum
      </p>

      <h2>Our Products</h2>
      <div className="product-cards">
        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrRfms14nuCwdq9cpK6g5Ml4uXkEQDHonJWA&s" />
          <h3>Mens Clothing</h3>
        </div>
        <div className="product-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzLxHMyVb-yTMXGcut2A8m2_0oOth627w9g&s"
            alt="Womens Clothing"
          />
          <h3>Womens Clothing</h3>
        </div>
        <div className="product-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_0c9mAAA52FIAZw1FMXlkGcmgzdIEj-2lA&s"
            alt="Jewelry"
          />
          <h3>Caps</h3>
        </div>
        <div className="product-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_CMbFPF-Bq4QtMfHLPda1TsgCmAjh9lL8g&s"
            alt="Electronics"
          />
          <h3>Shoes</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
