import React from 'react'
import {graphql} from 'gatsby'
import ContentEntry from '../components/ContentEntry/contentEntry'
import * as S from '../components/ContentEntry/contentEntry.styled'

const AirplaneModel = ( {data}) =>  {
  const post = data.contentfulAirplaneModel
  return (
    <S.PageWrapper>
        <ContentEntry
          title={post.title}
          image={post.image.resize.src}
          fullText={post.fullText.childMarkdownRemark.html}
        />
    </S.PageWrapper>
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