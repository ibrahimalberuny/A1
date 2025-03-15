import { graphql, useStaticQuery } from 'gatsby'

const useProfiles = () => {
  const result = useStaticQuery(graphql`
    query {
      fullInfo: allStrapiProfiles(sort: {order: ASC, fields: rank}, limit: 50) {
        nodes {
          id
          name
          slug
          available
          description
          description_en
          is_new
          active
          images {
            url
            alternativeText
            caption
            localFile {
              childImageSharp {
                gatsbyImageData(width: 360, formats: [AUTO, WEBP], placeholder: DOMINANT_COLOR)
              }
            }
          }
          category_city {
            id
            name
            name_en
          }
          category_skin_color {
            id
          }
          category_hair_color {
            id
          }
          category_eyes_color {
            id
          }
          category_bust_size {
            id
          }
          category_ass_size {
            id
          }
          category_age {
            id
          }
          category_contexture {
            id
          }
          category_cosmetic_surgeries {
            id
          }
          category_additional_services {
            id
          }
        }
      }

      partialInfo: allStrapiProfiles(sort: {order: ASC, fields: rank}, limit: 650, skip: 50) {
        nodes {
          id
          name
          slug
          available
          description
          description_en
          is_new
          active
          images {
            alternativeText
            caption
            url
          }
          category_city {
            id
            name
            name_en
          }
          category_skin_color {
            id
          }
          category_hair_color {
            id
          }
          category_eyes_color {
            id
          }
          category_bust_size {
            id
          }
          category_ass_size {
            id
          }
          category_age {
            id
          }
          category_contexture {
            id
          }
          category_cosmetic_surgeries {
            id
          }
          category_additional_services {
            id
          }
        }
      }
    }
  `)
  const merge = []
  return merge.concat(result.fullInfo.nodes, result.partialInfo.nodes)
}

export default useProfiles
