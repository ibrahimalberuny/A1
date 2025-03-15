const { intersection: _intersection } = require('lodash')

exports.getlLinkProfiles = ( filter, profiles, cosmeticSurgeriesItems, additionalServiceItems ) => {
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