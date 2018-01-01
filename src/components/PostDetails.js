import React from 'react'
import Helmet from 'react-helmet'
import PostDate from './PostDate'

const PostDetails = ({ title, siteTitle, date, html }) => {
  return (
    <div className="blog-details">
      <Helmet title={`${title} | ${siteTitle}`} />
      <h1 className="post-title">{title}</h1>
      <PostDate date={date} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default PostDetails
