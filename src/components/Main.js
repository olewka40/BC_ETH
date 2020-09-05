import React, { useContext, useState } from "react";
import { FunctionsContext } from "./context/FunctionsContext";

const Main = () => {
  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");
  const { products, createProduct, purchaseProduct } = useContext(
    FunctionsContext
  );

  const handleProductPrice = (input) => {
    setProductPrice(input);
    console.log(input);
  };
  const handleProductName = (input) => {
    setProductName(input);
    console.log(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = productName.value;
    const price = window.web3.utils.toWei(
      productPrice.value.toString(),
      "Ether"
    );
    createProduct(name, price);
  };

  const handleClickButton = (event) => {
    purchaseProduct(event.target.name, event.target.value);
  };
  return (
    <div id="content">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mr-sm-2">
          <input
            id="productName"
            type="text"
            ref={handleProductName}
            className="form-control"
            placeholder="Product Name"
            required
          />
        </div>
        <div className="form-group mr-sm-2">
          <input
            id="productPrice"
            type="text"
            ref={handleProductPrice}
            className="form-control"
            placeholder="Product Price"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
      <h2>Buy Product</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Owner</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody id="productList">
          {products.map((product, key) => {
            return (
              <tr key={key}>
                <th scope="row">{product.id.toString()}</th>
                <td>{product.name}</td>
                <td>
                  {window.web3.utils.fromWei(product.price.toString(), "Ether")}
                  Eth
                </td>
                <td>{product.owner}</td>
                <td>
                  {!product.purchased ? (
                    <button
                      name={product.id}
                      value={product.price}
                      onClick={handleClickButton}
                    >
                      Buy
                    </button>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
