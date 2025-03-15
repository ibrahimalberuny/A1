import React from 'react'
import PropTypes from 'prop-types'
import * as slugify from 'slugify'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import '../styles/profile-card.css'
import { removeHTMLFormat } from '../helpers'

const ProfileCard = ({ 
  lang, 
  description_en, 
  description, 
  name, 
  image_url, 
  is_local, 
  available, 
  is_new, 
  active, 
  city 
}) => {
  
  const isDefaultLang = lang === 'es'
  const pp = isDefaultLang ? '' : '/en'
  const catCity = city && city.name ? ( isDefaultLang ? slugify(city.name,  { lower: true }) : slugify(city.name_en,  { lower: true }) ) : 'Bogota'
  const pcity = catCity.charAt(0).toUpperCase() + catCity.slice(1)
  const lanDescription = isDefaultLang ? description : description_en 
  const alt = image_url.alternativeText ? image_url.alternativeText : `Prepagos, escorts, putas, ${name}`
  let path_url = ''
  if( isDefaultLang ){
    path_url = `escorts-prepagos-putas-${pcity.toLowerCase()}-${ slugify(name, { lower: true }) }`
  } else {
    path_url = `escorts-companions-callgirls-hookers-${pcity.toLowerCase()}-${ slugify(name, { lower: true }) }`
  }

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="m-auto profile-card" style={{ maxWidth: '320px' }}>
        <Link to={`${pp}/${ path_url }`} className="text-decoration-none">
          <div className="position-relative ">
            <div className="image-out">
              { is_local ?
                <GatsbyImage 
                  image={image_url.localFile.childImageSharp.gatsbyImageData} 
                  width={320}
                  height={225}
                  alt={ alt } 
                  loading="lazy"
                  style={{ width: '100%', objectFit: 'cover', height: '20em', margin: '0 auto' }} 
                /> 
                :
                <img 
                  src={ image_url.url } 
                  width={320}
                  height={225}
                  alt={ alt } 
                  loading="lazy"
                  style={{ width: '100%', objectFit: 'cover', height: '20em', margin: '0 auto' }}
                />
              }
              <div className="profile-name col-12 fs-4 pt-2">
                <div className=" col-8 gothic">
                  <h3>
                    {name.split(" ", 1)} 
                    <span className="text-danger ms-1">
                      {name.split(" ", -1)[1]}
                    </span>
                  </h3>
                </div>
                <div className="col-4 gothic ms-1" >
                  {
                    pcity.length > 10 ? <h4>{pcity}</h4> : <h4>{pcity}</h4>
                  }
                  
                </div>
              </div>
              <div className="col-3 position-absolute top-0 mx-4 mt-3">
                <div className="text-center rounded-3 bg-danger text-white text-uppercase">
                  <span>
                    {is_new && active ? _texts[3][lang] : '' }
                  </span>
                </div>
              </div>
              <span>
                { active ? ( available ? <span className="available-light rounded-circle"></span> : '' ) : <span className="unavailable-light rounded-circle"></span> }
                { active ? ( available ? <span className="available">{_texts[1][lang]}</span> : '') : <span className="available">{_texts[4][lang]}</span> }
              </span>
            </div>
            <div className="container profile-card2">
              <div className="row p-3">
               <h3 className="gothic col-8 text-uppercase">  
                  {name}
               </h3>
               <div className="col-3 position-absolute top-0 end-0 mx-5 mt-4">
                <div className="hover-new bg-danger">
                  <span>
                    { is_new && active ? _texts[3][lang] : '' }
                  </span>
                </div>
              </div>
              </div>
              <div className="mt-1 px-3">
                <p>{ `${removeHTMLFormat(lanDescription).substring(0,130)} ...` }</p>
              </div>
            </div>
            <div className="col-12 btn-text position-absolute bottom-0 text-center"
              style={{ zIndex: -1, minHeight: '70px' }}
            >
              <h3 className="my-4">
                {_texts[2][lang]}
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

ProfileCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
}

ProfileCard.defaultProps = {
  name: '',
  image: '',
}

export default ProfileCard

const _texts = {
  1: {
    en: 'Available',
    es: 'Disponible',
  },
  2: {
    en: 'More Info',
    es: 'Más Información',
  },
  3: {
    en: 'New',
    es: 'Nueva',
  },
  4: {
    en: 'Unavailable',
    es: 'No Disponible',
  },
}