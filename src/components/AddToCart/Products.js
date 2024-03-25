import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products?offset=10&limit=10");
        console.log(response.data)
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="productConatiner">
      <div className="products">
        <div className="container">
          <div className="row">
            {products.map((item) => {
              item.quantity = 1;
              return (
                <div key={item.id} className="col-md-4 d-flex justify-content-center mt-4">
                  <div className="product">
                    <img src={item.images} alt="cart" />
                    <h4>{item.title}</h4>
                    <p>Pkr. {item.price}</p>
                    <button onClick={() => dispatch({ type: 'ADD', payload: item })}>
                      add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
