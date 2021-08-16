import React, {useState} from 'react'
import styled from 'styled-components';
import RightNav from './RightNav';



const Burger = () => {
 const [open, setOpen] = useState(false)

    return (
        <>
         <StyledBurger open={open} onClick={() =>setOpen(!open)}>
            <div></div> 
            <div></div>    
            <div></div>
        </StyledBurger> 
        <RightNav open={open} />
        </>
    )
}

const StyledBurger = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 3rem;
    height: 0.5rem;
    background-color: ${({ open }) => open ? '#ccc' : 'black'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;


export default Burger
