import React from "react";

export default function Product(props) {
  // newly added -----------------------------------------
  // const IncrementItem = () => {
  //   this.setState({ clicks: this.state.clicks + 1 });
  // }

  // const ToggleClick = () => {
  //   this.setState({ show: !this.state.show });
  // }
  // ----------------------------------------------------
  return (
    <div className="row mb-3">
      <div className="col-5">
        <h2>{props.product.name}</h2>
        <span className="badge bg-warning">₹{props.product.price}</span>
        
        
      </div>
      <div className="col-4">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-secondary" 
          onClick={() => {
            props.decrementQuantity(props.index);
          }}>
            -
          </button>
          <button type="button" className="btn btn-light">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
          
        </div>
        <button type="button" className="btn btn-primary" onClick={() => {
              props.resetQuantity(props.index);
            }}>Reset Item</button>
        <button type="button" className="btn btn-danger" onClick={() => {
              props.removeItem(props.index);
            }}>Remove Item</button>
      </div>
      <div className="col-3">Cost: &nbsp;
        {props.product.quantity * props.product.price}
      </div>
    </div>
  );
}
