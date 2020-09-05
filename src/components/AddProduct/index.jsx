import React, { useContext, memo, useState } from "react";
import { FunctionsContext } from "../context/FunctionsContext";
import {
  AddProductComponent,
  Form,
  Title,
  StyledTextField,
  StyledButton,
} from "./styled";

export const AddProduct = memo(() => {
  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");
  const { createProduct } = useContext(FunctionsContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = productName;
    const price = window.web3.utils.toWei(productPrice, "Ether");
    createProduct(name, price);
  };
  return (
    <AddProductComponent>
      <Title>Add Product</Title>
      <Form>
        <StyledTextField
          variant="outlined"
          placeholder="Name"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <StyledTextField
          variant="outlined"
          placeholder="Price"
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
        />

        <StyledButton
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        >
          Add Product
        </StyledButton>
      </Form>
    </AddProductComponent>
  );
});
