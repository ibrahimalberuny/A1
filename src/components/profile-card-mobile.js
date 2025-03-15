import React from 'react'
import PropTypes from 'prop-types'
import * as slugify from 'slugify'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import '../styles/profile-card.css'
import { removeHTMLFormat } from '../helpers'

const ProfileCardMobile = ({ 
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
        <Link to={`${pp}/${ path_url }`} className="text-decoration-none">
            <div className="container mt-3" >
                <div className="card bg-secondary">
                    <div className="row no-gutters">
                        <div className="col mx-2 my-3">
                            { is_local ?
                                <GatsbyImage 
                                    image={image_url.localFile.childImageSharp.gatsbyImageData} 
                                    alt={ alt } 
                                    loading="lazy"
                                /> 
                                :
                                <img 
                                    src={ image_url.url } 
                                    alt={ alt } 
                                    loading="lazy"
                                />
                            }
                            <div className="text-center bg-danger text-white text-uppercase">
                                <span>{is_new && active ? _texts[3][lang] : '' }</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <h3 className="card-title text-white mt-3">{name}</h3>
                            <p className={`${ active ? ( available ?  'text-success' : 'text-danger' ) : 'text-white'}`}>{ active ? ( available ? _texts[1][lang] : '') : _texts[4][lang] }</p>
                        </div>
                        <div className="col-12">
                            <div className="card-body">
                                <p className="text-white">{ `${removeHTMLFormat(lanDescription).substring(0, 120)} ...` }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
  }
  
  ProfileCardMobile.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
  }
  
  ProfileCardMobile.defaultProps = {
    name: '',
    image: '',
  }
  
  export default ProfileCardMobile
  
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