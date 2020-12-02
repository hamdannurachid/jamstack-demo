import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"


export default ({ data }) => {
    const post = data.markdownRemark;
    const htmlContent = { __html: post.html };
    return (
        <Layout>
            <SEO title="Tutorial" />

            <div>
                <div className="container w-full md:max-w-3xl mx-auto pt-20">
                    <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
                        <div className="font-sans">
                            <p className="text-base md:text-sm text-green-500 font-bold">
                                <Link to={`/tutorial`}>Kembali</Link>
                            </p>
                            <h1 className="font-bold font-sans break-normal dark:text-gray-50 text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{post.frontmatter.title} </h1>
                            <p className="text-sm md:text-base font-normal text-gray-600">Published {post.frontmatter.date} </p>
                        </div>

                        <div dangerouslySetInnerHTML={htmlContent} className="text-gray-50" />

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        html
        frontmatter {
            title
            date
        }
    }
}
`;