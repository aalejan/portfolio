import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import './SkillsSection.css'
import ReactIcon from '../images/ReactIcon.png'
import HTMLIcon from '../images/HTMLlogo.svg.png'
import CSSLogo from '../images/CSSLogo.png'
import JSLogo from '../images/JSLogo.png'
import SQLogo from '../images/SQLogo.png'
import BootstrapImg from '../images/Bootstrap.png'


const SkillsSection = () => {
    return (
        <div  id="Skills">
            <div className="title">
                <SkillsTitle>Skills</SkillsTitle>
            </div>
            <Skills>
                <motion.div whileHover={{ scale: 1.3 }} className="skill">
                    <img src={ReactIcon} alt=""/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.3 }}>
                    <img src={HTMLIcon} alt=""/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.3 }}>
                    <img src={CSSLogo} alt=""/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.3 }}>
                    <img src={JSLogo} alt=""/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.3 }}>
                    <img src={SQLogo} alt=""/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.3 }}>
                    <img src={BootstrapImg} alt=""/>
                </motion.div>
           </Skills>
        </div>
    )
}


const SkillsTitle = styled.h2 `
    font-family: 'Lobster', cursive;
    font-size: 8rem;
    font-weight: 500;
    text-align: center;
`
const Skills = styled.div`
padding-top: 4rem;
padding-bottom:6rem;
margin: auto;
width: 68%;
justify-content: space-between;
display:flex;
flex-wrap: wrap;
img{
    height: 14rem;
    border-radius:10px;
}
@media(max-width:375px){
    img{
        height:4rem;
        width: 5rem;
    }
    width: 80%;
}
@media(max-width:414px){
    img{
        height:50px;
    }
    width: 90%;
}

`

export default SkillsSection
