import React from 'react'
import {graphql} from 'gatsby'
import ContentEntry from '../components/ContentEntry/contentEntry'
import SEO from "../components/seo"
import Layout from "../components/Layout/layout"

const AirplaneModel = ( {data}) =>  {
  const post = data.contentfulAirplaneModel
  return (
    <Layout title={'Airplane Model'}>
      <SEO title="Plane Model" />
       <ContentEntry
          title={post.title}
          image={post.image.resize.src}
          fullText={post.fullText.childMarkdownRemark.html}
    />
    </Layout>
  )
}

export default AirplaneModel

export const pageQuery = graphql
`
query (
  $slug: String!
  )
{
  contentfulAirplaneModel (slug: {eq: $slug}) {
    slug
    title
    description
    image {
      resize(width: 900, height: 400) {
        src
      }
    }
    fullText {
      childMarkdownRemark {
       html
     }
     }
    image {
      fluid {
        src
      }
    }
  }
}
`