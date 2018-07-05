import React from 'react'

const ResumeExperiences = () => (
  <div className="contents resume-card">
    <h4 className="title work">Work experience</h4>
    <div className="content">
      <span className="date">October 2017 - Present</span>
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
        - Designing and developing highly available and scalable backend system
        for IoT devices. <br />
        - Designing and developing real-time communication system with
        <code> WebSocket</code>.
        <br />
        - Designing APIs and Building Microservices. <br />
        - Lead a small team and mentor junior developers. <br />
        - Developing new features by writing clean, reusable and maintainable
        code.
        <br />
        - Developing new user dashboard for better user experience in
        <code> ReactJS </code>
        and <code> Redux</code>. <br />
        - <strong>Technologies:</strong> <code>Python</code>, <code>Flask</code>,{' '}
        <code>Sanic</code>, <code>Celery</code>, <code>Django</code>,{' '}
        <code>Django REST Framework</code>, <code>Twisted</code>,{' '}
        <code>Tornado</code>, <code>ReactJS</code>, <code>Redux</code>,{' '}
        <code>Redis</code>, <code>MongoDB</code>
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
        - Developing Microservices for Email Marketing application. <br />
        - Researching UX and collaborating with the designer team to design
        products with great user experience. <br />
        - Providing technical support to the customer. <br />
        - <strong>Technologies:</strong> <code>PHP</code>,{' '}
        <code>WordPress</code>, <code>ReactJS</code>, <code>Python</code>,{' '}
        <code>Flask</code>, <code>Scrapy</code>, <code>MySQL</code>,{' '}
        <code>MongoDB</code>
      </span>
    </div>

    <div className="content">
      <span className="date">September 2014 - April 2015</span>
      <span className="sub-title">WordPress Developer</span>
      <span className="sub-title-sm">
        <a
          href="https://www.linkedin.com/company/softcorp-media/"
          target="_blank"
        >
          Softcorp Media
        </a>
      </span>
      <span className="text">
        - Developing and maintaining WordPress sites. <br />
        - Improving site performance and security. <br />
        - Managing WHM with 50+ sites. <br />
        - Developing pixel perfect UI and great UX for the web. <br />
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
