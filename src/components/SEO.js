import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config/siteConfig'

const SEO = ({ data }) => {
  const image = config.siteBanner
  const { markdownRemark: post } = data
  const description = post.excerpt
  const author = data.site.siteMetadata.author
  const siteTitle = data.site.siteMetadata.title
  const siteUrl = data.site.siteMetadata.siteUrl
  const postUrl = siteUrl + post.frontmatter.path

  const meta = [
    {
      name: `og:locale`,
      content: `en_US`,
    },
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

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: siteUrl,
      name: siteTitle,
    },
    [
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postUrl,
              name: siteTitle,
              image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: siteUrl,
        name: siteTitle,
        headline: siteTitle,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description,
      },
    ],
  ]

  const scriptData = [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schemaOrgJSONLD),
    },
  ]

  return (
    <Helmet
      title={`${post.frontmatter.title} - ${siteTitle}`}
      meta={meta}
      script={scriptData}
    />
  )
}

export default SEO
