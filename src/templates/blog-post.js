import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container } from 'react-responsive-grid'
import Bio from '../components/Bio'
import PostDetails from '../components/PostDetails'
import { rhythm, scale } from '../utils/typography'
import '../scss/prism-theme.scss'

const BlogPost = ({ data = {}, location, pathContext }) => {
  console.log(data)
  const { markdownRemark: post } = data
  const { next, prev } = pathContext

  const isAbout = location.pathname.match(/about/)

  const description = post.excerpt
  const author = data.site.siteMetadata.author
  const siteTitle = data.site.siteMetadata.title

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
      content: `schaudustin`,
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
      content: post.frontmatter.rawDate,
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
