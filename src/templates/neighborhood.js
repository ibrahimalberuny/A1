import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ProfileCardsWrapper from '../components/profile-cards-wrapper'
import NavCategory from '../components/nav-category'
import Seo from '../components/seo'
import Links from '../components/links'
import '../styles/home.css'
import * as slugify from 'slugify'
import HomeNavigation from '../components/homeComponents/homeNavigation'
import Line from '../components/homeComponents/line'
import HomeBanner from '../components/homeComponents/homeBanner'
import BlogHome from '../components/homeComponents/blogHome'
import { shuffle } from '../helpers'
import Hometext from '../components/homeComponents/hometext';
import Neighborhood_links from '../components/neighborhood_links'
//import textCategoryUbication  from '../hooks/textCategoryUbication';

const Neighborhood = ({ location, data, pageContext: { lang,neighborhood, category, homeLinks, girls } }) => {
  const isDefaultLang = lang === 'es'
  let textstart = '' //inicializamos las variables que se usaran para las categorias por ciudad.
  let textend = '' //inicializamos las variables que se usaran para las categorias por ciudad.
  const { homepage, globalConfig,allStrapiCategoryCity } = data
  const smartsuppId = globalConfig.smartsupp_code
  const smartsuppTime = globalConfig.smartsupp_load_time * 1000
  const profiles = girls.filter(item=>item.neighborhood==neighborhood)
  
  //console.log('AQUI perfiles filtrados',profiles);
  let city = 'Colombia'
 let neighborhoods=category.neighborhoods? category.neighborhoods : '\n';
 let canRenderText = category.neighborhoods? true : false
 const neighborhoodstxt = neighborhoods.split('\n');

 let neighborhoodsJson={
  neighborhoods: neighborhoodstxt.filter(lugar => lugar.trim() !== '') // Filtra los lugares vacíos
};
 
 const text_category_object = allStrapiCategoryCity.nodes // limpiamos la consulta para obtener los valores que necesitamos
 const text_category = findtextcategory(text_category_object,category.name) // realizamos la consulta para encontrar si la categoria corresponde a las de city y encontrar los textos a asignar a las variables arriba inicializadas
 

  function findtextcategory(hook, categoryName) {
    for (let i = 0; i < hook.length; i++) {
      if (hook[i].name === categoryName) {
        return hook[i]; // Devuelve el objeto cuando encuentra una coincidencia en .name
      } else if (hook[i].name_en === categoryName) {
        return hook[i]; // Si no se encuentra en .name, busca en .name_en
      }
    }
    // Si no se encuentra ninguna coincidencia, devuelve null 
    return null; 
  }


  if (text_category != null) {//Si el valor es distinto a null asigna los valores correspondientes segun el lenguaje
    
    if (isDefaultLang) {// si el lenguaje por defecto devuelve un true se le asigna los textos en español
      textstart = text_category.cards_head;
      textend = text_category.cards_footer;
    } else {// si el lenjuage por defecto devuelve un false, asigna los valores en ingles.
      textstart = text_category.cards_head_en;
      textend = text_category.cards_footer_en;
    } 

  }

  const names = profiles.map(function (profile) {
    return profile.name;
  });

  let forNullTitle = homepage.SEO.title.replace(' en Colombia - La Celestina', '').replace(' in Colombia - La Celestina', '')
  let forNullDescription = homepage.SEO.description
  forNullTitle = homepage.SEO.title.replace('Escorts, ', '').replace(', Putas', '').replace(', Call Girls', '')

  forNullTitle = forNullTitle.replace('', '')

  if (category.title === 'Ubicación' || category.title === 'Location') {
    city = slugify(category.name, { lower: true })
    city = city.charAt(0).toUpperCase() + city.slice(1)
    forNullTitle = isDefaultLang ? `${forNullTitle} en ${city}` : `${forNullTitle} in ${city}`
    if (isDefaultLang) {
      forNullDescription = forNullDescription.replace('en Colombia. La mejor agencia de Colombia', `en ${city}. La mejor agencia de ${city}`)
    } else {
      forNullDescription = forNullDescription.replace('in Colombia', `in ${city}.`)
    }
  } else {
    const catNameLower = slugify(category.name, { lower: true })
    const catName = isDefaultLang ? catNameLower : catNameLower.charAt(0).toUpperCase() + catNameLower.slice(1)
    const catTitleSlug = slugify(category.title, { lower: true })
    const catTitle = catTitleSlug.replace(/-/g, ' ')

    forNullTitle = isDefaultLang ? forNullTitle.charAt(0).toUpperCase() + forNullTitle.slice(1).toLowerCase() : forNullTitle.toLowerCase()
    forNullTitle = isDefaultLang ? `${forNullTitle} ${catTitle} ${catName}` : `${catName} ${catTitle}  ${forNullTitle}`
    forNullDescription = forNullDescription.replace('La mejor agencia de Colombia', '')

    if (isDefaultLang) {
      forNullDescription = forNullDescription.replace('en Colombia', `${catTitle} ${catName} en Colombia`)
    } else {
      forNullDescription = forNullDescription.replace('The best ', `The best ${catName.toLowerCase()} ${catTitle} en Colombia`)
    }
  }

  const categoryH1 = category.title !== 'Ubicación' && category.title !== 'Location' ?
    (isDefaultLang ? (category && category.title && category.name && categoryH1_ES[category.title.toUpperCase()] ? categoryH1_ES[category.title.toUpperCase()][category.name.toUpperCase()] : '')
      : (category && category.title && category.name && categoryH1_EN[category.title.toUpperCase()] ? categoryH1_EN[category.title.toUpperCase()][category.name.toUpperCase()] : '')) : ''

  const seoTitle = category.seoTitle
  const seoDescription = category.seoDescription
  const seoKeywords = category.seoKeywords
  const seoPageH1 = category.seoPageH1 !== 'Catálogo de Escorts, Prepagos, Putas y Damas de compañía en Colombia' && category.seoPageH1 !== 'Best web of escorts, call girls, companions, hookers whores in Colombia' ? category.seoPageH1 : null
  const seoPageH2 = category.seoPageH2 !== 'La única agencia con mas de 100 escorts, prepagos, damas de compañía y acompañantes' && category.seoPageH2 !== 'The only agency with more than 100 ecorts and call girl' ? category.seoPageH2 : null
  const categoryH2 = seoPageH2 && seoPageH2 !== '...' ? seoPageH2 : 
  isDefaultLang ? `Descubre la Emoción y el placer con las prepagos `
    : `Discover the Excitement and Pleasure with Escorts in `


  const filteredProfiles = profiles.filter(profile => {
    const categoryKeys = Object.keys(profile).filter(key => key.includes('category_'))
    for (const categoryKey of categoryKeys) {
      if (Array.isArray(profile[categoryKey])) {
        for (const { id } of profile[categoryKey]) {
          if (id === category.id) {
            return true
          }
        }
      } else if (profile[categoryKey]?.id === category.id) {
        return true
      }
    }
    return false
  })
  
  
  const shuffleFilteredProfiles = filteredProfiles
 
  return (
    <Layout smartsuppId={smartsuppId} smartsuppTime={smartsuppTime} lang={lang} names={names} >
      <Seo
        title={seoTitle && seoTitle !== '...' ? seoTitle : forNullTitle.slice(0, 70)}
        description={seoDescription && seoDescription !== '...' ? seoDescription : forNullDescription.slice(0, 160)}
        keywords={seoKeywords && seoKeywords !== '...' ? seoKeywords : category.seoKeywords ? category.seoKeywords : homepage.SEO.keywords}
      />
      <div className="container-fluid bg-dark" style={{ zIndex: '-10' }}>
        <div className="pt-3">
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
              {
                seoPageH1 && seoPageH1 !== '...' ? seoPageH1 :
                  isDefaultLang ? `Catálogo de Escorts, Prepagos, Putas y Acompañantes ${categoryH1} en ${city}`
                    : `Best web of ${categoryH1} Escorts, call girls, companions, hookers whores in ${city}`
              }
            </h1>
            <div className="container">
              <div className="text-center row justify-content-center mt-4 mb-5">
                <Line />
                <HomeNavigation globalConfig={globalConfig} cityNumbers={category.phone} cityTelegram={category.telegram} />
                <Line />
              </div>
            </div>
            <HomeBanner globalConfig={globalConfig} catName={category.name} h2Heading={categoryH2} cityNumbers={category.phone} lang={lang} homePage={homepage} />
          </div>
        </div>
        <div className="d-none d-md-block row py-5"></div>
        <Hometext text={ textstart} />
        <div className="container mt-5">
        {canRenderText && (
        <h2 className='text-white'>
          {lang == 'es' ? 'Barrios' : 'Neighborhoods'}
        </h2>
      )}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          flexWrap:"wrap",
          padding: 0,
          
        }}
      >
        {neighborhoodsJson.neighborhoods.map((neighborhood, index) => (
          <Neighborhood_links 
          key={index}
      lang={lang}
      category={category}
      neighborhood={neighborhood}
      />
        ))}
      </ul>
    </div>
        <ProfileCardsWrapper loading="lazy" lang={lang} profiles={shuffleFilteredProfiles} />
        <Hometext text={textend} />
        <NavCategory loading="lazy" lang={lang} data_Neighborhood={allStrapiCategoryCity.nodes}/>
      </div>
    </Layout>
  )
}





