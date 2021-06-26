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
                <SkillsTitle>My Skills</SkillsTitle>
            </div>
            <Skills>
                <div >
                    <img src={ReactIcon} alt=""/>
                </div>
                <div >
                    <img src={HTMLIcon} alt=""/>
                </div>
                <div >
                    <img src={CSSLogo} alt=""/>
                </div>
                <div >
                    <img src={JSLogo} alt=""/>
                </div>
                <div >
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
    font-size: 8rem;
    font-weight: 500;
    text-align: center;
    
`
const Skills = styled.div`

flex: 1 1;
  width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
   padding-top: 6rem;
/* height: 100%;
padding-top: 4rem;
padding-bottom:6rem;
margin: auto;
width: 90%;
justify-content: space-between;
display:flex;
flex-wrap: wrap; */
img{ 
    height: 85%;
    display: block;
    width: 90%;
}
div{
    width: 30%;
    margin-bottom: 7rem;
    cursor: pointer; 
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
