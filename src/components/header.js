import { Link, navigate } from 'gatsby'
import React, { useRef, useState, useEffect } from 'react'
import FilterBox from './filter-box'
import Item_subemenu from './item-submenu'

const Header = ({ lang, names, filtered }) => {
  const isDefaultLang = 'es' === lang
  const searchInputEl = useRef()
  const [showFilterBox, setShowFilterBox] = useState(false)
  // autocomplete search bar
  const [users, setUsers] = useState([])
  const [text, setText] = useState('')
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    setUsers(names);
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [])

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  }

  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0) {
      matches = users.filter(user => {
        const regex = new RegExp(`${text}`, "gi");
        return user.match(regex)
      })
    }
    console.log('matches', matches)
    setSuggestions(matches)
    setText(text)
  }

  const onSearch = event => {
    if (event.type !== 'click' && event.key !== 'Enter')
      return
    const { value } = searchInputEl.current
    if (value) {
      navigate(`/${isDefaultLang ? '' : lang}?search=${value}`, {
        state: {
          search: value,
        },
      })
    }
    else {
      navigate('/')
    }
  }

  return (
    <>
      <header className="navbar mobile-navbar mt-1 fixed-top navbar-expand-lg navbar-dark text-uppercase">
        <div className="container col-12">
          <Link className="me-3 active header-btn text-decoration-none text-uppercase text-white" to={isDefaultLang ? '/' : `/${lang}`}>
            Principal<i className='d-none'>Home</i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
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
                  <li className="">
                    <Link className="nav-link active header-btn" to={isDefaultLang ? '/jobs' : `/${lang}/jobs`}>
                      {isDefaultLang ? 'Trabaja Con Nosotros' : 'Work with Us'}
                    </Link>
                  </li>

                  <li className="">
                    <Link className="nav-link header-btn active" to={isDefaultLang ? '/blog' : `/${lang}/blog`}>
                      Video Blog
                    </Link>
                  </li>
                  <li className="">
                    <Link className="nav-link active header-btn" to={isDefaultLang ? '/contacto-escorts-putas' : `/${lang}/escorts-callgirls-contact`}>
                      {isDefaultLang ? 'Ofertas Exclusivas' : 'Exclusive Offer'}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-8 col-lg-5 row ms-lg-5">
                {!filtered ?
                  <div className="col-8 col-xs-6 col-md-6 col-lg-7 ms-lg-5">
                    <div className="input-group" >
                      <div className="col-12">
                        <input
                          type="text" onChange={e => onChangeHandler(e.target.value)}
                          id="header-input" value={text}
                          className="ps-5 col-12 form-control search-section text-dark position-relative"
                          aria-label="search-on-header" aria-describedby="header-search"
                          ref={searchInputEl}
                          onKeyUp={onSearch}
                          onBlur={() => {
                            setTimeout(() => {
                              setSuggestions([])
                            }, 100);
                          }}
                        />
                        <div className="position-absolute col-10">
                          {suggestions && suggestions.map((suggestions, i) =>
                            <div className="filter-names" key={i} aria-hidden="true" onClick={() => onSuggestHandler(suggestions)}>
                              <p className="text-capitalize">
                                {suggestions}
                              </p>
                            </div>
                          )}
                        </div>
                        <button className="btn position-absolute top-0 end-0" type="button" id="search-button"
                          aria-label="button-on-header" aria-describedby="search-button" onClick={onSearch}>
                          <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                          </svg>
                        </button>
                      </div>
                      <div className="col">
                        <button
                          className="bg-secondary filter-btn text-white gothic nav-link position-absolute top-0 start-0 border border-white px-3"
                          onClick={() => setShowFilterBox(v => !v)}
                          onKeyUp={() => setShowFilterBox(true)}
                          type="button"
                        >
                          {isDefaultLang ? '+  Filtro' : '+  Filter'}
                        </button>
                      </div>
                    </div>
                  </div>
                  : null
                }

                <div
                  className="d-flex ms-auto col-2">
                  <Link to={isDefaultLang ? '/en' : '/'} alt="language site">
                    {isDefaultLang ?
                      <img
                        src={`/images/language-es.png`}
                        placeholder="DOMINANT_COLOR"
                        loading="lazy"
                        width={32}
                        height={32}
                        alt="Icono English - Escorts, Prepagos, Putas, Dama de Compañia"
                      />
                      :
                      <img
                        src={`/images/language-en.png`}
                        placeholder="DOMINANT_COLOR"
                        loading="lazy"
                        width="32"
                        height="32"
                        alt="Icono Español - Escorts, Prepagos, Putas, Dama de Compañia"
                      />
                    }
                    <i className='d-none'>Language Button</i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {!filtered ?
        <FilterBox lang={lang} setShowFilterBox={setShowFilterBox} style={showFilterBox ? '' : 'invisible'} />
        :
        null
      }
    </>
  )
}

export default Header