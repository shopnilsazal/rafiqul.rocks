import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

import loadWebFonts from '../services/web-fonts'
import { rhythm, scale } from '../utils/typography'
import '../scss/index.scss'

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
        {children()}
        <Container
          style={{
            maxWidth: rhythm(28),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <Footer />
        </Container>
      </div>
    )
  }
}

export default Template
