import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/context";

export default function Cart() {
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div>
      hello
      {state.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>{item.quantity}</p>
            <p>{item.quantity*item.price}</p>
            <div>
              <button onClick={()=>dispatch({type:'INCREASE',payload:item})}>+</button>
              <p>{item.quantity}</p>
              <button onClick={()=>{
                if(item.quantity > 1){
                  dispatch({type:'DECREASE', payload:item})
                }else{
                  dispatch({type: "REMOVE", payload:item})
                }
              }}>-</button>
            </div>
            <h2 onClick={()=>dispatch({type:"REMOVE", payload:item})}>x</h2>
          </div>
        );
      })}
      {state.length>0 && <div>
        <h2>{total}</h2>
      </div>}
    </div>
  );
}
