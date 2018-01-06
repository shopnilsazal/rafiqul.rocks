import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container } from 'react-responsive-grid'

import Bio from '../components/Bio'
import PostListItem from '../components/PostListItem'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Container
        style={{
          maxWidth: rhythm(28),
          padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)}`,
        }}
      >
        <Helmet title={siteTitle} />
        <h1 className="watermark-text">Rafiqul</h1>
        {/* <Bio /> */}
        <div className="blog-list">
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <PostListItem
                key={node.fields.slug}
                slug={node.fields.slug}
                title={title}
                date={node.frontmatter.date}
                excerpt={node.excerpt}
                tags={node.frontmatter.tags || []}
                read={node.timeToRead}
              />
            )
          })}
        </div>
      </Container>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            title
          }
        }
      }
    }
  }
`
