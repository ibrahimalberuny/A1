import { navigate } from 'gatsby'
import React from 'react'
import useCategories from '../hooks/useCategories'

const categoryTypes = require('../category-types')

const displayStyle = {
  marginTop: '80px',
  overflowY: 'scroll',
  maxHeight: '85vh',
}

const selectedFilters = {}

const FilterBox = ({ setShowFilterBox, lang, style }) => {
  const isDefaultLang = lang === 'es'
  const strapi = useCategories()

  const onInputChange = event => {
    const { checked, value } = event.target
    const dataCategoryKey = event.target.getAttribute('data-category-key')
    const  fixedValue = ['available','active','is_new'].includes(value) ? checked : value
    
    if (!selectedFilters.hasOwnProperty(dataCategoryKey)) {
      selectedFilters[dataCategoryKey] = []
    }
    if (checked) {
      selectedFilters[dataCategoryKey].push(fixedValue)
    } else {
      selectedFilters[dataCategoryKey].splice(selectedFilters[dataCategoryKey].indexOf(fixedValue), 1)
      if(selectedFilters[dataCategoryKey].length < 1 ){
        delete selectedFilters[dataCategoryKey]
      }
    }
  }

  const onFilter = () => {
    navigate(`/${isDefaultLang ? '' : lang}?filter`, {
      state: {
        filter: selectedFilters,
      },
    })
    setShowFilterBox(false)
  }

  return (
    <div
      className={`filter-card col-10 mx-auto text-white fixed-top py-5 ${style}`}
      style={displayStyle}
      role="button"
      tabIndex="0"
      onMouseLeave={() => setShowFilterBox(false)}
    >
      <div className="ui-container" style={{zIndex: '1000000'}}>
        <div className="row container mx-auto">
          <div className="row col-12">
            <div className="col-10 mx-auto col-sm-5 col-md-3 col-xl-2 m-xl-3 text-muted text-uppercase m-2">
              <p className="gothic">{ isDefaultLang ? 'DISPONIBILIDAD' : 'AVAILBILITY'}</p>
              <div className="form-check test-active mt-1" key='available'>
                <label className="form-check-label container test-active py-1" >
                <input
                  className="form-check-input test-active bg-secondary "
                  type="checkbox"
                  value='available'
                  data-category-id='Available'
                  data-category-key='available'
                  onChange={onInputChange}
                />
                  { isDefaultLang ? 'Disponbles' : 'Available'}
                </label>
              </div>
              <div className="form-check test-active mt-1" key='active'>
                <label className="form-check-label container test-active py-1" >
                  <input
                    className="form-check-input test-active bg-secondary "
                    type="checkbox"
                    value='active'
                    data-category-id='Active'
                    data-category-key='active'
                    onChange={onInputChange}
                  />
                  { isDefaultLang ? 'Activas' : 'Active'}
                </label>
              </div>
              <div className="form-check test-active mt-1" key='isNew'>
                <label className="form-check-label container test-active py-1" >
                <input
                  className="form-check-input test-active bg-secondary "
                  type="checkbox"
                  value='is_new'
                  data-category-id='isNew'
                  data-category-key='is_new'
                  onChange={onInputChange}
                />
                { isDefaultLang ? 'Nuevas' : 'New'}
                </label>
              </div>
            </div>
            {categoryTypes.map((categoryType, i) => (
              <div className="col-10 mx-auto col-sm-5 col-md-3 col-xl-2 m-xl-3 text-muted text-uppercase m-2" key={i}>
                <p className="gothic">{categoryType.title[lang]}</p>
                {strapi[categoryType.id].map((category, i) => {
                  const name = isDefaultLang ? category.name : category.name_en
                  return (
                    <div className="form-check test-active mt-1" key={i}>
                      <label className="form-check-label container test-active py-1 col-form-label-sm" >
                        <input
                          className="form-check-input test-active bg-secondary "
                          type="checkbox"
                          value={category.strapiId}
                          data-category-id={categoryType.id}
                          data-category-key={categoryType.key}
                          onChange={onInputChange}
                        />
                        {name}
                      </label>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="row text-center mt-5 col-12 mx-auto d-flex justify-content-center">
          <div className="">
          </div>
          <div className="row col-12 col-md-5 col-lg-4">
            <a
              href="/" 
              type="button"
              className="btn-secondary py-1 border mx-1" 
              style={{ width: '60px', height: '60px' }}
            >
              <svg className="fw-bold my-3 text-white" xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                <i className='d-none'>
                  cancel filter
                </i>
              </svg>
            </a>
            <a 
              href="/"
              className="btn-secondary border py-3 gothic text-uppercase text-white text-decoration-none"
              style={{ width: '200px', height: '60px' }}
              checked={false}
            >
              {isDefaultLang ? 'Reinciar Filtros' : 'Reset Filters'}
            </a>
          </div>
          <div className="d-none d-sm-block row col-12 col-md-3 mt-3 text-center">
            <p>
              {categoryTypes.length} 
              { isDefaultLang ? ' Resultados' : ' Results '}
            </p>
          </div>
          <div className="row col-12 col-md-5 col-lg-4 my-xs-3">
            <button className="btn-danger" style={{ width: '60px', height: '60px'}}>
              <svg className="my-4" xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
              </svg>
            </button>
            <button
              className="btn-danger gothic text-uppercase"
              style={{ width: '200px', height: '60px' }}
              onClick={onFilter}
            >
              {isDefaultLang ? 'Aplicar' : 'Apply'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBox