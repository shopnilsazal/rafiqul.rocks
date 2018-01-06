import React from 'react'
import Link from 'gatsby-link'
import PostDate from './PostDate'
import ReadMore from './ReadMore'
import PostTitle from './PostTitle'
import Tags from './Tags'
import MinRead from './MinRead'

const PostListItem = ({ slug, title, date, excerpt, tags, read }) => {
  return (
    <article className="blog-card">
      <MinRead read={read} />
      <Tags tags={tags} />
      <PostTitle title={title} slug={slug} />
      <PostDate date={date} />
      <p
        className="post-excerpt"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <ReadMore slug={slug} />
    </article>
  )
}

export default PostListItem
