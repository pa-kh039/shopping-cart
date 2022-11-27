import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  // let counter=0;
  if (props.productList.length === 0)
  {
      return (<h1>Your Cart is Empty....</h1>);
  };
  return(
    props.productList.map((product, i) => {
      // counter+=1;
      return (<Product product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} resetQuantity={props.resetQuantity} removeItem={props.removeItem} index={i}/>);
    })
  );
  // console.log("Total products:",counter);
  // to make each componenet returned unique, you have to provide a key to the component, in this case we have passed the index of the element in the array as a key
  
}
