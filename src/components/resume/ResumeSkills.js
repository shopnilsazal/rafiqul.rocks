import React from 'react'

const ResumeSkills = () => (
  <div className="contents resume-card">
    <h4 className="title skills">Skills & expertise</h4>
    <div className="content">
      <span className="sub-title">Languages</span>
      <span className="text text-column">
        <span className="text-left">
          <code>Python</code>
          <code>Go</code>
        </span>
        <span className="text-right">
          <code>JavaScript</code>
        </span>
      </span>
    </div>
    <div className="content">
      <span className="sub-title">Frameworks</span>
      <span className="text text-column">
        <span className="text-left">
          <code>Django</code>
          <code>FastAPI</code>
          <code>Flask</code>
          <code>Sanic</code>
        </span>
        <span className="text-right">
          <code>ReactJS</code>
          <code>Redux</code>
          <code>NodeJS</code>
          <code>Echo</code>
        </span>
      </span>
    </div>

    <div className="content">
      <span className="sub-title">Databases</span>
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

    <div className="content">
      <span className="sub-title">Tools</span>
      <span className="text text-column">
        <span className="text-left">
          <code>Docker</code>
          <code>Prometheus</code>
          <code>Celery</code>
        </span>
        <span className="text-right">
          <code>Traefik</code>
          <code>AWS</code>
          <code>NSQ</code>
        </span>
      </span>
    </div>
  </div>
)

export default ResumeSkills
