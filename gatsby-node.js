const { createFilePath } = require(`gatsby-source-filesystem`)
const path  = require('path')


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent);
    let collection = parent.sourceInstanceName;
    createNodeField({
      node,
      name: 'collection',
      value: collection,
    });
  }
};


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {

    const slug = createFilePath({
      node,
      getNode,
      basePath: "blog",
    })

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages =({ graphql, actions }) => {
    const {createPage} = actions;
    const templateFile = path.resolve('src/template/detail_blog.js')

    return graphql(`
    {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(({ data }) => {
        data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: templateFile,
                context: {
                    slug: node.fields.slug
                }
            })
        })
    } )
}






