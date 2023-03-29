import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, closeCart, removeFromCart } from "../store/slices/cartSlice";

const ProductCard = ({ el }: any) => {
  const { cart } = useSelector((state:any)=> state.cart)
  const dispatch = useDispatch();

  const ToCart = (el: any)=>{
    dispatch(addToCart(el))
  }

  const removeIt = (id:number)=>{
    dispatch(removeFromCart(id))
  }

  const isInCart = (cart.find((item:any)=> item.id === el.id)) ? true : false;

  return (
    <ProductCardDiv>
      <div className="cardTop">
        <div className="image">
          <img src={el.image} alt="" />
        </div>
        <div className="detail">
          <h1 className="text-[#9575CD] font-semibold mt-3">{el.title}</h1>
          
        </div>
      </div>
      <div className="cardButtons flex">
      <p className="mt-2 mb-5 font-medium font-[Quicksand]">${el.price}</p>
        {
          !isInCart ? (
            <button
            onClick={ ()=>{ToCart(el); dispatch(closeCart(null))}}
              className="rounded-md border-[1px] border-[#7986CB] hover: px-[20px] py-[2px] hover:bg-[#7986CB] hover:border-[white] hover:text-slate-100 transition-all duration-200"
            > Add
        </button>
          ): (
            <button
            onClick={ ()=>{removeIt(el.id); dispatch(closeCart(null))}}
              className="rounded-md border-[1px] border-[#7986CB] hover: px-[20px] py-[2px] hover:bg-[#7986CB] hover:border-[white] hover:text-slate-100 transition-all duration-200"
            > Remove
        </button>
          )
        }
      </div>
    </ProductCardDiv>
  );
};

export default ProductCard;

const ProductCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px 20px;
  border: 1px solid #ececec;
  border-radius: 15px;

  .cardTop .image img {
    margin: auto;
    display: block;
    width: fit-content;
    height: 120px;
  }

    .cardButtons {
      /* margin-left: auto; */
      justify-content: space-between;
      align-items: center;
    }

`;
