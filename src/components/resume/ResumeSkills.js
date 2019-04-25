import React from 'react'

const ResumeSkills = () => (
  <div className="contents resume-card">
    <h4 className="title skills">Skills & expertise</h4>
    <div className="content">
      <span className="sub-title">Back End</span>
      <span className="text text-column">
        <span className="text-left">
          <code>Python</code>
          <code>Django</code>
          <code>DRF</code>
          <code>Flask</code>
        </span>
        <span className="text-right">
          <code>Sanic</code>
          <code>Celery</code>
          <code>Go</code>
          <code>NodeJS</code>
        </span>
      </span>
    </div>
    <div className="content">
      <span className="sub-title">Front End</span>
      <span className="text text-column">
        <span className="text-left">
          <code>HTML5</code>
          <code>CSS3</code>
          <code>SASS</code>
        </span>
        <span className="text-right">
          <code>JavaScript(ES6)</code>
          <code>ReactJS</code>
          <code>Redux</code>
        </span>
      </span>
    </div>

    <div className="content">
      <span className="sub-title">Others</span>
      <span className="text text-column">
        <span className="text-left">
          <code>MySQL</code>
          <code>PostgreSQL</code>
          <code>Docker</code>
        </span>
        <span className="text-right">
          <code>MongoDB</code>
          <code>Redis</code>
          <code>NSQ</code>
        </span>
      </span>
    </div>
  </div>
)

export default ResumeSkills
