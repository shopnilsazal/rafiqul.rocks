import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

import loadWebFonts from '../services/web-fonts'
import { rhythm } from '../utils/typography'

class Template extends React.Component {
  componentDidMount() {
    loadWebFonts()
  }

  render() {
    const { location, children } = this.props
    const resumeClassName = location.pathname == '/resume' ? 'resume' : ''

    return (
      <div className={`blog-main ${resumeClassName}`}>
        <Menu />
        {children}
        <div
          style={{
            maxWidth: rhythm(28),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            margin: '0 auto',
          }}
        >
          <Footer />
        </div>
      </div>
    )
  }
}

export default Template
