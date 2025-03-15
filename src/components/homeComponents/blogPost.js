import React from 'react'
import { Link } from 'gatsby'
import * as slugify from 'slugify'
import '../../styles/blog-styles.css'

const BlogHome = ({ blog, lang }) => {
  const isDefaultLang = lang === 'es'
  const pp = isDefaultLang ? '' : `/${lang}`

  return (
		<div className="container col-12 col-md-6 col-lg-4 my-3 align-middle">
			<div className="row col-12">
				<div className="col-3 d-none d-lg-block row text-center ms-n1 mt-1">
					<div className="lh-1 text-white">
						<p className="mb-n1 text-dark date">
							{blog.updatedAt.slice(0,2)}
						</p>
						<br/>
						<span className="month">
							{ isDefaultLang ? (blog.updatedAt.slice(3,7)) : (blog.updatedAt.slice(3,7)) }
						</span>
					</div>
				</div>
				<div className="mx-auto col-12 col-lg-10 text-white">
					<div className="col-12">
						<div className="card-body">
						<Link to={`${pp}/blog/${slugify(isDefaultLang ? blog.title : blog.title_en, {lower: true})}`}
							className="text-decoration-none text-white">
								<h4 className="card-title mb-3">
									{ isDefaultLang ? blog.title : blog.title_en }
								</h4>
							</Link>
							<p className="card-text lh-base" style={{ maxWidth: "100%", lineHeight: "2.0" }}>
								{ isDefaultLang ? blog.home : blog.home_en }
							</p>
						</div>
					</div>  
				</div>
			</div>
		</div>
	)
}

export default BlogHome;
