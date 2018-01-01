import React from 'react'

const Footer = () => {
  return (
    <p className="footer-copy" style={{ textAlign: 'center' }}>
      Built with{' '}
      <a
        href="https://facebook.github.io/react/"
        target="_blank"
        rel="nofollow"
      >
        React
      </a>{' '}
      and{' '}
      <a href="http://gatsbyjs.org" target="_blank" rel="nofollow">
        Gatsby
      </a>
    </p>
  )
}

export default Footer
