// src/components/Accordion.js
import React, { useState } from 'react';

const Accordion = ({ data, lang }) => {
  const [activeCity, setActiveCity] = useState(null);

  const toggleCity = (index) => {
    setActiveCity(activeCity === index ? null : index);
  };
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <h2 className="accordion-header" id={`accordion-header-${index}`}>
            <button
              className={`accordion-button ${activeCity === index ? 'active' : ''}`}
              type="button"
              onClick={() => toggleCity(index)}
            >
              {item.city}
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${activeCity === index ? 'show' : ''}`}
            id={`accordion-collapse-${index}`}
          >
            <div className="accordion-body">
              <ul>
                {item.neighborhoods.map((neighborhood, i) => (
                  <li key={i}><a href={lang=='es'?`/escorts-prepagos-putas-ubicacion-${removeAccents(item.city.toLowerCase())}/${removeAccents(neighborhood.toLowerCase().replace(/[\s_]+/g, '-'))}`:`/en/${removeAccents(item.city.toLowerCase())}-location-escorts-companions-callgirls-hookers/${removeAccents(neighborhood.toLowerCase().replace(/[\s_]+/g, '-'))}`}>{neighborhood.replace(/_/g, ' ')}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
