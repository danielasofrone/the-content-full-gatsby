import React from 'react'
import {graphql} from 'gatsby'


const AirplaneModel = ( {data}) =>  {
  const post = data.contentfulAirplaneModel
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
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
    fullText {
      fullText
    }
  }
}
`