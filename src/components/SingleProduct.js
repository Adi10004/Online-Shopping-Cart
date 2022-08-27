import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import style from "./style.css";

import { CartState } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart)

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.namne} />
        <Card.Body>
          <Card.Title>{prod.namne}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span> ${prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 Days Delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>

          {cart.some((p) => p.id === prod.id) ? (
          <Button  onClick={()=>{

            dispatch({

              type:"REMOVE_FROM_CART",
              payload:prod
            })
          }} 
            
            
            variant="danger">Remove from Cart</Button>
          ) : (
            <Button  onClick={()=>{

              dispatch({

                type:"ADD_TO_CART",
                payload:prod
              })
            }} 
            
            variant="success" disabled={!prod.inStock}>
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