export default Neighborhood

/*
{ !!homeLinks && homeLinks.length  > 0 ? <Links homeLinks={homeLinks} lang={lang} /> : null }
<BlogHome loading="lazy" lang={lang} />
*/




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

const categoryH1_ES = {
  "COLOR DE PIEL": {
    "BLANCA": "DE COLOR DE PIEL BLANCA",
    "MORENA": "DE COLOR DE PIEL MORENA",
    "TRIGUEÑA": "DE COLOR DE PIEL TRIGUEÑA"
  },
  "COLOR DE PELO": {
    "CASTAÑO": "DE PELO CASTAÑO",
    "NEGRO": "DE PELO NEGRO",
    "ROJO": "DE PELO ROJO",
    "RUBIO": "DE PELO RUBIO"
  },
  "COLOR DE OJOS": {
    "AZULES": "DE OJOS AZULES",
    "CAFÉS": "DE OJOS CAFÉS",
    "MIEL": "DE OJOS COLOR MIEL",
    "OSCUROS": "DE OJOS OSCUROS",
    "VERDES": "DE OJOS VERDES",
  },
  "CONTEXTURA": {
    "ATLÉTICA": "ATLÉTICAS",
    "DELGADA": "DELGADAS",
    "GRANDE": "GRANDES",
    "NORMAL": "DE CONTEXTURA NORMAL"
  },
  "CIRUJÍAS ESTÉTICAS": {
    "ABDOMEN": "CON ABDOMEN OPERADO",
    "COLA": "CON CULO OPERADO",
    "NARIZ": "CON NARIZ OPERADA",
    "NINGUNA": "NATURALES",
    "SENOS": "CON TETAS OPERADAS"
  },
  "SERVICIOS ADICIONALES": {
    "ANAL": "CON ANAL",
    "ORAL NATURAL": "CON ORAL NATURAL",
    "PAREJAS": "CON ATENCIÓN A PAREJAS",
    "TRIOS": "CON ATENCIÓN A TRÍOS",
    "BESO NEGRO": "CON BESO NEGRO",
    "LLUVIA BLANCA": "CON LLUVIA BLANCA",
    "LLUVIA DORADA": "CON LLUVIA DORADA",
    "ORAL COMPLETO": "CON ORAL COMPLETO",
    "SADO": "CON SADO",
    "SQUIRT": "CON SQUIRT",
  },
  "TAMAÑO DE BUSTO": {
    "MENOR": "DE TETAS BONITAS",
    "NORMAL": "DE TETAS BONITAS",
    "GRANDE": "TETONAS",
    "MUY GRANDE": "SUPER TETONAS",
  },
  "TAMAÑO DE COLA": {
    "BRASILEN̈A": "DE CULO BRASILEÑO",
    "DELGADA": "DE BUEN CULO",
    "GRANDE": "CULONAS",
    "NORMAL": "DE BUEN CULO",
  },
  "AÑOS": {
    "18-19": "JOVENCITAS DE 18 A 19",
    "20-25": "DE 20 A 25 AÑOS",
    "26-28": "DE 26 A 28 AÑOS",
    "MÁS DE 28": "MADURAS",
  },
}

