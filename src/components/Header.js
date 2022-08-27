import React from "react";
import style from './style.css';

import {
  Navbar,
  Container,
  FormControl,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 100 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            placeholder="Search a product"
            style={{ width: 500 }}
            className="m auto"

            onChange={(e) => productDispatch({

              type:"FILTER_BY_SEARCH",
              payload:e.target.value,
            })
          }
          />
        </Navbar.Text>

        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 150 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.namne}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.namne}</span>
                        <span> ${prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type:"REMOVE_FROM _CART",
                            payload:prod,
                          })
                        }
                      />
                    </span>
                  ))}

                  <NavLink to="/cart">

                  <Button  style={{width:'95%',margin:'0 10px'}}>Go To Cart</Button>
                  </NavLink>
                 
                </>
              ) : (
                <span style={{ padding: 15 }}>Cart is empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
