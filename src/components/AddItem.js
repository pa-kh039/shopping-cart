import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productName: "", productPrice: "" };
  }
  render() {
    return (
      <form
        className="row"
        onSubmit={(evnt) => {
          evnt.preventDefault();
          // console.log(this.props);
          this.props.addItem(
            this.state.productName,
            Number(this.state.productPrice)
          );
        }}
      >
        <div className="mb-3 col-6">
          <label htmlFor="inputName" className="form-label">
            Name of item to be added
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            // value={this.state.productName}
            onChange={(evnt) => {
              this.setState({ productName: evnt.currentTarget.value });
            }}
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="inputPrice" className="form-label">
            Price of item to be added
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            // value={this.state.productPrice}
            onChange={(evnt) => {
              this.setState({ productPrice: Number(evnt.currentTarget.value) });
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary col-1">
          Add Item
        </button>
      </form>
    );
  }
}

export default AddItem;

// export default function AddItem(props) {
//   return (
//     <form className='row'>
//         <div className="mb-3 col-6">
//           <label htmlFor="inputName" className="form-label">Name of item to be added</label>
//           <input type="text" className="form-control" id="inputName" aria-describedby="name" />
//         </div>
//         <div className="mb-3 col-6">
//           <label htmlFor="inputPrice" className="form-label">Price of item to be added</label>
//           <input type="number" className="form-control" id="price" />
//         </div>
//         <button type="submit" className="btn btn-primary col-1" onClick={()=>{props.AddItem()}}>Add Item</button>
//     </form>
//     // <div>
//     //     <input type="text" id="itemname" name="itemname" value="Name of item to be added" />
//     //     <input type="number" id="itemprice" name="itemprice" value="Price of item to be added" />
//     //     <button type="button" className="btn btn-dark" onClick={()=>{props.AddItem()}}>Add new item</button>
//     // </div>
//   );
// }
