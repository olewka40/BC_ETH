import React, { useContext, memo, useState } from "react";
import { FunctionsContext } from "../context/FunctionsContext";
import { Title } from "./styled";
export const AddProduct = memo(() => {
  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");
  const { createProduct } = useContext(FunctionsContext);

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
  return (
    <>
      <Title>Add Product</Title>
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
    </>
  );
});
