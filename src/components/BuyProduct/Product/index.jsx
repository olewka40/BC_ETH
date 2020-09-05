import React, { useContext, useCallback } from "react";
import { AccountOwner } from "../styled";
import { TableCell, TableRow, Button } from "@material-ui/core";
import { FunctionsContext } from "../../context/FunctionsContext";

export const Product = ({ product }) => {
  const { purchaseProduct, account } = useContext(FunctionsContext);
  const handleClickButton = useCallback(() => {
    purchaseProduct(product.id, product.price);
  }, [product]);

  return (
    <TableRow>
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
        {account !== product.owner && (
          <Button
            color="primary"
            variant="contained"
            onClick={handleClickButton}
          >
            Buy
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};
