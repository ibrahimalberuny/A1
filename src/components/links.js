import { Link } from 'gatsby';
import React from 'react'
import * as slugify from 'slugify'

const Links = ({ homeLinks, lang }) => {
  const isDefaultLang = lang === 'es'
  const pp = isDefaultLang ? '' : '/en'

  return ( 
    <div className="container mx-auto row my-2 justify-content-center border" style={{  backgroundColor: '#0f0f0f'}}>
      {homeLinks.map((hl, i) => (
        <div className="col-12 col-md-6 col-lg-4 text-center" key={i}>
          <Link className="text-decoration-none" key={hl} to={hl.url}>
            <p className="text-white pt-2">{hl.link}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default Links;

export const FotterLinks = ({ homeLinks }) => {
  return ( 
    <>
      {homeLinks.map((hl) => (
        <div className="col-4 col-md-3 col-xl-2">
          <Link className="link-info text-decoration-none" key={hl} to={hl.url}>
            <p className="ms-4">{hl.link}</p>
          </Link>
        </div>
      ))}
    </>
  );
}

export const GirlLinks = ({ name, homeLinks, lang }) => {
  const isDefaultLang = lang === 'es'
  return ( 
    <>
      <Link to={ isDefaultLang ? homeLinks[`${name}`] : homeLinks[`${name}`] } className="link-info text-decoration-none">
        <p className="ms-4">
          {name}
        </p>
      </Link>
    </>
  );
}

export const CampaignLinks = ({ name, url, lang }) => {
  const isDefaultLang = lang === 'es'
  return ( 
    <>
      <a href={ isDefaultLang ? `campaign/${url}` : `campaign/${url}` } className="link-info text-decoration-none">
        <p className="ms-4">
          {name} { isDefaultLang ? '(inactiva)' : '(inactive)' }
        </p>  
      </a>  
    </>    
  );
}  

export const BlogLinks = ({ blog, lang }) => {
  const isDefaultLang = lang === 'es'
  const pp = isDefaultLang ? '' : `/${lang}`

	return (
		<div className="col-4 col-md-3 col-xl-2">
			<Link 
				to={`${pp}/blog/${slugify(isDefaultLang ? blog.title : blog.title_en, {lower: true})}`}
				className="link-info text-decoration-none"
			>
				<p className="card-title mb-3">
					{ isDefaultLang ? blog.title : blog.title_en }
				</p>
			</Link>
		</div>
	)
}