const slugify = require('slugify')

const category_types = [
  {
    id: 'categoryCities',
    key: 'category_city',
    title: {
      en: 'Location',
      es: 'Ubicación',
    },
  },
  {
    id: 'categorySkinColors',
    key: 'category_skin_color',
    title: {
      en: 'Skin Color',
      es: 'COLOR DE PIEL',
    },
  },
  {
    id: 'categoryHairColors',
    key: 'category_hair_color',
    title: {
      en: 'Hair Color',
      es: 'COLOR DE PELO',
    },
  },
  {
    id: 'categoryEyesColors',
    key: 'category_eyes_color',
    title: {
      en: 'Eyes Color',
      es: 'COLOR DE OJOS',
    },
  },
  {
    id: 'categoryContextures',
    key: 'category_contexture',
    title: {
      en: 'Contexture',
      es: 'Contextura',
    },
  },
  {
    id: 'categoryCosmeticSurgeries',
    key: 'category_cosmetic_surgeries',
    title: {
      en: 'Cosmetic Surgeries',
      es: 'CIRUJÍAS ESTÉTICAS',
    },
  },
  {
    id: 'categoryAdditionalServices',
    key: 'category_additional_services',
    title: {
      en: 'Additional Services',
      es: 'SERVICIOS ADICIONALES',
    },
  },
  {
    id: 'categoryBustSizes',
    key: 'category_bust_size',
    title: {
      en: 'Bust Size',
      es: 'TAMAÑO DE BUSTO',
    },
  },
  {
    id: 'categoryAssSizes',
    key: 'category_ass_size',
    title: {
      en: 'Ass Size',
      es: 'TAMAÑO DE COLA',
    },
  },
  {
    id: 'categoryAges',
    key: 'category_age',
    title: {
      en: 'Age',
      es: 'AÑOS',
    },
  },
]

module.exports = category_types.map(category_type => {
  return {
    ...category_type,
    getPath: (lang, category_name) => {
      const path_keys = lang === 'es' ? 'escorts-prepagos-putas' : 'escorts-companions-callgirls-hookers'
      const catName = slugify( category_name, { lower: true,})
      const name = catName.toLowerCase()
      const title = slugify(category_type.title[lang], { lower: true,})
      return lang === 'es' ? `/${path_keys}-${title}-${name}` : `/en/${name}-${title}-${path_keys}`
    },
  }
})
