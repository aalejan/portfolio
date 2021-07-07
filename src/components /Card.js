import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'


const Card = ({description, img, title, code, liveCode}) => {
    return (
        
            <ProjectCard className="card">
                <img src={img} alt=""/>
                <div id="overlay" className="card-info">
                    <h2>{title}</h2>
                    <p className='description'>{description}</p>
                    <div className="buttons">
                        <motion.button id="liveCode" whileHover={{ scale: 1.1 }}><a href={liveCode}>Live Code</a></motion.button>
                        <motion.button whileHover={{ scale: 1.1 }}><a href={code}>Source Code</a></motion.button>
                    </div>
                </div>
            </ProjectCard>
        
    )
}

const ProjectCard = styled.div`
   margin-top: 4rem;
    position: relative;
    width: 40%;
    height: 100%;
    cursor: pointer;
img{
  border-radius: 4px;
    display: block;
    width: 100%;
}
#overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow:auto;
    opacity: 0;
    transition: opacity 0.25s;
}
#overlay > *{
    transform: translateY(2rem);
     transition: transform 0.25s;
}
#overlay:hover{
    opacity: 1;
}
#overlay .description{
    font-size: 1.5rem;
    line-height: 1.5;
}

#overlay p{
margin-top: 1.5rem;
font-size: 1.5rem;
}

#overlay h2{
    width: 90%;
    text-align: center;
    font-size: 4.5rem;
}
.buttons{
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: space-between;
}

 #overlay button{
     margin-top: 1.5rem;
    cursor: pointer;
    padding: .3em .6em;
    background: #ffe989;
    font-size: 1.5rem;
    font-weight: 500;
    border: none;
    border-radius: 3px;
}

#overlay button:hover{
    background:#ffdc42;
    transition: 250ms ease-in;
}

button a:visited{
    color: black;
}

@media (max-width: 768px){
    #overlay h2{
        font-size: 2rem;
    }
    #overlay .description{
        font-size: 1rem;
    }
    #overlay button{
        font-size: 1rem;
    }
}

`

export default Card
