import React from 'react'

const ResumeProjects = () => (
  <div className="contents resume-card">
    <h4 className="title projects">Selected Projects</h4>
    <div className="content">
      <span className="sub-title">
        <a href="https://github.com/shopnilsazal/validus" target="_blank">
          Validus
        </a>
      </span>
      <span className="text">
        A dead simple Python string validation library. It has very simple and
        Pythonic API. I built this library in Python 3 using TDD (unittest,
        doctest)
      </span>
    </div>
    <div className="content">
      <span className="sub-title">
        <a href="https://github.com/shopnilsazal/simple-bcrypt" target="_blank">
          Simple-Bcrypt
        </a>
      </span>
      <span className="text">
        It provides bcrypt hashing utilities for
        <code> Flask/Sanic/Quart/Eve </code>
        application.
      </span>
    </div>
  </div>
)

export default ResumeProjects
