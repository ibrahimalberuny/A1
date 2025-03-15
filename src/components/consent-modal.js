import React, { useState, useEffect } from 'react'
import International from '../contexts/TextContext'

const ConsentModal = ({ lang }) => {
  const isBrowser = () => typeof window !== 'undefined'
  const has_adult_consent_key = '_hac'
  const [isAdult, setIsAdult] = useState(true)

  useEffect(() => {
    setIsAdult ( !( isBrowser() && ( !localStorage.getItem(has_adult_consent_key) || localStorage.getItem(has_adult_consent_key) === 0 ) ) )
  }, [ isAdult ])

  const setAdultStatus = () => {
    setIsAdult(true)
    localStorage.setItem(has_adult_consent_key, 1)
  }

  return (
    <>
      { !isAdult ?
        <div className="fixed-top fixed-bottom" style={{ zIndex: 10000, backgroundColor: 'rgb(0 0 0 / 60%)' }}>
          <div className="border border-danger position-absolute top-50 start-50 translate-middle bg-dark p-4 rounded w-100" style={{ maxWidth: '350px' }}>
            <div className="row text-center text-white">
              <div className="col-12 mb-3">
                <img 
                  src="../images/logo.png" 
                  alt="Logo La Celestina" 
                  width={60} 
                  height={60} 
                  placeholder="blurred" 
                />
              </div>
              <div className="col-12">
                <h3>{International.texts.older[lang]}</h3>
              </div>
              <div className="col-12 pb-3">
                <button
                  className="btn btn-outline-danger me-5"
                  style={{ width: '55px' }}
                  onClick={setAdultStatus}
                  aria-hidden="true"
                >
                  {International.texts.yes[lang]}
                  <i className='d-none'>Sí</i>
                </button>
                <a 
                  className="btn btn-outline-danger" 
                  style={{ width: '55px' }} 
                  href="https://www.google.com"
                >
                  {International.texts.no[lang]}
                  <i className='d-none'>No</i>
                </a>
              </div>
              <div className="col-12">
                <p className="text-white">{International.texts.services[lang]}</p>
              </div>
            </div>
          </div>
        </div> : ''
      }
    </>
  )
}

export default ConsentModal