import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useState } from "react"
import { Toggle } from './toggle'
function Header({ siteTitle }) {

  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between flex-wrap py-6 px-8 sm:px-24 bg-gray-50 dark:bg-gray-900 border-t-8 border-yellow-500 transition-all duration-300">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link
          to={`/`}
          href="#responsive-header"
          className="block mr-4 dark:text-white text-black text-xl lg:inline-block lg:mt-0 hover:text-white"
        >
          {siteTitle}
        </Link>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className={`${isExpanded ? `block` : `hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
          <Link
            to={`/tentang`}
            className="block mt-4 mr-4 dark:text-white text-gray-800 lg:inline-block lg:mt-0 hover:text-white"
          >
            Tentang
          </Link>
          <Link
            to={`/tutorial`}
            className="block mt-4 mr-4 dark:text-white text-gray-800 lg:inline-block lg:mt-0 hover:text-white"
          >
            Tutorial
          </Link>
          {/* <Link
            to={`/detail_tutorial`}
            className="block mt-4 mr-4 dark:text-white text-gray-800 lg:inline-block lg:mt-0 hover:text-white"
          >
            Detail Tutorial
          </Link> */}
          <Link
            to={`/blog`}
            className="block mt-4 mr-4 dark:text-white text-gray-800 lg:inline-block lg:mt-0 hover:text-white"
          >
            Blog
          </Link>
          {/* <Link
            to={`/detail_blog`}
            className="block mt-4 mr-4 dark:text-white text-gray-800 lg:inline-block lg:mt-0 hover:text-white"
          >
            Detail Blog
          </Link> */}
          {/* <Link
            to={`/testing`}
            className="block mt-4 mr-4 dark:text-white text-gray-800 lg:inline-block lg:mt-0 hover:text-white"
          >
            Testing
          </Link> */}




        </div>
        {/* <div>
          <a href="#download" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 mr-4 lg:mt-0">Download</a>
        </div> */}
        <div>
          <Toggle />
        </div>
      </div>
    </nav>
  )
}

export default Header
