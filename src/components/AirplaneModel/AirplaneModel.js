import React from 'react'
import ContentEntry from '../ContentEntry/contentEntry'

const AirplaneModel = ({node}) => {

  if (node.length === 0) {
    return (
        <p>No blog posts found.</p>
    )
  }
  return (
    <ContentEntry
    title={node.title}
    image={node.image.resize.src}
    description={node.description}
    slug={node.slug}
    isHomePage
    />
  )
}

export default AirplaneModel
