import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import {Link} from 'react-scroll';
import BurgerMenu from './BurgerMenu';

const StyledBurger = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    z-index: 100;

    div{
        width: 100%;
        height: 15px;
        background-color: white;
        transform-origin: 8px;
        border-radius: 10px;
        transition-duration: 0.3s;
        z-index: 100;

        &:nth-child(1){
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};

        }
        &:nth-child(2){
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
            display: ${({ open }) => open ? 'none' : 'block'}
        }
        &:nth-child(3){
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'}
        }
    }
    
    @media screen and (max-width: 768px){
        width: 60px;
        height: 60px;

        div{
            height: 10px;
        }
    }
    @media screen and (max-width: 700px){
        width: 40px;
        height: 40px;
        position: fixed;
        right: 22px;


        div{
            height: 6px;
            transform-origin: 6px;
        }
    }
`;


const Burger = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <BurgerMenu open={open} setOpen={setOpen}/>

        </>
    );
}

export default Burger;