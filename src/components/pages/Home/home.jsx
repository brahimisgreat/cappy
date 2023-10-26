import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { CartContext } from "../../../context/context";

const Home = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const Globalstate = useContext(CartContext)
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate)


  return (
    <div className="home">
      {data.map((item, index) => {
       item.quantity=1 
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>$. {item.price}</h3>
            <button onClick={()=>dispatch({type:'ADD', payload:item})}>
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;