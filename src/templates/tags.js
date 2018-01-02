import React from 'react'
import GatsbyLink from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import { rhythm } from '../utils/typography'
import PostListItem from '../components/PostListItem'
import Tags from '../components/Tags'

export default function TagsTemplate({ pathContext }) {
  const { posts, post, tag, tags } = pathContext
  if (tag) {
    return (
      <Container
        style={{
          maxWidth: rhythm(28),
          padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)}`,
        }}
      >
        <h1>
          {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
        </h1>
        <GatsbyLink style={{}} to="/tags">
          All tags
        </GatsbyLink>

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
      </Container>
    )
  }
  return (
    <Container
      style={{
        maxWidth: rhythm(28),
        padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)}`,
        textAlign: 'center',
      }}
      className="all-tags-container"
    >
      <h1 style={{ marginBottom: '3rem' }}>All tags</h1>
      <Tags tags={tags} />
    </Container>
  )
}
