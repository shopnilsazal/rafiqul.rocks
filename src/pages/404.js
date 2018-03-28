import React from 'react'
import Helmet from 'react-helmet'
import { Container } from 'react-responsive-grid'
import { rhythm, scale } from '../utils/typography'
import Link from 'gatsby-link'

const NotFound = () => {
  return (
    <Container
      style={{
        maxWidth: rhythm(40),
        padding: `0 ${rhythm(0.5)}`,
      }}
    >
      <Helmet title={'404 Not Found - Rafiqul Hasan'} />

      <div
        className="not-found-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '500px',
        }}
      >
        <h1 style={{ fontSize: '10rem' }}>404</h1>
        <h2 style={{ marginTop: 0 }}>Oops</h2>
        <h2 style={{ marginTop: 0 }}>Nothing is Found Here</h2>
        <Link to="/">wanna go home?</Link>
      </div>
    </Container>
  )
}

export default NotFound
