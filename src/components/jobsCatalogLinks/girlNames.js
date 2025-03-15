import { Link } from 'gatsby'
import React from 'react'

export default function girlNames({ girlNames, urls, lang }) {
	const isDefaultLang = lang === 'es'
	const homeLinks = urls

	return (
    <div>
			<div className="container col-12 row pb-4 mx-auto">
				<h4 className="text-center text-white mb-4">
					{ isDefaultLang ? 'Nuestros Perfiles' : 'Our Profiles' }
				</h4>
				{girlNames.map(name => (
					<div className="col-4 col-md-3 col-xl-2" key={name}>
						<Link
						className="link-info text-decoration-none"
							to={ isDefaultLang ? homeLinks[`${name}`] : homeLinks[`${name}`] }
						>
							<p className="ms-4">
								{name}
							</p>
						</Link>
					</div>
				))}
			</div>
    </div>
  )
}
