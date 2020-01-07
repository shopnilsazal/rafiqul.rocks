import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Menu from '../components/Menu'
import { rhythm } from '../utils/typography'
import PostListItem from '../components/PostListItem'
import Tags from '../components/Tags'

export default function TagsTemplate({ pageContext }) {
  const { posts, post, tag, tags } = pageContext
  if (tag) {
    return (
      <div
        style={{
          maxWidth: rhythm(28),
          padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)}`,
          margin: '0 auto',
        }}
      >
        <Menu />
        <Helmet title={`${tag} | Rafiqul's Blog`} />
        <h1>
          {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
        </h1>
        <Link className="back-to-tag" to="/tags">
          <svg
            width="13"
            height="11"
            viewBox="0 0 13 11"
            className="back-to-tag-icon"
          >
            <path
              d="M7.556 0L6.42 1.137 9.91 4.63H0v1.626h9.912L6.42 9.75l1.136 1.137L13 5.444"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          All Tags
        </Link>

        {post.map(({ excerpt, fields, frontmatter, timeToRead }) => {
          return (
            <PostListItem
              key={fields.slug}
              slug={fields.slug}
              title={frontmatter.title}
              date={frontmatter.date}
              excerpt={excerpt}
              read={timeToRead}
              tags={frontmatter.tags || []}
            />
          )
        })}
      </div>
    )
  }
  return (
    <div
      style={{
        maxWidth: rhythm(28),
        padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)}`,
        textAlign: 'center',
        margin: '0 auto',
      }}
      className="all-tags-container"
    >
      <Menu />
      <Helmet title={`Tags | Rafiqul's Blog`} />
      <h1 style={{ marginBottom: '3rem' }}>All tags</h1>
      <Tags tags={tags} />
    </div>
  )
}
