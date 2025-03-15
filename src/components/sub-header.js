import { Link } from 'gatsby'
import React from 'react'
import ConsentModal from './consent-modal'
import { Helmet } from 'react-helmet'
import Footer from './footer'
import Item_subemenu from './item-submenu'

const SubHeader = ({ lang, children }) => {
  const isDefaultLang = 'es' === lang
  const domain = 'lacelestina.co'
  let url = typeof window !== "undefined" ? window.location.pathname : "";
  const path = `https://${domain}${url}`;
    return (
    <>
      <Helmet>
        <html lang={lang} />
        <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="La Celestina" />
        <link rel="canonical" href={path}/>
        <meta property='og:url' content={path}/>
      </Helmet>
      <ConsentModal lang={lang} />
      <header className=" bg-dark navbar fixed-top navbar-expand-lg navbar-dark text-uppercase">
        <div className="container col-12">
          <Link
            className="me-3 active header-btn text-decoration-none text-uppercase text-white"
            to={isDefaultLang ? '/' : `/${lang}`}
          >
            Principal<i className='d-none'>Home</i>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="row justify-content-center col-12 ms-3">
            <div className="collapse navbar-collapse col-8" id="navbarNav">
              <div className="row">
                <ul className="navbar-nav">
                <li className="dropdown">
                    <a className="nav-link header-btn active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {isDefaultLang ? 'Escorts por Ciudad' : 'Escorts by City'}
                    </a>
                    <Item_subemenu langs={lang}/>
                  </li>
                  <li>
                    <Link className="nav-link active header-btn"
                      to={isDefaultLang ? '/jobs' : `/${lang}/jobs`}
                    >
                      {isDefaultLang ? 'Trabaja Con Nosotros' : 'Work with Us'}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link header-btn active"
                      to={isDefaultLang ? '/blog' : `/${lang}/blog`}
                    >
                      Video Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link active header-btn" to={isDefaultLang ? '/contacto-escorts-putas' : `/${lang}/escorts-callgirls-contact`}>
                      {isDefaultLang ? 'Ofertas Exclusivas' : 'Exclusive Offer'}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="d-flex ms-auto col-2">
                <Link 
                  to={isDefaultLang ? '/en' : '/'} 
                  alt="language site"
                >
                  { isDefaultLang ? 
                    <img 
                      src={`/images/language-es.png`} 
                      placeholder="none"
                      loading="lazy"
                      alt="Logo Idioma Español" 
                      width={32} 
                      height={32}
                    /> 
                    : 
                    <img
                      src={`/images/language-en.png`} 
                      placeholder="none"
                      loading="lazy"
                      alt="Logo Idioma Inglés" 
                      width={32} 
                      height={32}
                    />
                  }
                </Link>
              </div>
             </div>
            </div>
        </div>
      </header>
      <main className="mt-5">{children}</main>
      <Footer />
    </>
  )
}

export default SubHeader
