const { createFilePath } = require(`gatsby-source-filesystem`)
const path  = require('path')


// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === `MarkdownRemark`) {
//     const parent = getNode(node.parent);
//     let collection = parent.sourceInstanceName;
//     createNodeField({
//       node,
//       name: 'collection',
//       value: collection,
//     });
//   }
// };


// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === "MarkdownRemark") {

//     const slug = createFilePath({
//       node,
//       getNode,
//       basePath: "blog",
//     })

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }



exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    // const relativeFilePath = createFilePath({
    //   node,
    //   getNode,
    //   basePath: "data/faqs/",
    // })
    const longSlug = createFilePath({ node, getNode, basePath: 'pages' });
    const slug = longSlug.split('/');
  // const slug = createFilePath({ node, getNode, basePath: `pages` })
    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
     value: `/${slug[slug.length - 2]}/`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const collections = graphql(`
   query {
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
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/template/detail_blog.js'),
        context: {
          slug: node.fields.slug,
        },
      });
    });
  })

  const posts = graphql(`
    query {
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
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/template/detail_tutorial.js'),
        context: {
          slug: node.fields.slug,
        },
      });
    });
  })

  return Promise.all([collections, posts])
};



// exports.createPages =({ graphql, actions }) => {
//     const {createPage} = actions;
//     const templateFile = path.resolve('src/template/detail_blog.js')

//     return graphql(`
//     {
//         allMarkdownRemark {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `).then(({ data }) => {
//         data.allMarkdownRemark.edges.forEach(({node}) => {
//             createPage({
//                 path: node.fields.slug,
//                 component: templateFile,
//                 context: {
//                     slug: node.fields.slug
//                 }
//             })
//         })
//     } )
// }






