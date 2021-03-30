import React from 'react'
import styled from 'styled-components'


const Card = ({description, img, title, code}) => {
    return (
        <div>
            <ProjectCard className="card">
                <img src={img} alt=""/>
                <div className="card-info">
                    <h4>{title}</h4>
                    <p>{description}</p>  
                </div>
                <button><a href={code}>Source Code</a></button>
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
//box-shadow: 3px 3px 5px 6px #537661;
box-shadow: 3px 3px 5px 6px #394151;
position: relative;
transition: transform 250ms ease-in-out;
height: 300px;
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
    top: 50%;
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

@media (max-width: 320px){
    width: 15rem;
    height: 15rem;
    font-size: 8px;
   
    button{
        font-size:.3rem;
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
