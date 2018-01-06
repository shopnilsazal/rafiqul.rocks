import React from 'react'
import Link from 'gatsby-link'
import { Arrow, Minus } from 'reline'

const PostNavigation = ({ next, prev }) => {
  return (
    <div className="post-navigation">
      {prev ? (
        <div className="nav-prev" style={{ marginRight: next ? '1rem' : 0 }}>
          <h3 style={{ marginTop: 0, marginBottom: 0 }}>
            <Link
              style={{ boxShadow: 'none', border: 0 }}
              to={prev.fields.slug}
            >
              <Arrow
                strokeWidth={1}
                size={21}
                style={{ marginBottom: '2px' }}
                left
              />
              <Minus
                strokeWidth={1}
                size={21}
                style={{ marginRight: '0.5rem', marginBottom: '2px' }}
              />
              {prev.frontmatter.title}
            </Link>
          </h3>
        </div>
      ) : (
        ''
      )}
      {next ? (
        <div className="nav-next" style={{ marginLeft: prev ? '1rem' : 0 }}>
          <h3 style={{ marginTop: 0, marginBottom: 0 }}>
            <Link
              style={{ boxShadow: 'none', border: 0 }}
              to={next.fields.slug}
            >
              {next.frontmatter.title}
              <Minus
                strokeWidth={1}
                size={21}
                style={{ marginLeft: '0.5rem', marginBottom: '2px' }}
              />
              <Arrow
                strokeWidth={1}
                size={21}
                style={{ marginBottom: '2px' }}
                right
              />
            </Link>
          </h3>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default PostNavigation
