import {
  Button,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../actions/actions";

const Cart = ({ isOpen, onClose }) => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  console.log(items);

  const handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Product of Your Cart</DialogTitle>
      <DialogContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Remove Items</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <h4>Total Price: {totalPrice}</h4>
        </TableContainer>
        {/* {items.map(item=>(
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                ))} */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button color="secondary" variant="contained">
          Buy Now
        </Button>
      </DialogActions>
    </Dialog>

    // <div>
    //     <h2>Cart</h2>
    //     <ul>
    //         {items.map(item => (
    //             <li key={item.id}>
    //                 {item.name} - {item.price}
    //                 <Button onClick={() => handleDelete(item.id)}>Delete</Button>
    //             </li>
    //         ))}
    //     </ul>
    // </div>
  );
};

export default Cart;
