import React from 'react'
import Link from 'gatsby-link'

const PostTitle = ({ title, slug }) => {
  return (
    <h2 className="post-title">
      <Link style={{ boxShadow: 'none' }} to={slug}>
        {title}
      </Link>
    </h2>
  )
}

export default PostTitle
