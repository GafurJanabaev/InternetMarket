import { Card } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./Products.scss";
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
      axios.get("https://fakestoreapi.com/products").then((res) => {
        setData(res.data);
        setFilter(res.data);
        setLoading(false);
        console.log(res.data);
      });
    }
  , []);
  {
  }

  const Loading = () => {
    return (
      <div className="Loading">
        <h1>Loading...</h1>
      </div>
    );
  };

  const filterProduct = (item) => {
    const updateList = data.filter((x) => x.category === item);
    setFilter(updateList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="showPro">
          <button onClick={() => setFilter(data)}>All</button>
          <button onClick={() => filterProduct("men's clothing")}>
            Men's Clothing
          </button>
          <button onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button onClick={() => filterProduct("jewelery")}>Jewelery </button>
          <button onClick={() => filterProduct("electronics")}>
            Electronic
          </button>
        </div>
        <div className="card-box">
          {filter.map((item) => {
            return (
              <Card className="Card" key={item.id}>
                <div className="card">
                  <img src={item.image} alt="Photo" />
                  <div>
                    <h5>{item.title.substring(0, 15)}...</h5>
                    <p>${item.price}</p>
                    <Link className="Link">Buy Now</Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="row">
        <h1>Latest Products</h1>
        <br /> <hr />
      </div>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
