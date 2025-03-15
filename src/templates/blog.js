import React from 'react'
import { graphql, Link } from 'gatsby'
import SubHeader from '../components/sub-header'
import Seo from '../components/seo'
import { formatearFecha, formatDate } from "../helpers"

const BlogPage = ({ data, pageContext: { lang } }) => {
  const { blog } = data
  const isDefaultLang = lang === 'es'
  const pp = isDefaultLang ? '' : `/${lang}`
  const alt = blog.banner && blog.banner.alternativeText ? blog.banner.alternativeText : "Escorts, Prepagos, Putas, Dama de Compañia"
  return (
    <SubHeader lang={lang}>
      <Seo
        title={isDefaultLang ? blog.title.slice(0,70) : blog.title_en.slice(0,70) }
        description={isDefaultLang ? blog.SEO.description.slice(0,160) : blog.SEO.description_en.slice(0,160) }
        keywords={isDefaultLang ? blog.SEO.keywords : blog.SEO.keywords_en}
      />
      <div className="container pt-3 bg-danger">
        <div className="row sm-p-5 bg-danger">
          <div className="col">
            <div className="card">
              <div className="card-body bg-white">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                          <strong>
                            <Link to={`/${pp}`}>Home</Link>
                          </strong>
                        </li>
                      <li className="breadcrumb-item">
                        <strong>
                          <Link to={`${pp}/blog`}>Blogs Posts</Link>
                        </strong>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        <b>
                          Post
                        </b>
                      </li>
                    </ol>
                  </nav>
                {/** H1 TITLE */}
                <h1 className="card-title">
                    {isDefaultLang ? blog.title + ' en español' : blog.title_en + ' in english' }
                </h1>
                <div className="card-subtitle mb-5 text-muted d-flex">
                  <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="gray" className="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                  <h2 className='fs-6 ms-2'>
                    { isDefaultLang ? formatearFecha(blog.updatedAt) : formatDate(blog.updatedAt) }
                  </h2>
                </div>
                <div className="text-center">
                  {
                    blog.video_url ? 
                      (
                        <div>
                          <video className="d-block w-100" controls >
                            <source src={blog.video_url} type="video/mp4" />
                            <track default kind="captions" srcLang="" src="/caption.vtt"/>
                          </video>
                        </div>
                      ) 
                      : 
                      (
                        blog.banner && blog.banner.url ?
                        (
                          <img 
                            src={blog.banner.url} 
                            width={500}
                            height={400}
                            loading="lazy"
                            style={{ 
                              width: '100%', 
                              height:'104%', 
                              objectFit:'cover', 
                              maxWidth: '400px' }} 
                            alt={ alt }
                          /> 
                        )
                        :
                        ('')
                      )
                  }
                </div>
                <div>
                  { isDefaultLang ? 
                    <div
                      className="card-text text-justify m-sm-3 mx-auto m-md-5"
                      style={{ maxWidth: "100%",  lineHeight: "2.0" }}
                      dangerouslySetInnerHTML={{
                        __html: isDefaultLang ? blog.content : blog.content_en,
                      }}
                    >
                    </div>
                    :
                    <p className="card-text text-justify m-sm-3 mx-auto m-md-5" style={{ maxWidth: "100%",  lineHeight: "2.0" }}>
                      {isDefaultLang ? blog.content : blog.content_en}
                    </p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubHeader>
  )
}

export default BlogPage

export const query = graphql`
  query($id: String!) {
    blog: strapiBlogs(id: {eq: $id}) {
      title
      title_en
      strapiId
      content
      content_en
      updatedAt
      banner {
        url
        alternativeText
      }
      video_url
      SEO {
        description
        description_en
        title
        title_en
        keywords
        keywords_en
      }
    }
  }
`
