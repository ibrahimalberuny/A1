import { graphql, useStaticQuery } from 'gatsby'

const useCategories = () => {
  const result = useStaticQuery(graphql`
  query {
    categoryAges: allStrapiCategoryAge {
      nodes {
        strapiId
        name
        name_en
      }
    }
    categoryAssSizes: allStrapiCategoryAssSize {
      nodes {
        strapiId
        name
        name_en
      }
    }
    categoryBustSizes: allStrapiCategoryBustSize {
      nodes {
        strapiId
        name
        name_en
      }
    }
    categoryCities: allStrapiCategoryCity {
      nodes {
        strapiId
        name
        name_en
      }
    }
    categoryCosmeticSurgeries: allStrapiCategoryCosmeticSurgery {
      nodes {
        strapiId
        name
        name_en
      }
    }
    categoryContextures: allStrapiCategoryContexture {
      nodes {
        strapiId
        name
        name_en
      }
    }
    categoryEyesColors: allStrapiCategoryEyesColor {
      nodes {
        strapiId
        name
        name_en
      }
    }
    categorySkinColors: allStrapiCategorySkinColor {
      nodes {
        strapiId
        name
        name_en
      }
    }
    categoryHairColors: allStrapiCategoryHairColor {
      nodes {
        strapiId
        name
        name_en
      }
    }
    categoryAdditionalServices: allStrapiCategoryAdditionalService {
      nodes {
        strapiId
        name
        name_en
      }
    }
    allFile(filter: {relativeDirectory: {glob: "*nav-cat*"}}) {
      nodes {
        name
      }
    }
  }`
)  

  let categories = {}
  categories['categoryAges'] = result.categoryAges.nodes
  categories['categoryAssSizes'] = result.categoryAssSizes.nodes
  categories['categoryBustSizes'] = result.categoryBustSizes.nodes
  categories['categoryCities'] = result.categoryCities.nodes
  categories['categoryCosmeticSurgeries'] = result.categoryCosmeticSurgeries.nodes
  categories['categoryContextures'] = result.categoryContextures.nodes
  categories['categoryEyesColors'] = result.categoryEyesColors.nodes
  categories['categorySkinColors'] = result.categorySkinColors.nodes
  categories['categoryHairColors'] = result.categoryHairColors.nodes
  categories['categoryAdditionalServices'] = result.categoryAdditionalServices.nodes
  categories['avatars'] = result.allFile.nodes.map(function(x) {
    return x.name;
 });
    
  return categories
}

export default useCategories
