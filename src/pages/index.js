import React from "react"
import ContentEntry from '../components/ContentEntry/contentEntry'
import SEO from "../components/seo"
import Layout from "../components/Layout/layout"

const AirplaneModel = ({node}) => {
  const siteTitle = `Airplane Models`

  if (node.length === 0) {
    return (
      <Layout title={siteTitle}>
        <SEO title="Home" />
        <p>
          No blog posts found.
        </p>
      </Layout>
    )
  }
  return (
    <>
    <Layout title={siteTitle}/>
    <SEO title="Home" />
    <ContentEntry
    title={node.title}
    image={node.image.resize.src}
    description={node.description}
    slug={node.slug}
    />
    </>
  )
}

const IndexPage = ({data}) => (
  <ul>
    {data.allContentfulAirplaneModel.edges.map((edge) =>
    <AirplaneModel key ={edge.node.slug} node={edge.node} />
    )}
  </ul>
)
export default IndexPage

export const pageQuery = graphql
`
   query pageQuery {
    allContentfulAirplaneModel (
    filter: {
      node_locale: {eq: "en-US"}
    },
    ) {
        edges {
          node {
            title
            slug
            description
            image {
              resize(width: 900, height: 400) {
                src
              }
            }
          }
        }
    }
   }
`