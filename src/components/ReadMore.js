import React from 'react'
import Link from 'gatsby-link'

const ReadMore = ({ slug }) => {
  return (
    <Link style={{ boxShadow: 'none' }} to={slug}>
      Read More
      <svg
        width="13"
        height="11"
        viewBox="0 0 13 11"
        className="read-more-icon"
      >
        <path
          d="M7.556 0L6.42 1.137 9.91 4.63H0v1.626h9.912L6.42 9.75l1.136 1.137L13 5.444"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </Link>
  )
}

export default ReadMore
