const path = require ("path")
const slash = require ("slash")

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions
  return graphql (

    `
    {
      allContentfulAirplaneModel {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
    `
  ).then((result) => {
    if (result.error) {
      console.log("Error with Contentful data", result.errors)
    }

    const airplaneModelTemplate = path.resolve(`./src/templates/airplaneModel.js`)

    result.data.allContentfulAirplaneModel.edges.forEach(planeModel => {
      createPage ({
        path: `/airplaneModels/${planeModel.node.slug}`,
        component: slash(airplaneModelTemplate),
        context: {
          slug: planeModel.node.slug
        },
      })
    })
  }).catch(error => console.log("Error with Contentful", error))
}