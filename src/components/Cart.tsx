import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  quantityDecrease,
  quantityIncrease,
  removeFromCart,
} from "../store/slices/cartSlice";
import { TiPlusOutline, TiMinusOutline } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";

interface cartItem {
  image: string;
  price: number;
  id: number;
  title: string;
  quantity: number;
}

const Cart = () => {
  const { cart } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  console.log("cart", cart);


  // delete, incerase, decrese

  function deleteIt(id: number) {
    dispatch(removeFromCart(id));
  }
  function IncreaseIt(id: number) {
    dispatch(quantityIncrease(id));
  }
  function DecreaseIt(id: number) {
    dispatch(quantityDecrease(id));
  }


  // total price

  const TotalPrice = () => {
    let total: any = 0;
    cart.map((e: cartItem) => (total += e?.quantity * e.price));
    return Number(total).toFixed(2);
  };

  return (
    <CartDiv>
      <div className="cartTitle text-center text-6xl mt-7 font-['Shantell_Sans']">
        <h1>Your Cart</h1>
      </div>
      <div className="total flex justify-between my-[30px]">
        <p>Total :- $ {TotalPrice()}</p>
        <p>Total items :- {cart.length}</p>
      </div>

      {cart.length < 1 && <p>Cart is Empty</p>}

      {cart.map((el: cartItem, indx: number) => {
        const { image, price, title, id, quantity } = el;
        return (
          <div className="cardInnerDiv" key={indx}>
            <div className="item_info flex justify-between items-center">
              <div className="image">
                <img src={image} alt="" />
              </div>
              <div className="item flex ">
                <h1>{title}</h1>
              </div>
              <p>${price}</p>

              <div className="quantity flex">
                <button onClick={() => DecreaseIt(id)}> <TiMinusOutline /></button>
                <p>{quantity}</p>
                <button onClick={() => IncreaseIt(id)}> <TiPlusOutline /> </button>
              </div>
              <button
                onClick={() => {
                  deleteIt(id);
                }}
              >
                <MdDeleteOutline />
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </CartDiv>
  );
};

export default Cart;

const CartDiv = styled.div`
  width: 80vw;
  margin: auto;

  .cardInnerDiv {
    padding: 10px 20px;
  }

  .item_info {
    & .image{
      width: 100px;
    }

    .item{
      width: 300px;
      max-width: 300px;
    }
  }

  button {
    display: flex;
    align-items:center;
    gap: 10px;
    font-weight: 600;
    color:  #f6f6f6;
    background-color: #e46f62;
    border: 2px solid #f5b7b1;
    padding: 4px 15px;
    border-radius: 10px;
    transition: all 0.2s linear;

    &:hover {
      border: 2px solid #f5b7b1;
      transition: all 0.2s linear;
      color: #f5b7b1;
    }
  }

  .quantity{
    align-items: center;
    p{
      font-weight: 600;
      margin: 0px 10px;
    }
    
    button{
      background-color: #D6DBDF;
      color: #666666;
      border: none;
      transition: all 0.1s linear;


      &:hover{
        background-color: #F2F4F4;
        color: black;
        border: none;
        transition: all 0.1s linear;
      }
    }
  }
`;



  // useEffect(() => {
  // total = cart.reduce((a: any, b: any) => a + b.price, 0);
  //   console.log(total, "MMMMMM");
  // }, [cart, total]);
