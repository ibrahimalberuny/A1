const domain = process.env.DEPLOYMENT_ENV === 'prod' ? 'lacelestina.co' : 'dev.lacelestina.co'
const gtagId = process.env.GOOGLE_TRACKING_ID

module.exports = {
  siteMetadata: {
    title: 'lacelestina_ui',
    author: `@jpalmezanoapps`,
    siteUrl: `https://${domain}`,

  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          `${gtagId ? gtagId : 'G-D77EHTNYKV'}`, // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-breakpoints',
    'gatsby-plugin-react-helmet',
    
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
          allStrapiProfiles {
            nodes {
              video_url
            }
          }
        }`,
        serialize: ({ site, allSitePage, allStrapiProfiles }) => {
          let pages = []
          allSitePage.nodes.map( node => {
            pages.push({
              url: site.siteMetadata.siteUrl + node.path,
              changefreq: `daily`,
              priority: 0.7,
            })
          })
          allStrapiProfiles.nodes.map( node => {
            if( node.video_url && node.video_url.includes(site.siteMetadata.siteUrl) ) {
              pages.push({
                url: node.video_url,
                changefreq: `daily`,
                priority: 0.7,
              })
            }
          })
          return pages
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
         icon: 'src/images/icon.png',
         cache_busting_mode: 'none',
         crossOrigin: 'anonymous',
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },    
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        //url: `https://admin.${domain}/graphql`,
        queryLimit: 1050,
        collectionTypes:
        [
          `blogs`,
          `contacts`,
          `profiles`,
          `campaigns`,
          `filters`,
          `category-age`,
          `category-additional-service`,
          `category-ass-size`,
          `category-bust-size`,
          `category-city`,
          `category-contexture`,
          `category-cosmetic-surgery`,
          `category-eyes-color`,
          `category-hair-color`,
          `category-skin-color`,
          `social-medias`
        ],
        singleTypes: 
        [ 
          `global-config`,
          `homepage`,
          `blogpage`
        ]
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        region: 'us-east-1',
        bucketName: domain,
        removeNonexistentObjects: true,
        retainObjectsPatterns: ['video/*','assets/image/*']
      },
    },
  ],

 

}
