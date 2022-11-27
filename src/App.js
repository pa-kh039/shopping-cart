// import logo from "./logo.svg";
import React , { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import AddItem from "./components/AddItem.js";
import Footer from "./components/Footer.js";



function App() {
  const products = [
    {
      price: 99999,
      name: "Apple Macbook Pro",
      quantity: 0,
    },
    {
      price: 67899,
      name: "Dell Inspiron 15",
      quantity: 0, 
    }
  ];



  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);



  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity += 1;
    let newTotalAmount= totalAmount + newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
    // console.log(products,'Hello', productList[index].quantity);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    if (newProductList[index].quantity >0)
    {
      newProductList[index].quantity -= 1;
      let newTotalAmount= totalAmount - newProductList[index].price;
      setTotalAmount(newTotalAmount);
      setProductList(newProductList);
    };
    // instead of if else u could also use ternary operator:
    // newProductList[index].quantity >0 ? newProductList[index].quantity -= 1 : newProductList[index].quantity =0;
    // setProductList(newProductList);
    
    // console.log(products,'Hello', productList[index].quantity);
  };
  const resetQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount= totalAmount - newProductList[index].price*newProductList[index].quantity;
    newProductList[index].quantity = 0;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
    // console.log(products,'Hello', productList[index].quantity);
  };
  const removeItem = (index) => {
    // let newProductList = [...productList];
    // newProductList[index].quantity = 0;
    let newProductList = [...productList];
    let newTotalAmount= totalAmount - newProductList[index].price*newProductList[index].quantity;
    setTotalAmount(newTotalAmount);
    setProductList(productList=>productList.filter(product => {return product!==productList[index];}));
    // newProductList.splice(index,1); //this function helps remove elements from array
    // console.log(products,'Hello', productList[index].quantity);
  };
  const resetCart = () => {
    // let newProductList = [...productList];
    // newProductList[index].quantity = 0;
    // let newProductList = [...productList];
    // let newTotalAmount= totalAmount - newProductList[index].price*newProductList[index].quantity;
    setTotalAmount(0);
    setProductList(productList=>productList.filter(product => {return product===null;}));
    // console.log(products,'Hello', productList[index].quantity);
  };
  const addItem = (name,price) => {
    let newProductList = [...productList];
    newProductList.push({name:name,quantity:0,price:price})
    setProductList(newProductList);
    console.log(name,price);
    // console.log(products,'Hello', productList[index].quantity);
  };
  

  
  return (
    <>
      <Navbar productList={productList}/>
      <main className="container mt-5">
        <ProductList
          // productList={products}
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          resetQuantity={resetQuantity}
          removeItem={removeItem}
        />
      <AddItem addItem={addItem}/>
      </main>
      <Footer totalAmount={totalAmount} resetCart={resetCart}/>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >, productList[index].quantity
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
