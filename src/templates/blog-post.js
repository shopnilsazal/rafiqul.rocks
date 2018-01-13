import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container } from 'react-responsive-grid'
import Bio from '../components/Bio'
import PostDetails from '../components/PostDetails'
import PostNavigation from '../components/PostNavigation'
import { rhythm, scale } from '../utils/typography'
import '../scss/prism-theme.scss'

const BlogPost = ({ data = {}, location, pathContext }) => {
  const { markdownRemark: post } = data
  const { next, prev } = pathContext

  const isAbout = location.pathname.match(/about/)

  const description = post.excerpt
  const author = data.site.siteMetadata.author
  const siteTitle = data.site.siteMetadata.title
  const siteUrl = data.site.siteMetadata.siteUrl

  const meta = [
    {
      name: `description`,
      content: description,
    },
    {
      name: `og:description`,
      content: description,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: `og:title`,
      content: post.frontmatter.title,
    },
    {
      name: `og:type`,
      content: `article`,
    },
    {
      name: `article:author`,
      content: author,
    },
    {
      name: `twitter:creator`,
      content: `shopnilsazal`,
    },
    {
      name: `author`,
      content: author,
    },
    {
      name: `twitter:label1`,
      content: `Reading time`,
    },
    {
      name: `twitter:data1`,
      content: `${post.timeToRead} min read`,
    },
    {
      name: `article:published_time`,
      content: post.frontmatter.date,
    },
  ]

  return (
    <Container
      style={{
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Helmet title={`${post.frontmatter.title} - ${siteTitle}`} meta={meta} />

      <PostDetails
        title={post.frontmatter.title}
        siteTitle={siteTitle}
        date={post.frontmatter.date}
        html={post.html}
        tags={post.frontmatter.tags}
        read={post.timeToRead}
      />
      <PostNavigation
        prev={prev}
        next={next}
        link={`${siteUrl + post.frontmatter.path}`}
        title={post.frontmatter.title}
      />
      <Bio />
    </Container>
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
