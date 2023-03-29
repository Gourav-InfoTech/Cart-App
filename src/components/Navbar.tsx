import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TfiShoppingCartFull } from "react-icons/tfi"
import { toggleCart } from '../store/slices/cartSlice';

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <Nav>
            <div className="logo">
                <img src="/Cartit.png" alt="Logo" />
            </div>
            <div onClick={()=> {dispatch(toggleCart(null))}} className="cartIcon">
                <TfiShoppingCartFull />
            </div>
        </Nav>
    )
}

export default Navbar;

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 20px;

    .cartIcon{
        font-size: 30px;
    }
`