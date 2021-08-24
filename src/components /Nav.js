import React from 'react'
import './Nav.css'
import styled from 'styled-components'
import Burger from './Burger';
import {motion} from 'framer-motion'

const Nav = () => {


const navAnimation = {
    hidden: {opacity : 0},
    show: {opacity : 1, transition: {duration: 2}}
}


    return (
        <div >
                <StyledNav className="navbar">
                    <NavItems  className="active">
                        <motion.li variants={navAnimation} initial='hidden' animate='show'>
                        <li className="nav-item"><NavLink href="#About">About</NavLink></li>
                        </motion.li>
                        <motion.li variants={navAnimation} initial='hidden' animate='show'>
                        <li className="nav-item"><NavLink href="#Projects">Projects</NavLink></li>
                        </motion.li>
                        <motion.li variants={navAnimation} initial='hidden' animate='show'>
                        <li className="nav-item"><NavLink href="#Skills">Skills</NavLink></li>
                        </motion.li>
                        <motion.li variants={navAnimation} initial='hidden' animate='show'>
                        <li className="nav-item"><NavLink href="#Contact">Contact</NavLink></li>
                        </motion.li>             
                    </NavItems>
                </StyledNav>
                <Burger />
        </div>
    )
}

const StyledNav = styled.nav`
    top: 0;
    width: 100%;
    background-color: white;
    min-height: 10vh;
   display:flex;
   justify-content: flex-end;
   
   z-index: 1000;
   @media (max-width: 768px){
       display: none;
   }
`

const NavItems = styled.ul `
    display: flex;
    list-style: none;
    font-size: 2rem;
    padding: 2rem 0rem;
    padding-right: 2rem;
    width: 40%;
    font-weight: 600;
   li{
       padding-right: 3rem;
       padding-left: 1rem;
   }
    


@media(max-width:826px){
       li{
           font-size: 1.3rem;
       } 
    }
   
    @media (max-width: 768px){
        display: none;
    }

 @media(max-width: 414px){
       li{
           font-size: 1rem;
       } 
    }
    

    @media(max-width: 360px){
        li{
            font-size: .6rem;
        }
    }
`

const NavLink = styled.a`
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    color: #494949;
    position: relative;
    &:after{
        content:'';
        position:absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background:currentColor;
        transform: scaleX(0);
        transform-origin:right;
        transition: transform 350ms ease-in-out;
    }
    &:hover::after{
        transform: scaleX(1);
    }
`



export default Nav
