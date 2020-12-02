import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Single = () => (
    <Layout>
        <SEO title="Single" />

        <section id="hero" className="mt-4 py-36 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto">
                <h2 className="text-3xl lg:text-5xl font-semibold mb-12 text-center">Single</h2>
            </div>
        </section>


        <div className="container w-full md:max-w-3xl mx-auto pt-20">

            <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">

                <div className="font-sans">
                    <p className="text-base md:text-sm text-green-500 font-bold">BACK TO BLOG</p>
                    <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">Welcome to Minimal Blog</h1>
                    <p className="text-sm md:text-base font-normal text-gray-600">Published 19 February 2019</p>
                </div>
            </div>
        </div>

    </Layout>
)

export default Single
