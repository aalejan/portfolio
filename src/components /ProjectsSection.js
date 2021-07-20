import React from 'react'
import Card from './Card'
import CoinHub from '../images/CoinHub.png'
import styled from 'styled-components'
import StarWars from '../images/StarWars.png'
import MovieImg from '../images/Movie.png'
import TodoImg from '../images/TodoAPp.png'

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
            liveCode='https://amazing-boyd-47ffdc.netlify.app/Translator'
            />
            <Card
            description= 'Movie app the uses data from the TMDB API.Users are able to search for any movie they would like and popular movies are displayed to show what the public is watching. TMDB was used in order to retireive movie data.'
            img={MovieImg}
            title = 'Movie App'
            code = 'https://github.com/aalejan/MovieUI'
            liveCode='https://alejandromovies.com/'
            />
             <Card
            description= 'Todo app built on a decentralized cloud storage network. Users are able add and delete todos. Todo list data is stored on Skynet which uses decentralized storage.   '
            img={TodoImg}
            title = 'Decentralized Todo App'
            code = 'https://github.com/aalejan/todo-skapp'
            liveCode='https://000ctr4oin2ds0av7n1513752ss6bg5scjqn8snvhji7tqareunnr5g.siasky.net/'
            />
        
        </Projects>
       
    )
}

const Projects = styled.div`
/* color: white; */
color:#fcdf68 ;
/* min-height: 70vh; */
 width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 10rem;
    h2{
        padding-bottom: 0rem;
    position: relative;
    font-family: 'Lobster', cursive;
    font-size: 10rem;
    font-weight: 600;
    color:white;
    padding-top: 2rem;
}



@media (max-width: 760px){
    h2{
        font-size: 5rem;
    }
}
 `

export default ProjectsSection
