import React, { useContext, memo } from "react";
import { FunctionsContext } from "../context/FunctionsContext";
import { Title, StyledBuyProduct } from "./styled";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Product } from "./Product";

export const BuyProduct = memo(() => {
  const { products } = useContext(FunctionsContext);

  return (
    <StyledBuyProduct>
      <Title>Buy Product</Title>
      <TableContainer component={Paper}>
        <Table>
          <TableRow>
            <TableCell align="left">#</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Owner</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>

          <TableBody>
            {products.map((product, key) => (
              <Product key={key} product={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledBuyProduct>
  );
});
