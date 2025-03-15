import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby';
import { intersection as _intersection } from 'lodash'
import Seo from '../components/seo'
import Layout from '../components/layout'
import '../styles/home.css'
//import Links from '../components/links'
import ProfileCardsWrapper from '../components/profile-cards-wrapper'
import NavCategory from '../components/nav-category'
import HomeNavigation from '../components/homeComponents/homeNavigation'
import HomeBanner from '../components/homeComponents/homeBanner'
import Line from '../components/homeComponents/line'
//import BlogHome from '../components/homeComponents/blogHome'
import { shuffle, getlLinkProfiles } from '../helpers'
import CardGrid from '../components/homeComponents/card_gird';
import Hometext from '../components/homeComponents/hometext';

const HomePage = ({ location, data, pageContext }) => {
  const { strapiHomepage, strapiGlobalConfig,allStrapiCategoryCity } = data
  //const homeLinks = pageContext.homeLinks
  
  const textCardsHome = pageContext.textCardsHome || []; //capturamos los textos para el home que vienen desde las querys globlaes en gatsby-node.js

  const cardsHomeGeneral = pageContext.cardscategory || []; // capturamos la informacion de las cards que viene desde gatsby-node.js en las querys globales
  const cardshometotal = cardsHomeGeneral.map(item => {
    const {
      home_card_link,
      home_card_link_en,
      home_card_text,
      home_card_text_en,
      home_card_image
    } = item;

    if (//validamos que para que sea un array valido en ninguna key del array debe venir el valor '...' ya que sera descartado automaticamente y se entendera que no debe publicarse
      home_card_link !== '...' &&
      home_card_link_en !== '...' &&
      home_card_text !== '...' &&
      home_card_text_en !== '...' &&
      home_card_image !== '...' &&

      home_card_image.url !== '...'
    ) {
      return {
        home_card_link,
        home_card_link_en,
        home_card_text,
        home_card_text_en,
        home_card_image: home_card_image.url
      };
    }

    return null
  })

  let cardsHomeFilter = cardshometotal.filter(item => item != null) // filtramos unicamente los objetos del array que cumplen con el criterio de validacion anterior
  let titleCardCities // creamos la variable que contendra el titulo de las cards en este caso aplica para las de las ciudades
  let cardData // creamos la variable que viajara a los componenetes que pintaran las cards
  const lang = pageContext.lang
  const url = pageContext.url
  const isDefaultLang = lang === 'es'
  const pp = isDefaultLang ? '' : '/en'
  const smartsuppId = data.strapiGlobalConfig.smartsupp_code
  const smartsuppTime = data.strapiGlobalConfig.smartsupp_load_time * 1000
  const profiles = pageContext.profiles
  const names = profiles.map(function (profile) {
    return profile.name;
  });

  let textCardsStart = textCardsHome.map(item => isDefaultLang ? item.general_text : item.general_text_en); // segun el idioma, seleccionamos el texto que debe ser asignado para renderizarse tanto al inicio como al fin
  let textCardsEnd = textCardsHome.map(item => isDefaultLang ? item.faq : item.faq_en);// segun el idioma, seleccionamos el texto que debe ser asignado para renderizarse tanto al inicio como al fin
  
if (cardsHomeGeneral.length==0) { // validamos si estamos directamente en el home y asi sabemos si debemos renderizar el titulo de las cards o simplemente lo ocultamos
  titleCardCities = ''
}else{
  titleCardCities= isDefaultLang ? 'Conoce más sobre nuestras damas de compañía.':'Learn more about our companions.'  //dependiendo del idioma asignamos el texto
}

  cardData = cardsHomeFilter.map(item => { //mapeamos el array filtrado y validamos el lenguaje para asi mismo asignar el text que debe renderizar en la card. y este array es asignado a la variable que se enviara a los componentes.
    const { home_card_image } = item;
    let home_card_link, home_card_text;

    if (isDefaultLang) {
      home_card_link = item.home_card_link;
      home_card_text = item.home_card_text;
    } else {
      home_card_link = item.home_card_link_en;
      home_card_text = item.home_card_text_en;
    }

    return {
      img: home_card_image,
      text: home_card_text,
      url: home_card_link
    };
  });



  const [selectedProfiles, setSelectedProfiles] = useState(profiles)
  const pageH1 = isDefaultLang ?
    (url ? pageContext.page_h1 : 'Catálogo de Escorts, Prepagos, Putas y Acompañantes en Colombia')
    : (url ? pageContext.page_h1 : 'Best web of Escorts, call girls, companions, hookers whores in Colombia')

  const pageH2 = isDefaultLang ?
    (url ? pageContext.page_h2 : 'La única agencia con mas de 400 escorts, prepagos, putas y acompañantes')
    : (url ? pageContext.page_h2 : 'The only agency with more than 400 ecorts and call girl')

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const search = location.state?.search || urlParams.get('search')
    const filter = location.state?.filter ? location.state?.filter : pageContext.category
    const cosmeticSurgeriesItems = location.state?.filter ? strapiGlobalConfig.cosmetic_surgeries_items_filter_type : pageContext.cosmetic_surgeries_items_filter_type
    const additionalServiceItems = location.state?.filter ? strapiGlobalConfig.additional_service_items_filter_type : pageContext.additional_service_items_filter_type

    if (!!filter) {
      console.log('has filter in home')
      console.log(filter)
    }

    if (search) {
      setSelectedProfiles(
        profiles.filter(profile => profile.name.toLowerCase().includes(search.toLowerCase()))
      )
    } else if (filter) {
      const filteredProfiles = getlLinkProfiles(filter, profiles, cosmeticSurgeriesItems, additionalServiceItems)
      setSelectedProfiles(filteredProfiles)
    } else {
      const shuffleProfiles = shuffle(profiles)
      setSelectedProfiles(shuffleProfiles)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [location])


  return (
    <>

      <Layout smartsuppId={smartsuppId} smartsuppTime={smartsuppTime} lang={lang} names={names} filtered={pageContext.url}>
        <Seo
          title={isDefaultLang ? (url ? pageContext.SEO.title.slice(0, 70) : strapiHomepage.SEO.title.slice(0, 70)) : (url ? pageContext.SEO.title_en.slice(0, 70) : strapiHomepage.SEO.title_en.slice(0, 70))}
          description={isDefaultLang ? (url ? pageContext.SEO.description.slice(0, 160) : strapiHomepage.SEO.description.slice(0, 160)) : (url ? pageContext.SEO.description_en.slice(0, 160) : strapiHomepage.SEO.description_en.slice(0, 160))}
          keywords={isDefaultLang ? (url ? pageContext.SEO.keywords : strapiHomepage.SEO.keywords) : (url ? pageContext.SEO.keywords_en : strapiHomepage.SEO.keywords_en)}
        />

        <div className="container-fluid bg-dark" style={{ zIndex: '-10' }} >
          <div className="pt-3 row">
            <div className="col-12 py-3 text-white text-center mt-5">
              <img
                src="/images/logo.png"
                alt="Logo La Celestina - Escorts, Prepagos, Putas, Dama de Compañia"
                className="text-center my-3 mt-5 home-top"
                width={80}
                height={80}
                placeholder="DOMINANT_COLOR"
                quality="80"
                loading='lazy'
              />
              <h1 className="display-6 col-10 col-sm-6 col-xl-5 px-3 px-xxl-5 mx-auto gothic text-uppercase home-top mt-5">
                {url ? pageH1 : isDefaultLang ?
                  <span>Catálogo de <span className="text-danger">Escorts</span>, Prepagos, <span className="text-danger">Putas</span> y <span className="text-danger">Acompañantes</span> en Colombia</span>
                  :
                  <span>Best web of <span className="text-danger">Escorts, Call Girls</span>, <span className="text-danger">Companions,</span> hookers whores in Colombia</span>}
              </h1>
              <div className="container">
                <div className="text-center row justify-content-center my-5">
                  <Line />
                  <HomeNavigation globalConfig={strapiGlobalConfig} />
                  <Line />
                </div>
              </div>
              <HomeBanner globalConfig={strapiGlobalConfig} h2Heading={pageH2} lang={lang} homePage={strapiHomepage} />
            </div>
          </div>
          <div className="d-none d-sm-block row py-5"></div>
          <CardGrid cards={cardData} title={titleCardCities}/>
          <Hometext text={textCardsStart} />
          <ProfileCardsWrapper loading="lazy" lang={lang} profiles={selectedProfiles} />
          <Hometext text={textCardsEnd} />
          <Link to={`${pp}/catalog`} className='text-decoration-none'>
            <p className='text-white text-center text-uppercase link-danger'>
              <strong>
                {isDefaultLang ? 'Catálogo de Chicas' : 'Girls Catalog'}
              </strong>
            </p>
          </Link>
          <div className="row py-5"></div>
          <NavCategory loading="lazy" lang={lang} data_Neighborhood={allStrapiCategoryCity.nodes} />
        </div>


      </Layout>
      <div>
      </div></>
  )
}

export default HomePage

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
    strapiGlobalConfig {
      phone
      telegram
      smartsupp_load_time
      smartsupp_code
      cosmetic_surgeries_items_filter_type
      additional_service_items_filter_type
      logo {
        url
      }
    }
    allStrapiHomepage {
      nodes {
        home_header_image {
          url
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1200, formats: [AUTO, WEBP], placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
    strapiHomepage {
      home_header_image {
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
  }
`

/*
{ !!homeLinks && homeLinks.length  > 0 ? <Links homeLinks={homeLinks} lang={lang} /> : null }
<BlogHome loading="lazy" lang={lang} />
*/