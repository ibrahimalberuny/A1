import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import * as slugify from 'slugify'

const CampaignPage = ({ data, lang }) => {
  const { profiles, name } = data.campaign
  const { campaign, cities } = data  
  const domain = 'lacelestina.co'
  let url = typeof window !== "undefined" ? window.location.pathname : "";
  const path = `https://${domain}${url}`;
  const alt = campaign.background_image && campaign.background_image.alternativeText ? campaign.background_image.alternativeText : "Escorts, Prepagos, Putas, Dama de Compañia"

  return (
    <div className="container-fluid">
      <Helmet lang="es">
        <html charSet="utf-8" lang="es"/>
        <title>La Celestina - {name.slice(0,40)}</title>
        <meta name="description" content={ `Campaigns - Aprovecha las promociones en nuestras Chicas, Prepagos, Damas de Compañía - La Celestina - ${name}` } />
        <link rel="canonical" href={path}/>
        <meta property="og:url" content={path} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={ `La Celestina - ${name}` }/>
        <meta property="og:title" content={name} />
        <meta property="og:image" content="https://lacelestina.co/images/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content='@LaCelestinagirl' />
        <meta name="twitter:title" content={name} />
        <meta name="twitter:description" content={ `La Celestina - ${name}` } />
        <meta name="twitter:image" content="https://lacelestina.co/images/logo.png" />
      </Helmet>
      <div className="row">
        <div className="col-3 d-none d-lg-block">
        </div>
        <div className="col-12 col-sm-6 mx-auto pt-3" style={{ background: `${campaign.background_color}`}}>
          <div className="position-relative">
            <img 
              className="position-absolute top-50 start-50 translate-middle d-sm-block col-12 col-sm-6 mx-auto" 
              width={400}
              height={200}
              src={campaign.background_image.url} 
              style={{ objectFit:'cover'}} 
              alt={ alt } 
              loading='lazy' 
            />
            <div className="text-center">
              <h1> La Celestina {name} </h1>
            </div>
            <div 
              className="mx-4" 
              style={{ position: 'relative', background: `${campaign.description1_bg_color}` }}
            >
              <div 
                className="p-md-3 mx-md-3 text-center" 
                dangerouslySetInnerHTML={{__html: campaign.description1}} 
              />
              </div>
            </div>
            <div className="position-relative mb-3">
              <img 
                className="m-4 position-absolute top-50 start-50 translate-middle d-sm-block col-12 col-sm-6 mx-auto" 
                src={campaign.background_image.url}
                width={400}
                height={200}
                style={{ objectFit:'cover'}} 
                alt={ alt }
                loading='lazy' 
              />
              <div 
                className="p-3 mx-4" 
                style={{ position: 'relative', top:'10px', background: `${campaign.description2_bg_color}` }}
              >
                <div 
                  className="p-md-3 mx-md-3 text-center" 
                  dangerouslySetInnerHTML={{__html: campaign.description2}} 
                />
              </div>
            </div>
          </div>
        <div className="col-3 d-none d-lg-block">
          <h2 className='d-none'>La Celestina - {name.slice(0,20)}</h2>
        </div>
        <div className="col-12 col-lg-7 row my-5 mx-auto">
          {profiles.map((camp, i) => {
            
            let alt = ''
            let link = ''
            
            if( camp.profile ){
              const name = camp.profile.name
              const city =  cities.nodes.filter( c => c.strapiId  === camp.profile.category_city)
              alt = camp.image && camp.image.alternativeText ? camp.image.alternativeText : ( name ? `Escorts ${ name }` : 'Escorts, prepagos, call girls')
              link = `${ city && city.length > 0 ? slugify(city[0].name).toLowerCase() : 'bogota' }-${  name ? slugify(name).toLowerCase() : 'fake' }`
            } else {
              alt = camp.image && camp.image.alternativeText ? camp.image.alternativeText : 'Escorts, prepagos, call girls'
              link = "/"
            }
                       
            return (
              <div className="mx-auto col-12 col-sm-7 col-md-7 col-lg-6 my-3" key={i}>
                <Link style={{ textDecoration: 'none'}} to={ camp && camp.profile && camp.profile && camp.profile.name ? `../../escorts-prepagos-putas-${ link }` : '/' } >
                  <div
                    className="border border-danger shadow-lg rounded"
                    style={{ width: '100%', minWidth: '16rem', maxWidth: '30rem', margin: '0 auto' }}
                  >
                    <img
                      src={camp.image.url}
                      className="card-img-top"
                      alt={ alt }
                      loading='lazy' 
                    />
                    <div className="card-body">
                      <h3 className="card-title text-info">
                        { camp.title }
                      </h3>
                      <div 
                        className="card-text text-dark" 
                        dangerouslySetInnerHTML={{__html: camp.description }} 
                      />
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
        
      </div>
    </div>
  )
}

export default CampaignPage

export const query = graphql`
  query($id: String!) {
    campaign: strapiCampaigns(id: {eq: $id}) {
      id
      name
      url
      background_image {
        alternativeText
        url
      }
      background_color
      description1
      description1_bg_color
      description2
      description2_bg_color
      profiles {
        id
        title
        image {
          alternativeText
          url
        }
        description
        profile {
          id
          name
          slug
          category_city
        }
      }
    },
    cities: allStrapiCategoryCity {
      nodes {
        strapiId
        name
      }
    }
  }
`
