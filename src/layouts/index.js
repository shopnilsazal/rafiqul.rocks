import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
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
    let header
    let footer

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Rafiqul's Blog
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 style={{ textAlign: 'center' }}>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Rafiqul's Blog
          </Link>
        </h3>
      )
    }

    return (
      <div className="blog-main">
        <Container
          style={{
            maxWidth: rhythm(28),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {header}
        </Container>
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
