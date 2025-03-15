import React, { useState } from 'react'
import SubHeader from '../components/sub-header'
import Seo from '../components/seo'
import Comments from '../comments'
import '../styles/sub-pages.css'
import '../styles/profiles.css'
import ProfileDescription from '../components/ProfileDescription'
import ProfileCardsWrapper from '../components/profile-cards-wrapper'
import BlogPost from '../components/homeComponents/blogPost'
import { shuffle } from '../helpers'
import Links from '../components/links'
import HomeNavigation from '../components/homeComponents/homeNavigation'

const ProfilePage = ({ pageContext: { lang, profile, globalConfig, profiles, blog, homeLinks  } }) => {
  const isDefaultLang = lang === 'es'
  const name = profile.name
  const myName = name.split(" ", 1)
  const myLastName = name.split(" ", -1)
  const local = profile.images
  const imagenes = local
  const profiler = (profile.description && profile.description.length < 20 ) || (profile.description_en && profile.description_en.length < 20)
  const initial = 0
  const [showImages, setShowImages ]  = useState(initial)
  const shuffleProfiles = shuffle( profiles )
  const shuffleBlog = shuffle( blog )
  const footerProfiles = shuffleProfiles.slice(0,3)
  const footerBlog = shuffleBlog.slice(0,3)

  const profileLinks = profile.links === 'all' || profile.links_en === 'all' ? homeLinks : homeLinks.filter( hl => {
    const url = hl.url.replace('/','')
    if( isDefaultLang ){
      return !!profile.links && profile.links.includes(url)
    } else {
      return !!profile.links_en && profile.links_en.includes(url)
    }
  })


  return (
    <SubHeader lang={lang}>
      <Seo
        title={isDefaultLang ? `La Celestina | Prepago - ${name}` : `La Celestina | ${name} - Escort`}
        description={isDefaultLang ? profile.SEO.description + ' - ' + name : profile.SEO.description_en + ' - ' + name }
        keywords={isDefaultLang ? profile.SEO.keywords : profile.SEO.keywords_en}
      />
      <div className="bg-dark">
        <div className="mainDiv">
          <section className="col mx-auto position-relative row">
            <div className="col-12 col-lg-5 mt-5 container">
              <div className="container mt-5 col-10 me-3 mx-auto">
                <h1 className="col-10 col-lg-6 text-center model-name">
                { isDefaultLang ? 'Escort Prepago ' + myName : 'Escort ' + myName }
                  <br />
                  <span className="text-danger ms-5">
                    {myLastName[1]}
                  </span>
                </h1>
                <div className="ms-5 col-10">
                  <hr className='border-top-0 border border-white mx-auto indexZ'/>
                </div>
                <p className="text-white col-12"
                  dangerouslySetInnerHTML={{
                    __html: profiler ? 
                    isDefaultLang ? 
                      profile.SEO.description : profile.SEO.description_en 
                    : 
                    isDefaultLang ? 
                      profile.description : profile.description_en,
                  }}
                >
                </p>
                <HomeNavigation globalConfig={globalConfig} />
              </div>
            </div>
            <div className="mx-auto col-12 col-lg-6 bg-dark indexZZ">
              {
                imagenes.slice(0, 10).map((img, i) => {
                  if (i === showImages) {
                    return (
                      <div className={`col-12 row`} key={showImages.length + 1}>
                        <div className="m-auto col-12 row mt-5 girlImage">
                          <div className="position-relative" >
                            <div>
                              <div className="col-2 mt-5 position-absolute mx-auto imageSelector">
                                <div>
                                  {
                                    Array.from({
                                      length: profile.images.length,
                                    }).slice(0, 10).map((item, i) => (
                                      <button
                                        type="button"
                                        data-bs-slide-to={i}
                                        className="carrousel-profile d-block mt-3 ms-3"
                                        aria-current={i === 0 ? 'true' : null}
                                        aria-label={`Slide ${i + 1}`}
                                        onClick={() => { setShowImages(i) } }
                                        key={i}
                                      >
                                      </button>
                                    ))
                                  }
                                </div>
                              </div>
                            </div>
                            <div className="position-relative invertIndexZ">
                              { img.url.toLowerCase().includes('.gif') ? 
                                <img 
                                  src={ img.url }
                                  alt={ img.alternativeText ? img.alternativeText : `Escorts, Prepagos, Putas, Dama de Compañia, ${myName}` }
                                  className="d-block w-100 border profilePicture"
                                  width={500}
                                  height={480}
                                  loading='lazy'
                                /> :
                                <img 
                                  src={ img.url }
                                  alt={ img.alternativeText ? img.alternativeText : `Escorts, Prepagos, Putas, Dama de Compañia, ${myName}` }
                                  className="d-block w-100 border profilePicture"
                                  width={500}
                                  height={480}
                                  loading='lazy'
                                />                          
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                  } else {
                          return ""
                  }
                })
              }
              <div
                className="d-none d-lg-block mx-auto col-12 col-lg-3 bg-danger position-absolute top-0 end-0 secondIndex">
              </div>
            </div>
          </section>
        </div>
        <div className="col mx-auto position-relative row pt-5">
            <div className="col-12 container row">            
              <ProfileDescription 
                lang={lang}
                profile={profile}
                globalConfig={globalConfig}
              />
            </div>
            <Comments graphCommentCode = { globalConfig.graph_comment_code } title='title'/>
            <div className="text-white mx-auto text-center mt-2">
              <p className="fw-bold mt-2">
                { isDefaultLang ? 'Más perfiles:' : 'More profiles:' }
              </p>
            </div>
            <div className="col-12 mx-auto">
              <ProfileCardsWrapper loading="lazy" lang={lang} profiles={footerProfiles} />
            </div>
            <div className="col-12 mx-auto">
              { !!profileLinks && profileLinks.length  > 0 ? <Links homeLinks={profileLinks} lang={lang} /> : null }
            </div>            
        </div>
        <div className="col mx-auto py-4" >
          {footerBlog.slice(0, 6).map((blog, i) => {
            return (
              <BlogPost blog={blog} lang={lang} key={i} />
            )
          })}
        </div>
      </div>
    </SubHeader>
  )
}

export default ProfilePage
