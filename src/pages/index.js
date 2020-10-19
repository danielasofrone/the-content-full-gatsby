import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout/layout"
import * as S from '../components/ContentEntry/contentEntry.styled'
import AirplaneModel from '../components/AirplaneModel/AirplaneModel'

const IndexPage = ({data}) => (
 <>
  <Layout title={'Airplane Models'} />
  <SEO title="Home" />
  <S.PageWrapper>
  <ul>
    {data.allContentfulAirplaneModel.edges.map((edge) =>
    <AirplaneModel key ={edge.node.slug} node={edge.node} />
    )}
  </ul>
  </S.PageWrapper>
 </>
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