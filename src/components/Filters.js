import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import style from "./style.css";

const Filters = () => {
 

  const {
    productState: { byStock, byFastDelivery, byRating,sort,searchQuery },
    productDispatch,
  } = CartState();
 
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}

          onChange={(i) => productDispatch({

            type:"SORT_BY_PRICE",
            payload:"lowToHigh",
          })}

          checked={sort==="lowToHigh" ? true :false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}

          onChange={(i) => productDispatch({

            type:"SORT_BY_PRICE",
            payload:"highToLow",
          })}

          checked={sort==="highToLow" ? true :false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </span>

      <span>
        <label style={{ paddingRight: 10 }}>Rating :</label>
        <Rating
          rating={byRating}
          onClick={(i) => productDispatch({

            type:"FILTER_BY_RATING",
            payload:i+1,
          })}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button variant="light"
      
      onClick={() => productDispatch({

        type:"CLEAR_FILTERS",
      })
    }
      
      >Clear Filters</Button>
    </div>
  );
};

export default Filters;