const categoryH1_EN = {
  "SKIN COLOR": {
    "WHITE": "WHITE SKIN COLOR",
    "BROWN": "BROWN SKIN COLOR",
    "BRUNETTE": "BRUNETTE SKIN COLOR"
  },
  "HAIR COLOR": {
    "BROWN": "BROWN HAIR COLOR",
    "BLACK": "BLACK HAIR COLOR",
    "RED": "RED HAIR COLOR",
    "BLONDE": "BLONDE HAIR COLOR",
  },
  "EYES COLOR": {
    "BLUE": "BLUE EYES COLOR",
    "BROWN": "BROWN EYES COLOR",
    "HONEY": "HONEY EYES COLOR",
    "DARK": "DARK EYES COLOR",
    "GREEN": "GREEN EYES COLOR"
  },
  "CONTEXTURE": {
    "ATHLETIC": "ATHLETIC CONTEXTURE",
    "SLIM": "SLIM CONTEXTURE",
    "BIG": "BIG CONTEXTURE",
    "NORMAL": "NORMAL CONTEXTURE"
  },
  "COSMETIC SURGERIES": {
    "ABDOMEN": "ABDOMEN SURGERY",
    "TAIL": "TAIL SURGERY",
    "NOSE": "NOSE SURGERY",
    "NONE": "NO SURGERIES",
    "BREASTS": "BREASTS SURGERY"
  },
  "ADDITIONAL SERVICES": {
    "ANAL": "WITH ANAL ADDITIONAL",
    "NATURAL ORAL": "WITH NATURAL ORAL ADDITIONAL",
    "COUPLES": "WITH COUPLES ADDITIONAL",
    "THREESOME": "WITH THREESOME ADDITIONAL"
  },
  "BUST SIZE": {
    "SMALL": "SMALL BUST SIZE",
    "NORMAL": "NORMAL BUST SIZE",
    "BIG": "BIG BUST SIZE",
    "VERY BIG": "VERY BIG BUST SIZE"
  },
  "ASS SIZE": {
    "BRAZILIAN": "BRAZILIAN ASS SIZE",
    "NORMAL": "NORMAL ASS SIZE",
    "BIG": "BIG ASS SIZE",
    "SLIM": "SLIM ASS SIZE"
  },
  "AÑOS": {
    "18-19": "18 to 19 YEARS OLD",
    "20-25": "20 to 25 YEARS OLD",
    "26-28": "26 to 28 YEARS OLD",
    "MORE THAN 28": "MATURE",
  },
}