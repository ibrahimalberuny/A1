import { Link } from 'gatsby'
import React from 'react'

export default function campaignsLinks({ campaigns, lang }) {
    const isDefaultLang = lang === 'es'

    return (
    <div>
        <div className="container col-12 row pb-4 mx-auto" >
            { isDefaultLang ? 
                <h4 className="text-center text-white mb-4">Enlaces del sitio</h4> 
                : 
                null 
            }
            {campaigns.map(c => (
                <div className="col-4 col-md-3 col-xl-2" key={c.url}>
                  <Link
                    className="link-info text-decoration-none"
                    to={ isDefaultLang ? `/campaign/${c.url}` : `/campaign/${c.url}` }
                  >
                    <p className="ms-4">
                      {c.name} { isDefaultLang ? '(inactiva)' : '(inactive)' }
                    </p>
                  </Link>
                </div>
            ))}
        </div>
    </div>
  )
}
