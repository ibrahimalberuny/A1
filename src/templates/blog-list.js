import React from 'react'
import { graphql, Link } from 'gatsby'
import * as slugify from 'slugify'
import SubHeader from '../components/sub-header'
import Seo from '../components/seo'
import '../styles/blog-styles.css'
import { formatearFecha, formatDate, mes, month, tiempo} from "../helpers"

const BlogPage = ({ data, pageContext: { lang, pageCount, currentPage } }) => {
  const { strapiBlogpage } = data
  const { nodes } = data.allStrapiBlogs
  const isDefaultLang = lang === 'es'
  const pp = isDefaultLang ? '' : `/${lang}`

  return (
    <SubHeader lang={lang}>
      <Seo
        title={isDefaultLang ? strapiBlogpage.SEO.title.slice(0,40) + ' | pagina ' + currentPage : strapiBlogpage.SEO.title_en.slice(0,40)  + ' | page ' + currentPage }
        description={isDefaultLang ? strapiBlogpage.SEO.description.slice(0,135)+ ' | pagina ' + currentPage : strapiBlogpage.SEO.description_en.slice(0,135)  + ' | page ' + currentPage }
        keywords={isDefaultLang ? strapiBlogpage.SEO.keywords : strapiBlogpage.SEO.keywords_en}
      />
      <div className="">
        <div className="bg-dark">
          <div className="row">
            <div className="text-center mt-5 gothic text-white">
              <h1>BLOG { isDefaultLang ? ` Página ${currentPage}` : ` Page ${currentPage}` }</h1>
              <h2>La Celestina</h2>
            </div>
          </div>
          <div className="">
          {nodes.map((blog, i) => {
            const alt = blog.banner && blog.banner.alternativeText ? blog.banner.alternativeText : "Escorts, Prepagos, Putas, Dama de Compañia"
            return (
              <div className="container align-middle" key={i}>
                <div className="row">
                  <div className="col-2 d-none d-lg-block row text-center">
                    <div className="lh-1 text-white fst-italic">
                      <p className="date">
                        <strong>
                          {blog.updatedAt.slice(8,10)}
                        </strong>
                      </p>
                      <i className="month">{isDefaultLang ? mes(blog.updatedAt) : month(blog.updatedAt) }</i>
                    </div>
                    <p className="text-muted">                            
                      <svg xmlns="https://www.w3.org/2000/svg" alt="Logo Reloj 1" width="16" height="16" fill="currentColor" stroke="gray"className="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                      </svg>
                      <span className="text-muted ps-1">
                        <i>{tiempo(blog.updatedAt)}</i>
                      </span>
                    </p>                    
                  </div>
                  <div className="card mx-auto my-4 col-12 col-lg-9 me-5">
                    <div className="row g-0 m-n1">
                      <div className={`col-md-4 ${i%2===1 ? 'order-md-5' : 'col-md'}`}>
                        { blog.banner && blog.banner.url ? 
                          (
                            <img
                              src={blog.banner.url}
                              className="img-fluid rounded w-100"
                              width={400}
                              height={500}
                              loading='lazy'
                              placeholder="DOMINANT_COLOR"
                              alt={ alt + ' ' + blog.title.slice(0,10) }
                              style={{ objectFit: 'cover', height: '20em' }}
                            />
                          )
                          :
                          (
                            <img
                              src="/images/avatar.jpg"
                              className="img-fluid rounded w-100"
                              width={400}
                              height={500}
                              loading='lazy'
                              placeholder="DOMINANT_COLOR"
                              alt={ alt + ' ' + blog.title.slice(0,10) }
                              style={{ objectFit: 'cover', height: '20em' }}
                            />
                          )
                        }
                      </div>                  
                      <div className="col-md-8">
                        <div className="card-body mx-3 mt-3">
                          <h3 className="card-title py-2">
                            {isDefaultLang ? blog.title : blog.title_en}
                          </h3>
                          <p className="card-text">
                            <small className="text-muted">                            
                              <svg xmlns="https://www.w3.org/2000/svg" alt="Logo Fecha" width="16" height="16" fill="currentColor" stroke="gray" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                              </svg>
                              <i className="ms-2">
                                <b>
                                  { isDefaultLang ? formatearFecha(blog.updatedAt) : formatDate(blog.updatedAt) }
                                </b>
                              </i>
                            </small>
                          </p>
                          <p className="text-muted card-text lh-base mb-5 mb-md-0" style= {{ maxWidth: "100%", lineHeight: "2.0" }} >
                          { isDefaultLang ? blog.home : blog.home_en }
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-12 mt-xl-4">
                            <div>
                              <Link
                                to={`${pp}/blog/${slugify(isDefaultLang ? blog.title : blog.title_en, {
                                  lower: true,
                                })}`}
                                className={`btn-blog col-12 col-md-4 col-lg-4 col-xl-4 text-center
                                ${i%2===1 ? 
                                  'bg-success position-absolute bottom-0 start-50 translate-middle-x' :
                                  'bg-danger rounded-end position-absolute bottom-0 end-0'}`}
                              >
                                {_texts[1][lang]}<span className="visually-hidden">{isDefaultLang ? blog.title : blog.title_en}</span>

                                <svg className="position-absolute bottom-0 end-0 translate-middle-y me-3" alt="Logo Reloj" xmlns="https://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                </svg>                        
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
          <nav aria-label="">
            <div className="btn-group text-danger pagination mx-auto" style={{ width: "200px"}} role="group">
              <ul className="list container col d-flex" style={{ listStyle: 'none' }} >
                <li className={` ${currentPage === 1 ? 'disabled' : ''}`}>
                <Link
                  className="page-link text-danger"
                  to={`${pp}/blog/${currentPage > 2 ? currentPage - 1 : ''}`}
                >
                {_pag[1][lang]}
                <i className='d-none'>{ isDefaultLang ? 'Anterior' : 'Previous' }</i>
                </Link>
              </li>
              {Array.from({ length: pageCount }).map((_, i) => {
                i++
                const activeClass = currentPage === i ? 'active' : ''
                const url = `${pp}/blog/${i === 1 ? '' : i}`
                  return (
                    <li className={`${activeClass}`} key={i}>
                      <Link className={`text-danger page-link`} to={url}>
                        {i}
                        <i className='d-none'>page</i>
                      </Link>
                    </li>
                  )
                })}
                <li className={` ${currentPage === currentPage.length ? 'disabled' : ''}`}>
                  <Link
                    className="page-link text-danger"
                    to={`${pp}/blog/${currentPage < 2 ? currentPage + 1 : ''}`}
                  >
                    {_pags[1][lang]}
                    <i className='d-none'>{ isDefaultLang ? 'Siguiente' : 'Next' }</i>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </SubHeader>
  )
}

export default BlogPage

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
      strapiBlogpage {
        text1
        text1_en
        text2
        text2_en
        SEO {
          title
          title_en
          description
          description_en
          keywords
          keywords_en
        }
      }
      strapiGlobalConfig {
        logo {
          localFile {
            childImageSharp {
              gatsbyImageData(sizes: "60")
            }
          }
        }
      }
      allStrapiBlogs(
        sort: {order: DESC, fields: updatedAt}
        limit: $limit
        skip: $skip
      ) {
        nodes {
        strapiId
        title
        title_en
        home
        home_en
        updatedAt
        banner {
          url
          alternativeText
        }
        SEO {
          title
          title_en
          description
          description_en
          keywords
          keywords_en
        }
      }
    }
  }
`
const _pag = {
  1: {
    en: 'Previous',
    es: 'Anterior',
  },
}
const _pags = {
  1: {
    en: 'Next',
    es: 'Siguiente',
  },
}
const _texts = {
  1: {
    en: 'More Info',
    es: 'Más Información',
  },
}