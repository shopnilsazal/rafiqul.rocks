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
          <code>Sanic</code>
        </span>
        <span className="text-right">
          <code>Tornado</code>
          <code>Celery</code>
          <code>Scrapy</code>
          <code>PHP</code>
          <code>WordPress</code>
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
          <code>LESS</code>
        </span>
        <span className="text-right">
          <code>JavaScript(ES6)</code>
          <code>ReactJS</code>
          <code>Redux</code>
          <code>jQuery</code>
        </span>
      </span>
    </div>

    <div className="content">
      <span className="sub-title">Database</span>
      <span className="text text-column">
        <span className="text-left">
          <code>MySQL</code>
          <code>PostgreSQL</code>
        </span>
        <span className="text-right">
          <code>MongoDB</code>
          <code>Redis</code>
        </span>
      </span>
    </div>
  </div>
)

export default ResumeSkills
