import React, { useState } from 'react'
import { Link } from 'gatsby'
import useCategories from '../hooks/useCategories'
import International from '../contexts/TextContext'
import '../styles/home-components.css'

const categoryTypes = require('../category-types')
const NavCategoryMobile = ({ lang }) => {
  const isDefaultLang = lang === 'es'
  const strapi = useCategories()
  const initialCount = 0
  const [showCategory, setCategory ]  = useState(initialCount)

  return (
    <div className="mx-auto row position-relative mb-3" style={{minHeight: '550px'}}>
        <div className="container col-12 col-md-4 mb-5 mt-5" style={{ zIndex: 100 }}>
          <div className="container col-12">
            <div className="mb-4">
              <h4 className="gothic text-white text-uppercase">
                <span className="text-success">
                    Las {International.subtitlo.sub4[lang]} {International.subtitlo.sub7[lang]} {International.subtitlo.sub2[lang]}
                </span> 
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
            </div>
            <br/>
            <a href="https://openadultdirectory.com/escorts/" target="_blank" rel="noreferrer" alt="Banner Open Adult" className="text-decoration-none text-center">
                Open Adult Directory
            </a>
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
                    {
                      strapi[categoryType.id].map((category, i) => {
                        const name = isDefaultLang ? category.name : category.name_en  
                        return (                
                          <div className="col-12 col-sm-6 mx-auto col" key={i}>
                            <div className="m-auto nav-cat-border nav-cat-card" style={{ maxWidth: '320px'}}>
                              <Link to={categoryType.getPath(lang, name)} className="text-decoration-none">                
                                <div className="bg-dark nav-cat-border my-2" style={{height:'3em'}}>                                    
                                    <div className="col-12 my-3 position-absolute bottom-0 text-center nav-cat-text">
                                        {name}
                                    </div>
                                </div>                                
                              </Link>
                            </div>
                          </div>
                        )
                      })
                    } 
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
              )
            } else {
              return ""
            }
          })}
        </div>
    </div>
    
  )
}

export default NavCategoryMobile