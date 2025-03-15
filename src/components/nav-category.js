import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import useCategories from '../hooks/useCategories'
import International from '../contexts/TextContext'
import '../styles/home-components.css'
import Accordion from './acordeon'

const categoryTypes = require('../category-types')
const NavCategory = ({ lang, data_Neighborhood }) => {
  const isDefaultLang = lang === 'es'
  const strapi = useCategories()
  const initialCount = 0
  const [showCategory, setCategory ]  = useState(initialCount)
  

  const Neighborhood_json= data_Neighborhood.filter(item => item.neighborhoods).map(item=>{
    const neighborhoods = item.neighborhoods ? item.neighborhoods.split('\n') : [];
  
    return {
      city: item.name,
      neighborhoods: neighborhoods.filter(neighborhood => neighborhood.trim() !== '')
    };
  })

 

  return (
    <div className="mx-auto row col-12">
      <div className="mx-auto row position-relative mb-3" style={{minHeight: '550px'}}>
        <div className="container col-12 col-md-4 mb-5 mt-5" style={{ zIndex: 100 }}>
          <div className="container col-12">
            <div className="mb-4">
              <h4 className="gothic text-white text-uppercase">
                { isDefaultLang ? 
                  <span>Las {' '}
                    <span className="text-danger">
                      {International.subtitlo.sub4[lang]}
                    </span>
                    {International.subtitlo.sub7[lang]}
                    <span className="text-success">
                      {International.subtitlo.sub2[lang]}
                    </span>
                  </span> 
                  : 
                  <span>
                    <span className="text-danger">
                      {International.subtitlo.sub4[lang]}
                    </span>
                    {International.subtitlo.sub7[lang]}
                    <span className="text-success">
                      {International.subtitlo.sub2[lang]}
                    </span>
                  </span>
                }
              </h4>
            </div>
            <div className="col-12 col-md-9">
              <hr className='border-top-0 border border-white'/>
             </div>
            <div className="col-12 col-md-10 text-white">
              <small>
                <b>{International.subtitlo.sub5[lang]}</b>
                <br/>
                {International.subtitlo.sub6[lang]}
              </small> 
              <div className="container mt-5">
                <h2>{lang=='es'?'Barrios':'Neighborhood'}</h2>
                <Accordion data={Neighborhood_json} lang={lang}/>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto col-12 col-md-7 col-lg-5 col-xl-4 mt-2" style={{ zIndex: 10 }}>
        {categoryTypes.map((categoryType, i) => {
          if (i === showCategory) {
            return (
            <div className={`col-12 category-card test-muted row`} key={i}>
              <div className="category-title">
                <div className="container my-4 row">
                  <p className="col-12 col-sm-6 col-md-7 mx-auto text-secondary text-uppercase">
                    {categoryType.title[lang]}
                  </p>
                  
                  <p className="col-5 d-none d-sm-block text-muted text-end">
                    {categoryTypes.indexOf(categoryType) + 1} / {categoryTypes.length}
                  </p>
                </div>            
            </div>
            <div className="col-12 row px-sm-4">
              {strapi[categoryType.id].map((category, i) => {
                const name = isDefaultLang ? category.name : category.name_en  
                return (                
                  <div className="col-12 col-sm-6 mx-auto col" key={i}>
                    <div className="m-auto nav-cat-border nav-cat-card" style={{ maxWidth: '320px'}}>
                      <Link to={categoryType.getPath(lang, name)} className="text-decoration-none">
                        <div className="position-relative my-2">
                          <div className="image-out bg-dark nav-cat-border" style={{height:'5em'}}>
                            <img
                              src={ strapi['avatars'].includes(category.strapiId) ? `/images/nav-cat/${category.strapiId}.jpg` : `/images/nav-cat/false.jpg` }
                              width={180}
                              height={90}
                              loading="lazy"
                              alt={ `Prepagos, escorts, putas, ${isDefaultLang ? category.name : category.name_en}`}
                              className="d-none d-sm-block nav-cat-border"
                              style={{ width: '100%', objectFit: 'cover', height: '5em', margin: '0 auto' }}
                            />
                            <div className="col-12 nav-cat-border position-absolute bottom-0 text-center">
                            <div className="my-3 row">
                              <i className="nav-cat-text">
                              <span className='d-none'>{ isDefaultLang ? 'Categoría' : 'Category' }</span>                              {name}
                              </i>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-12 nav-cat-border nav-cat-text position-absolute bottom-0"
                            style={{ zIndex: -1, minHeight: '70px'}}
                          >
                            <div className="my-3 row">
                              <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-auto text-center" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                              <i className="">
                                <span className='d-none'>{ isDefaultLang ? 'Categoría' : 'Category' }</span>{name}
                              </i>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  )
                })} 
                <div className="m-auto mt-3 row">
                  <button
                    type="button"
                    className="btn-home-blog border-danger col-8 mb-5"
                    onClick={() => { categoryTypes.indexOf(categoryType) === categoryTypes.length - 1 ? setCategory(initialCount) :setCategory(showCategory + 1)}}
                  >
                    { isDefaultLang ? 'Siguiente ' : 'Next '}
                  </button>
                </div>
              </div>
            </div>
            )} else {
              return ""
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default NavCategory



export const query = graphql`
  query {
    allStrapiCategoryCity {
      nodes {
        cards_footer
        cards_footer_en
        cards_head
        cards_head_en
        id
        name
        name_en
        neighborhoods
      }
    }
    allStrapiHomepage {
      nodes {
        home_header_image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1200, formats: [AUTO, WEBP], placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
    homepage: strapiHomepage {
      home_header_image {
        url
        localFile {
         childImageSharp {
          gatsbyImageData(width: 1200, formats: WEBP, placeholder: DOMINANT_COLOR)
          }
        }
      }
      SEO {
        title
        title_en
        description
        description_en
        keywords
        keywords_en
      }
      intro
      intro_en
      intro_subtext
      intro_subtext_en
    }
    globalConfig: strapiGlobalConfig {
      logo {
        url
      }
      phone
      smartsupp_load_time
      smartsupp_code
      telegram
    }
  }`