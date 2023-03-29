import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./store/slices/productSlice";
import Cart from "./components/Cart";
import styled from "styled-components";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [isCart, setIsCart] = useState(false);
  const { products } = useSelector((state: any) => state.products);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <ProductsDiv className="products gap-4">
          {products.map((el: any, indx: number) => {
            return <ProductCard key={indx + "ded"} el={el} />;
          })}
        </ProductsDiv>
        <Cart />
      </div>
      <Footer />
    </>
  );
}

export default App;

const ProductsDiv = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 1100px) {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 768px) {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 600px) {
  grid-template-columns: repeat(1, minmax(0, 1fr));
  }
   
`;
