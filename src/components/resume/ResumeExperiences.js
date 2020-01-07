import React from 'react'

const ResumeExperiences = () => (
  <div className="contents resume-card">
    <h4 className="title work">Work experience</h4>

    <div className="content">
      <span className="date">November 2018 - Present</span>
      <span className="sub-title">Software Engineer</span>
      <span className="sub-title-sm">
        <a href="https://www.misfit.tech/" target="_blank">
          Misfit Technologies LTD
        </a>
      </span>
      <span className="text">
        - Redesigned the conversational chatbot building platform{' '}
        <a href="https://getalice.ai/" target="_blank">
          Alice
        </a>{' '}
        with maintainable low level architecture and transformed it from B2B to
        SAAS. And lead this team of 7 people. <br />- Designed and developed
        both back-end and front-end architecture of{' '}
        <a href="https://kichole.com/" target="_blank">
          Ki Chole?
        </a>
        , an online entertainment and event ticketing platform.
        <br />
        - Designed and implemented HTTP based backend system for health tracking
        IoT device.
        <br />- <strong>Technologies:</strong> <code>Go</code>,{' '}
        <code>Echo Framework</code>, <code>ReactJS</code>, <code>Redux</code>,{' '}
        <code>Python</code>, <code>Django</code>, <code>Flask</code>,{' '}
        <code>FastAPI</code>, <code>Docker</code>, <code>Traefik</code>,{' '}
        <code>AWS</code>, <code>Redis</code>, <code>MongoDB</code>,{' '}
        <code>PostgreSQL</code>
      </span>
    </div>

    <div className="content">
      <span className="date">October 2017 - November 2018</span>
      <span className="sub-title">Software Developer</span>
      <span className="sub-title-sm">
        <a
          href="https://www.linkedin.com/company/monico-technologies-limited/"
          target="_blank"
        >
          Finder GPS Tracking Service
        </a>
      </span>
      <span className="text">
        - Redesigned the notification system with Event Driven Architecture and
        reduced the trigger time from 3 minutes to near real time.
        <br />- Redesigned TCP backend system for location tracking IoT device
        and improved open connection up to 80%.
        <br />- Implemented a POC of Real Time video streaming system with{' '}
        <code>RTMP</code>. <br />- Implemented a POC of Real Time location
        tracking system with <code>WebSocket</code>.
        <br />- Lead a team of 4 and mentor junior developers.
        <br />- <strong>Technologies:</strong> <code>Python</code>,{' '}
        <code>Flask</code>, <code>Sanic</code>, <code>Celery</code>,{' '}
        <code>Twisted</code>, <code>Tornado</code>, <code>ReactJS</code>,{' '}
        <code>Redux</code>, <code>Redis</code>, <code>MongoDB</code>
      </span>
    </div>

    <div className="content">
      <span className="date">January 2016 - September 2017</span>
      <span className="sub-title">Software Developer</span>
      <span className="sub-title-sm">
        <a href="https://www.linkedin.com/company/themexpert/" target="_blank">
          ThemeXpert
        </a>
      </span>
      <span className="text">
        - Developing premium WordPress themes and plugins. <br />
        - Creating components for Page Builder.. <br />
        - Providing technical support to the customer. <br />-{' '}
        <strong>Technologies:</strong> <code>PHP</code>, <code>WordPress</code>,{' '}
        <code>ReactJS</code>, <code>Python</code>, <code>Flask</code>,{' '}
        <code>Scrapy</code>, <code>MySQL</code>, <code>MongoDB</code>
      </span>
    </div>

    <div className="content">
      <span className="date">February 2014 - December 2015</span>
      <span className="sub-title">Freelance Web Developer</span>
      <span className="text">
        - Developing custom WordPress themes and Plugins as per client's
        requirements. <br />
        - Developing pixel perfect UI and great UX for the web. <br />
      </span>
    </div>
  </div>
)

export default ResumeExperiences
