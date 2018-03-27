import React from 'react'
import Avater from './avater.jpg'

const ResumePersonal = () => (
  <div className="personal-info">
    <img src={Avater} alt="profile picture" />
    <div className="name-title">
      <h1>Rafiqul Hasan</h1>
      <strong className="position">Software Artisan</strong>
    </div>
  </div>
)

export default ResumePersonal
