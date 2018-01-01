import React from 'react'
import GatsbyLink from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import { rhythm } from '../utils/typography'
import PostListItem from '../components/PostListItem'

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext
  if (tag) {
    return (
      <Container
        style={{
          maxWidth: rhythm(30),
          padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)}`,
        }}
      >
        <h1>
          {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
        </h1>
        <ul>
          {console.log(post)}
          {post.map(({ excerpt, fields, frontmatter, timeToRead }) => {
            return (
              <PostListItem
                key={fields.slug}
                slug={fields.slug}
                title={frontmatter.title}
                date={frontmatter.date}
                excerpt={excerpt}
                tags={frontmatter.tags || []}
              />
            )
          })}
        </ul>
        <GatsbyLink to="/tags">All tags</GatsbyLink>
      </Container>
    )
  }
  return (
    <div>
      <h1>Tags</h1>
      <ul className="tags">
        {Object.keys(posts).map(tagName => {
          const tags = posts[tagName]
          return (
            <li key={tagName}>
              <GatsbyLink to={`/tags/${tagName}`}>{tagName}</GatsbyLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
