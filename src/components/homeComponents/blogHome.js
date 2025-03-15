import React from 'react'
import { Link,  graphql, useStaticQuery } from 'gatsby'
import '../../styles/blog-styles.css'
import BlogPost from "./blogPost"

const BlogHome = ({ lang }) => {
  const { allStrapiBlogs: { nodes } } = useStaticQuery(query)
  const isDefaultLang = lang === 'es'
  const pp = isDefaultLang ? '' : `/${lang}`

  return (
    <div className="bg-dark container-fluid pt-3">
      <div className="text-center display-6 text-white">
        <p className="gothic text-uppercase">
          <span>BLOG - </span>
          <span className="text-success">{_subtitle1[1][lang]}</span> 
          <span>{' '}-{' '}</span>
          <span className="text-danger">Escorts </span>
          <span>{' '}-{' '}</span>
          <br />
          <span>{_subtitle2[1][lang]}</span>
        </p>
      </div>
      <div className="container mx-auto py-5 row col-12">
        {nodes.slice(0, 6).map((blog, i) => {
          return (
            <BlogPost blog={blog} lang={lang} key={i} />
          )
        })}
      </div>
      <nav className="mx-auto container row">
        <div className="col-8 col-sm-6 mx-auto mb-5 ">
          <Link 
            to={`${pp}/blog/`} 
            className="mx-auto row col-8 col-sm-6 col-lg-3 bg-danger pt-2 rounded-3 btn-text"
            style={{ minHeight: '30px' }}
          >
            <p className='text-center mb-2 col'>
              {_urls[1][lang]}
            </p>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default BlogHome

const query = graphql`
  query {
    allStrapiBlogs(sort: {order: DESC, fields: updatedAt}) {
      nodes {
        updatedAt(locale: "es", formatString: "DD,MMM")
        content
        content_en
        title
        title_en
        home
        home_en
        SEO {
          title
          title_en
          description
          description_en
        }
        banner {
          url
        }
      }
    }
  }
`
const _urls = {
  1: {
    en : 'Blog Posts',
    es : 'Ver Todo',
  },
}
const _subtitle1 = {
  1: {
    en : ' Call Girls',
    es : ' Prepagos',
  },
}
const _subtitle2 = {
  1: {
    en : ' Companions',
    es : ' Damas de compañia',
  },
}