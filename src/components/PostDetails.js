import React from 'react'
import Helmet from 'react-helmet'
import PostDate from './PostDate'
import MinRead from './MinRead'
import Tags from './Tags'
import Link from 'gatsby-link'

const PostDetails = ({ title, siteTitle, date, html, tags, read }) => {
  return (
    <div className="blog-details">
      <Helmet title={`${title} | ${siteTitle}`} />
      <Link className="back-to-home" style={{ boxShadow: 'none' }} to="/">
        <svg
          width="13"
          height="11"
          viewBox="0 0 13 11"
          className="back-to-home-icon"
        >
          <path
            d="M7.556 0L6.42 1.137 9.91 4.63H0v1.626h9.912L6.42 9.75l1.136 1.137L13 5.444"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        Back to Home
      </Link>
      <MinRead read={read} />
      <h1 className="post-title">{title}</h1>
      <PostDate date={date} />
      <Tags tags={tags} />
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

export default PostDetails
