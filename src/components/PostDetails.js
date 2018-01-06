import React from 'react'
import Helmet from 'react-helmet'
import PostDate from './PostDate'
import MinRead from './MinRead'
import Tags from './Tags'

const PostDetails = ({ title, siteTitle, date, html, tags, read }) => {
  return (
    <div className="blog-details">
      <Helmet title={`${title} | ${siteTitle}`} />
      <MinRead read={read} />
      <h1 className="post-title">{title}</h1>
      <PostDate date={date} />
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Tags tags={tags} />
    </div>
  )
}

export default PostDetails
