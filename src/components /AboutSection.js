import React from 'react'
import './AboutSection.css'
import styled from 'styled-components'

import { FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutSection = () => {
    return (
        <About id="About">
            <div className="description">
                <div className="title">
                    <Title>Hi, I'm Alex</Title>
                </div>
                <SubTitle className="subtitle">
                I am an aspiring Web Devloper.
                </SubTitle>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/alexander-alejandro/"><FaLinkedin size= '7rem' /></a>
                    <a href="https://github.com/aalejan"><FaGithub size= '7rem' /></a>
                </div>
            </div>
        </About>
    )
}

const About = styled.div `
    //background-color:#caebf2 ;
    padding-left: 1rem;
    background-color: #0b172a;
    color:white;
    width:100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .social-links{
        animation: title-entrance 1.5s ease-in-out;
        padding-top: 1rem;
        display: flex;
        justify-content: space-around;
        text-align: center;
        width: 30%;
        margin: auto;
    }
    a{
        color:white;
    }
    @media(max-width: 375px){
        
    }
`

const Title = styled.h2 `
font-size: 16rem;
 animation: title-entrance 1.5s ease-in-out;
 color:white;
 font-weight: 800;
 font-family: 'Lobster', cursive;
 @media (max-width: 375px){
    font-size: 10rem;
     padding-left:4rem;
 }
`

const SubTitle = styled.div `
    margin-top: 1rem;
    font-size: 4.2rem;
    color:white;
    animation: title-entrance 1.5s ease-in-out;
    animation-delay:0.2s;
    @media(max-width: 375px){
        font-size: 1.5rem;
        padding-left: 4rem;
        margin-top: .5rem;
    }
`


export default AboutSection
