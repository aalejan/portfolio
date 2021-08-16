import React from 'react'
import styled from 'styled-components'
import { motion} from 'framer-motion'

import { FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutSection = () => {

    const titleAnim = {
        hidden: {opacity: 0},
        show: {opacity: 1}
    }

    const containerAnim = {
        hidden: {x : 100},
        show: {x : 0 , transition: {duration: 0.75, ease: 'easeOut', staggerChildren: 1, when: 'afterChildren'}}
    }

    return (
        <About id="About">
            <motion.div 
            variants={containerAnim}
            initial='hidden'
            animate='show'
             className="description"
             >
                <motion.h2 variants={titleAnim} className="title">
                    <Title>Hi, I'm Alex</Title>
                </motion.h2>
                    <SubTitle className="subtitle">
                        <motion.div variants={titleAnim}>
                        I am an aspiring Web Devloper.
                        </motion.div>
                    </SubTitle>
                <motion.div variants={titleAnim} className="social-links">
                    <a href="https://www.linkedin.com/in/alexander-alejandro/"><FaLinkedin size= '8rem' /></a>
                    <a href="https://github.com/aalejan"><FaGithub size= '8rem' /></a>
                </motion.div>
            </motion.div>
        </About>
    )
}

const About = styled.div `
margin: auto;
background: #b5e6f8;
    padding-left: 1rem;
   
    width:100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .social-links{
        padding-top: 2rem;
        display: flex;
        justify-content: space-around;
        text-align: center;
        width: 30%;
        margin: auto;
    }
    a{
        color:white;
        &:hover{
           transform: scale(1.2);
           transition: transform 150ms ease-in-out;
        }
    }

    @media (max-width: 768px){
        min-height: 80vh;
    }
`

const Title = styled.h2 `
font-size: 16rem;
 color:white;
 font-weight: 800;
 font-family: 'Lobster', cursive;
 @media (max-width: 736px){

     font-size: 8rem;
 }
`

const SubTitle = styled.div `
    margin-top: 1rem;
    font-size: 4.5rem;
    color:white;
    text-align: center;
    @media(max-width: 736px){
        font-size: 2.5rem;
        
    }
`


export default AboutSection
