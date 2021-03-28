import React from 'react'
import AboutSection from '../components/AboutSection'
import ContactUs from '../components/Contact'
import Nav from '../components/Nav'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'

const AboutPage = () => {
    return (
        <div>
            <Nav />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactUs />
        </div>
    )
}

export default AboutPage
