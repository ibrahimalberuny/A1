import React from 'react'
import SubHeader from '../components/sub-header'
import Seo from '../components/seo';
import { CampaignLinks, GirlLinks, BlogLinks, FotterLinks } from '../components/links';
import Links from '../components/links'


const Catalog = ({ pageContext: { lang, urls, names, nodes, campaigns, homeLinks } }) => {
	const girlLinks = urls
	const girlNames = names
	const isDefaultLang = lang === 'es'

	return (
    <>
			<SubHeader lang={lang}>
				<Seo
					title={ isDefaultLang ? "Nuestro Catálogo de Chicas, Prepagos, Escorts y Damas de Compañía | La Celestina" : "Our Girls, Escort and Companions Catalog | La Celestina" }
					description={ isDefaultLang ? "Trabaja como prepago escort en la mejor agencia de acompañantes de lujo en Colombia, Chequea nuestro catálogo de chicas " : "Work with us in the best Colombian Escort Agency - Check our Girls Catalog" }
					keywords={ isDefaultLang ? "Escorts, Chicas, Damas de compañía, Putas en Bogotá y Colombia" : "Whores, Girls, Companions, Prepaid Girls in Bogotá and Colombia" }
				/>
				<div className='bg-black py-4'>
					<div className='container'>
						<h1 className='text-danger'>
							{ isDefaultLang ? 'Catálogo de Nuestras Chicas' : 'Our Girls Catalog' }
						</h1>
					</div>
					<div className="py-4 container col-12 row pb-4 mx-auto">
						<h2 className="text-center text-white mb-4">
							{ isDefaultLang ? 'Nuestros Perfiles' : 'Our Profiles' }
						</h2>
						{girlNames.map(name => (
							<div className="col-4 col-md-3 col-xl-2">
								<GirlLinks
									name={name}
									homeLinks={girlLinks}
								/>
							</div>
						))}
						<div className="container col-12 row pb-4 mx-auto" >							
							{ isDefaultLang ? 
								<h3 className="text-center text-white mb-4">Enlaces del sitio</h3> 
								: 
								null
							}
							{campaigns.map(camp => (
								<div className="col-4 col-md-3 col-xl-2" key={camp.id}>
									<CampaignLinks
										name={camp.name}
										url={camp.url}
									/>
								</div>
							))}
						</div>
			      		<div className="container col-12 row pb-4 mx-auto" >							
							<h2 className="text-center text-white mb-4">
								{ isDefaultLang ? 'Nuestros Posts' : 'Our Blog Posts' }
							</h2>
							{nodes.map((blog, i) => {
								return (
									<BlogLinks blog={blog} lang={lang}/>
									)
							})}
						</div>

						<div className="container col-12 row pb-4 mx-auto" >							
							<h2 className="text-center text-white mb-4">
								{ isDefaultLang ? 'Exclusivos' : 'Exclusives' }
							</h2>
							
							{ !!homeLinks && homeLinks.length  > 0 ? <FotterLinks homeLinks={homeLinks} /> : null }
						</div>

					</div>
				</div>
			</SubHeader>
    </>
  )
}

export default Catalog

//