import React from 'react'
import Helmet from 'react-helmet'
import Menu from '../components/Menu'
import ResumeContact from '../components/resume/ResumeContact'
import ResumeAbout from '../components/resume/ResumeAbout'
import ResumePersonal from '../components/resume/ResumePersonal'
import ResumeSkills from '../components/resume/ResumeSkills'
import ResumeExperiences from '../components/resume/ResumeExperiences'
import ResumeEducation from '../components/resume/ResumeEducation'
import ResumeProjects from '../components/resume/ResumeProjects'
import ResumeHobby from '../components/resume/ResumeHobby'
import { rhythm } from '../utils/typography'
import '../scss/resume.scss'

const Resume = () => {
  return (
    <div
      style={{
        maxWidth: rhythm(41),
        padding: `0 ${rhythm(0.5)}`,
        margin: '0 auto',
      }}
    >
      <Menu />
      <Helmet title={'Resume - Rafiqul Hasan'} />
      <div className="ball-right" />
      <header>
        <div className="header-flex-wrapper js-header">
          <ResumePersonal />
          <ResumeContact />
        </div>
      </header>

      <ResumeAbout />

      <div className="experiences">
        <div className="experiences-wrapper">
          <div className="left-side">
            <ResumeProjects />
            <ResumeSkills />
            <ResumeEducation />
          </div>

          <div className="right-side">
            <ResumeExperiences />
          </div>
        </div>
      </div>

      <ResumeHobby />
      <div className="bottom-ball-wrapper">
        <div className="ball-bottom" />
      </div>
    </div>
  )
}

export default Resume
