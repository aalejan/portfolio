import React from 'react'
import Card from './Card'
import CoinHub from '../images/CoinHub.png'
import styled from 'styled-components'
import StarWars from '../images/StarWars.png'
import MovieImg from '../images/Movie.png'
import TodoImg from '../images/TodoAPp.png'
import NarutoImg from '../images/Naruto.png'

const ProjectsSection = () => {
    return (
        <Projects id="Projects">
        <h2>Projects</h2>
        
            <Card 
            description="Coinhub allows the user to explore over 200 different crypto currencies. " 
            img={CoinHub} 
            title="CoinHub" 
            code="https://github.com/aalejan/crypto-app"
            liveCode="https://aalejan.github.io/crypto-app/"
            />
            <Card
            description= 'Movie app the uses data from the TMDB API. Users are able to search for any movie they would like and popular movies are displayed to show what the public is watching. Each movie has a button option that will add the movie to the users watchlist. TMDB was used in order to retireive movie data. This app uses HTML, CSS, and JavaScript.'
            img={MovieImg}
            title = 'Movie App'
            code = 'https://github.com/aalejan/MovieUI'
            liveCode='https://alejandromovies.com/'
            />
            <Card
            description = 'Access to Naruto characters through this RESTful API created using Express, MySQL, HTML, CSS, and javaScript. This app utilizes a SQL database that allows the user to retireve data and use it in their own applications. Migrations are utilized to create tables and populate the tables with data of characters, villages, techniques, and powerstats.'
            title='Naruto API'
            img={NarutoImg}
            code = 'https://github.com/aalejan/naruto-api1/tree/main'
            liveCode='https://naruto-database1.herokuapp.com/'
            />
             <Card
            description= 'Todo app built on a decentralized cloud storage network. Users are able add and delete todos. Todo list data is stored on Skynet which uses decentralized storage. In order to use the app the user must create a Skynet account. This will allow the user to store their todos and load them onto the page.'
            img={TodoImg}
            title = 'Decentralized Todo App'
            code = 'https://github.com/aalejan/todo-skapp'
            liveCode='https://000ctr4oin2ds0av7n1513752ss6bg5scjqn8snvhji7tqareunnr5g.siasky.net/'
            />
        
        </Projects>
       
    )
}

const Projects = styled.div`
 background-color: #c2e4f1;
 border-radius: 10px;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

/* color: white; */
color:#fcdf68 ;
/* min-height: 70vh; */
 width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    flex-direction: column;
    align-items: center;
    h2{
        font-size: 6rem;
    }
}
 `

export default ProjectsSection
