import React, { useContext, memo } from "react";
import { FunctionsContext } from "../context/FunctionsContext";
import { Title, StyledBuyProduct, AccountOwner } from "./styled";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";

export const BuyProduct = memo(() => {
  const { products, purchaseProduct, account } = useContext(FunctionsContext);

  const handleClickButton = (event) => {
    purchaseProduct(event.target.name, event.target.value);
  };
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
              <TableRow key={key}>
                <TableCell>{product.id.toString()}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  {window.web3.utils.fromWei(product.price.toString(), "Ether")}
                  Eth
                </TableCell>
                <TableCell>
                  {account === product.owner ? (
                    <AccountOwner>{product.owner}</AccountOwner>
                  ) : (
                    <>{product.owner}</>
                  )}
                </TableCell>
                <TableCell>
                  {!product.purchased ? (
                    <Button
                      color="primary"
                      variant="contained"
                      value={product.price}
                      onClick={handleClickButton}
                    >
                      Buy
                    </Button>
                  ) : null}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledBuyProduct>
  );
});
