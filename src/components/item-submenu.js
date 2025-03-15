import React from 'react'
import { Link, navigate } from 'gatsby'

const Item_subemenu = ({ langs }) => {
  const selectedLangData = links.find(item => item.lang === langs);

  return (
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ width: '80%' }}>
      {selectedLangData.data.map(item => (
        <li key={item.label}>
          <Link className="dropdown-item" to={item.to}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Item_subemenu;

const links = [
  {
    "lang": "en",
    "data": [
      { "label": "Bogota", "to": "/en/bogota-location-escorts-companions-callgirls-hookers" },
      { "label": "Medellin", "to": "/en/medellin-location-escorts-companions-callgirls-hookers" },
      { "label": "Cartagena", "to": "/en/cartagena-location-escorts-companions-callgirls-hookers" },
      { "label": "Cali", "to": "/en/cali-location-escorts-companions-callgirls-hookers" },
      { "label": "Pereira", "to": "/en/pereira-location-escorts-companions-callgirls-hookers" },
    ]
  },
  {
    "lang": "es",
    "data": [
      { "label": "Bogota", "to": "/escorts-prepagos-putas-ubicacion-bogota" },
      { "label": "Medellin", "to": "/escorts-prepagos-putas-ubicacion-medellin" },
      { "label": "Cartagena", "to": "/escorts-prepagos-putas-ubicacion-cartagena" },
      { "label": "Cali", "to": "/escorts-prepagos-putas-ubicacion-cali" },
      { "label": "Pereira", "to": "/escorts-prepagos-putas-ubicacion-pereira" },
    ]
  }
]