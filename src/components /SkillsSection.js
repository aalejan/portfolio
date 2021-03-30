import React from 'react'
import styled from 'styled-components'
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
                <div className="skill">
                    <img src={ReactIcon} alt=""/>
                </div>
                <div>
                    <img src={HTMLIcon} alt=""/>
                </div>
                <div>
                    <img src={CSSLogo} alt=""/>
                </div>
                <div>
                    <img src={JSLogo} alt=""/>
                </div>
                <div>
                    <img src={SQLogo} alt=""/>
                </div>
                <div>
                    <img src={BootstrapImg} alt=""/>
                </div>
           </Skills>
        </div>
    )
}


const SkillsTitle = styled.h2 `
font-family: 'Lobster', cursive;
    font-size: 6rem;
    font-weight: 500;
    text-align: center;
`
const Skills = styled.div`
padding-top: 4rem;
padding-bottom:4rem;
margin: auto;
width: 60%;
justify-content: space-between;
display:flex;
flex-wrap: wrap;
img{
    height: 101px;
    border-radius:10px;
}
@media(max-width:375px){
    img{
        height:40px;
        width: 50px;
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
