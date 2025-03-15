import React from 'react';

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
const Neighborhood_links = ({ index, lang, category, neighborhood }) => {
  return (
    <li key={index} style={{
      margin: "10px",
      background: "none",
      border: "1px solid red",
      padding: "5px 20px",
      textDecoration: "none",
    }}>
      <a style={{
        color: "white",
        textDecoration: "none",
        fontStyle: "bold"
      }} href={lang === 'es' ? `/escorts-prepagos-putas-ubicacion-${removeAccents(category.name.toLowerCase())}/${removeAccents(neighborhood.toLowerCase().replace(/[\s_]+/g, '-'))}` : `/en/${removeAccents(category.name.toLowerCase())}-location-escorts-companions-callgirls-hookers/${removeAccents(neighborhood.toLowerCase().replace(/[\s_]+/g, '-'))}`}>
        {neighborhood.replace(/_/g, ' ')}
      </a>
    </li>
  );
};

export default Neighborhood_links;