const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')

const createTagPages = (createPage, edges) => {
  // Tell it to use our tags template.
  const tagTemplate = path.resolve(`src/templates/tags.js`)
  // Create an empty object to store the posts.
  const posts = {}

  // Loop through all nodes (our markdown posts) and add the tags to our post object.

  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!posts[tag]) {
          posts[tag] = []
        }
        posts[tag].push(node)
      })
    }
  })
  const tags = Object.keys(posts)
  // Create the tags page with the list of tags from our posts object.
  createPage({
    path: '/tags',
    component: tagTemplate,
    context: {
      tags,
    },
  })

  // For each of the tags in the post object, create a tag page.

  Object.keys(posts).forEach(tagName => {
    const post = posts[tagName]
    createPage({
      path: `/tags/${tagName}`,
      component: tagTemplate,
      context: {
        posts,
        post,
        tag: tagName,
      },
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              limit: 1000
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  timeToRead
                  excerpt
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
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges
        createTagPages(createPage, posts)

        // Create blog posts pages.
        _.each(posts, ({ node }, index) => {
          createPage({
            path: node.fields.slug,
            component: blogPost,
            context: {
              prev: index === 0 ? false : posts[index - 1].node,
              next: index === posts.length - 1 ? false : posts[index + 1].node,
              slug: node.fields.slug,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = node.frontmatter.path
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
