const { intersection: _intersection } = require('lodash')


export const removeHTMLFormat = ( html ) => {
    const content = html.replace(/<(?:.|\n)*?>/gm, '');
    const goodChars = content.replace(/&nbsp;/g, ' ').replace(/&iexcl;/g,' ').replace('.,',',');
    const aChars = goodChars.replace('&aacute;','á');
    const eChars = aChars.replace('&eacute;','é');
    const iChars = eChars.replace('&iacute;','í');
    const oChars = iChars.replace('&oacute;','ó');
    const uChars = oChars.replace('&uacute;','ú');
    const finalChar = uChars.replace('&ntilde;','ñ');
    return finalChar
}
	
export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}

export const formatDate = date => {
    const newDate = new Date(date)
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return newDate.toLocaleDateString('en-EN', options)
}

export const mes = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        month: 'long',
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}

export const month = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        month: 'long',
    }
    return fechaNueva.toLocaleDateString('en-US', opciones)
}

export const tiempo = fecha => {
    const fechaNueva = new Date(fecha)
    return fechaNueva.toLocaleTimeString('en-US')
}

export const shuffle = array => {
    const first_array = array.slice( 0, 150 )
    const secon_array = array.slice( 150 )
    for (var i = first_array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = first_array[i];
        first_array[i] = first_array[j];
        first_array[j] = temp;
    }
    return first_array.concat(  secon_array )
}

export const getlLinkProfiles = ( filter, profiles, cosmeticSurgeriesItems, additionalServiceItems ) => {
    const category_keys = Object.keys(filter)
    const filteredProfiles = profiles.filter(profile => {
      let isFiltered = true
      category_keys.forEach(category_key => {
        if (!filter[category_key]) 
          return
        
        const profile_category_ids = Array.isArray(profile[category_key]) ? profile[category_key].map(_ => _.id) : profile[category_key] ? [profile[category_key].id ? profile[category_key].id : profile[category_key]] : ['pendiente']
        const temp = _intersection(profile_category_ids, filter[category_key])       
        if( category_key === 'category_cosmetic_surgeries' ){
          if( cosmeticSurgeriesItems === 'Combinado' ) {
            if(temp.length !== filter[category_key].length ){
              isFiltered = false
            }
          } else {
            if (temp.length === 0 ) {
              isFiltered = false
            }
          }
        } else if( category_key === 'category_additional_services' ) {
          if( additionalServiceItems === 'Combinado' ) {
            if(temp.length !== filter[category_key].length ){
              isFiltered = false
            }
          } else {
            if (temp.length === 0 ) {
              isFiltered = false
            }
          }
        } else {
          if (temp.length === 0 ) {
            isFiltered = false
          }
        }
      })
      return isFiltered
    })
    return filteredProfiles
}