import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-copy" style={{ textAlign: 'center' }}>
      All rights reserved 2018 &copy; Rafiqul Hasan. Built with{' '}
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
    </footer>
  )
}

export default Footer
