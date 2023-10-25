import { useContext, useEffect, useState } from "react";

import axios from "axios";

const Homepage = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="home">
      {data.map((item, index) => {
        
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>$. {item.price}</h3>
            <button >
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;