import React from "react";
import SubHeader from '../components/sub-header'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import '../styles/sub-pages.css'
import Banners from '../components/jobsCatalogLinks/banners'
import CampaignsLinks from "../components/jobsCatalogLinks/campaignsLinks";
import GirlNames from "../components/jobsCatalogLinks/girlNames";
import Articles from "../components/jobsCatalogLinks/articles";
import BannerJobs from "../components/jobsCatalogLinks/bannerJobs";
import MainBanner from "../components/jobsCatalogLinks/mainBanner";

const Jobs = ({ data, pageContext: { lang, urls, names, campaigns } }) => {
    const { strapiHomepage } = data
    const girlNames = names
    const isDefaultLang = lang === 'es'
    
    return (
    <SubHeader lang={lang}>
      <Seo
        title={ isDefaultLang ? "El mejor sitio para trabajar como prepago escort" : "The best site for working as Escort" }
        description={ isDefaultLang ? "Trabaja como prepago escort en la mejor agencia de acompañantes de lujo en Colombia, ganarás muchísimo dinero" : "Work with us in the best Colombian Escort Agency and earn a lot of money" }
        keywords={strapiHomepage.SEO.keywords}
      />
      <div className="">
        <div className="bg-dark">
          <MainBanner />
          <BannerJobs />
          <Articles />
          <Banners />
          <GirlNames girlNames={girlNames} urls={urls}/>
          <CampaignsLinks campaigns={campaigns} lang={lang} />
        </div>
      </div>
    </SubHeader>
  )
}

export default Jobs

export const query = graphql`
  query {
    strapiGlobalConfig {
      phone
      logo {
        url
      }  
    }
    strapiHomepage {
      intro
      intro_subtext
      SEO {
        title
        description
        keywords
      }
    }
  }
`