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
                    <Burger />
                </StyledNav>
                
        </div>
    )
}

const StyledNav = styled.nav`
    top: 0;
    width: 100%;
    background-color: black;
    min-height: 10vh;
   display:flex;
   justify-content: flex-end;
`

const NavItems = styled.ul `
    //animation: title-entrance 1.5s ease-in-out;
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-size: 2.6rem;
    padding: 2rem 0rem;
    padding-right: 2rem;
    width: 50%;
    font-weight: 600;
   
    


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
    color:#ff3b3f;
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
