import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Toggle } from './toggle'

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)


  return (
    <nav className="fixed w-full z-30 top-0 flex flex-wrap items-center justify-between p-6 mb-6 border-b-4 border-yellow-500 bg-gray-50 dark:bg-gray-900 ">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center flex-shrink-0 mr-6 text-gray-400 dark:bg-gray-white">
          <span className="text-xl font-semibold tracking-tight">
            <Link
              to={`/`}
              href="#responsive-header"
              className="block mt-4 mr-4 dark:text-white text-black text-xl lg:inline-block lg:mt-0 hover:text-white"
            >
              {siteTitle}
            </Link>


          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${isExpanded ? `block` : `hidden`
            } w-full block flex-grow lg:flex lg:items-center lg:w-auto container`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              to={`/`}
              href="#responsive-header"
              className="block mt-4 mr-4 dark:text-white text-gray-800 lg:inline-block lg:mt-0 hover:text-white"
            >
              Home
          </Link>
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
            <Link
              to={`/blog`}
              className="block mt-4 mr-4 dark:text-white text-gray-800 lg:inline-block lg:mt-0 hover:text-white"
            >
              Blog
          </Link>
          </div>
          <div>
            <a
              href="#download"
              className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-black hover:bg-white bg-blue-700 lg:mt-0"
            >
              Cari
          </a>
          </div>

          <div className="pl-5">
            <Toggle />

          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
