import React from 'react'
import Link from 'gatsby-link'

const Tags = ({ tags = [] }) => {
  if (!tags || tags.length === 0) return null
  return (
    <div className="tags-container">
      {tags.map(tag => (
        <Link key={tag} className="tags-item" to={`/tags/${tag}`}>
          {tag}
        </Link>
      ))}
    </div>
  )
}

export default Tags
