import React, { memo } from "react";
import { AddProduct } from "./AddProduct";
import { BuyProduct } from "./BuyProduct";

const Main = memo(() => {
  return (
    <>
      <AddProduct />
      <BuyProduct />
    </>
  );
});

export default Main;
