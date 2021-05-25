import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'


const Card = ({description, img, title, code, liveCode}) => {
    return (
        <div>
            <ProjectCard className="card">
                <img src={img} alt=""/>
                <div className="card-info">
                    <h4>{title}</h4>
                    <p>{description}</p>  
                </div>
                <motion.button id="liveCode" whileHover={{ scale: 1.2 }}><a href={liveCode}>Live Code</a></motion.button>
                <motion.button whileHover={{ scale: 1.2 }}><a href={code}>Source Code</a></motion.button>
            </ProjectCard>
        </div>
    )
}

const ProjectCard = styled.div`
background-color: white;
width: 300px;
border-style: none;
border-radius: 4px;
flex: 1 1 25rem;
font-size: 1.5rem;
box-shadow: 3px 3px 5px 6px #394151;
position: relative;
transition: transform 250ms ease-in-out;
height: 300px;
#liveCode{
    
    color: black;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    left: 30px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #f9b775;
}
button{
    color: black;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 30px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #f9b775;
}
button a{
    color:white;
}

img{
    position: absolute;
    width: 100%;
    height: 50%;
}
.card-info{
    position: absolute;
    top: 47%;
    padding: 1.2rem;
    h4{
        text-align: center;
        padding-bottom: 1rem;
        font-size: 1.75rem;
    }
}

&:hover{
    transform: scale(1.1);
}

@media (max-width: 620px){
    width: 15rem;
    height: 15rem;
    font-size: 8px;
   #liveCode{
        font-size:.5rem;
        padding: 2px;
        right: 10px;
        bottom: 5px;
   }
    button{
        font-size:.5rem;
        padding: 2px;
        right: 10px;
        bottom: 5px;
    }
    .card-info{
        padding-top: .5rem;
         h4{
             padding-bottom: .5rem;
        font-size: 1rem;
         }
    }
   
}


`

export default Card
