import React from 'react'
import Card from './Card'
import CoinHub from '../images/CoinHub.png'
import styled from 'styled-components'
import StarWars from '../images/StarWars.png'

const ProjectsSection = () => {
    return (
        <Projects id="Projects">
        <h2>Projects</h2>
        
            <Card 
            description="Access to over 100 different crypto currencies and some exchanges to trade crypto on!" 
            img={CoinHub} 
            title="CoinHub" 
            code="https://github.com/aalejan/crypto-app"
            liveCode="https://aalejan.github.io/crypto-app/"
            />
            <Card 
            description="This App allows you to enter any text you want and have it translated into the language of your favorite Star Wars characters!!" 
            img={StarWars} 
            title="Star Wars Translator"
            code="https://github.com/aalejan/Star-Wars-Translator-App"
            liveCode=''
            />
        
        </Projects>
       
    )
}

const Projects = styled.div`
color: white;
min-height: 70vh;
 width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
/* h2{
    font-family: 'Lobster', cursive;
    color:white;

}
padding-bottom:2rem;
//background-color: #bfefd2;
background-color: #0b172a;
    h2{
    font-size: 8rem;
    font-weight: 500;
    text-align: center; 
    } */

`

// const Cards = styled.div`
// width: 60%;
// margin: auto;
// padding-top: 3rem;
// padding-bottom: 3rem;
// display: flex;
// justify-content: space-around;

// `

export default ProjectsSection