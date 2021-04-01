import React from 'react'
import styled from 'styled-components';


const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="#About">About</a></li>
      <li><a href="Projects">Projects</a></li>
      <li><a href="#Skills">Skills</a></li>
      <li><a href="#Contact">Contact</a></li>
    </Ul>
  )
}

const Ul = styled.ul`

  list-style: none;
  display:${({open}) => open ? 'flex' : 'none'};
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
z-index:2;
flex-flow: column nowrap;
background-color: #112443;
position: fixed;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
top: 0;
right: 0;
height: 100vh;
width: 300px;
padding-top: 3.5rem;
transition: transform 0.3s ease-in-out;
li {
  
  list-style: none;
  font-size: 5rem;
}
a{
    text-decoration: none;
    color:#ff3b3f;
}
}
`;

export default RightNav
