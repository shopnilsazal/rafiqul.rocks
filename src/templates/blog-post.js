import React from 'react'
import { graphql } from 'gatsby'
import Menu from '../components/Menu'
import PostDetails from '../components/PostDetails'
import Disqus from '../components/Disqus'
import PostNavigation from '../components/PostNavigation'
import { rhythm } from '../utils/typography'
import SEO from '../components/SEO'
import '../scss/prism-theme.scss'

const BlogPost = ({ data = {}, location, pathContext }) => {
  const { markdownRemark: post } = data
  const { next, prev } = pathContext

  const description = post.excerpt
  const author = data.site.siteMetadata.author
  const siteTitle = data.site.siteMetadata.title
  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <div
      style={{
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(0.5)}`,
        margin: '0 auto',
      }}
    >
      <Menu />
      <SEO data={data} />

      <PostDetails
        title={post.frontmatter.title}
        siteTitle={siteTitle}
        date={post.frontmatter.date}
        html={post.html}
        tags={post.frontmatter.tags}
        read={post.timeToRead}
      />

      <Disqus post={post} />

      <PostNavigation
        prev={prev}
        next={next}
        link={`${siteUrl + post.frontmatter.path}`}
        title={post.frontmatter.title}
      />
    </div>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`
