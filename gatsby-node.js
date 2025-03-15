
const path = require(`path`)
const slugify = require('slugify')
const categoryTypes = require('./src/category-types')
const locales = [{ lang: 'es', isDefaultLang: true }, { lang: 'en' }]
const domain = process.env.DEPLOYMENT_ENV === 'prod' ? 'lacelestina.co' : 'dev.lacelestina.co'
const { getlLinkProfiles } = require('./src/utils')
const { createRedirect } = require('gatsby');

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const { createRedirect } = actions;

    // get templates
    const Jobs = path.resolve('./src/templates/jobs.js')
    const homePage = path.resolve('./src/templates/home.js')
    const contactPage = path.resolve('./src/templates/contact.js')
    const profilePage = path.resolve('./src/templates/profile.js')
    const blogPage = path.resolve('./src/templates/blog.js')
    const blogListPage = path.resolve('./src/templates/blog-list.js')
    const categoryViewPage = path.resolve('./src/templates/category.js')
    const NeighborhoodViewPage = path.resolve('./src/templates/neighborhood.js')
    const campaignViewPage = path.resolve('./src/templates/campaign.js')
    const catalogViewPage = path.resolve('./src/templates/catalog.js')

    // get results from graphql
    console.log('start main graphql query')
    console.log(`start time: ${new Date()}`)

    await delay(1000);
    console.log("try globlas")
    const globals = await query_globals(graphql)

    await delay(1000);
    console.log("try profiles_page_0000_50")
    const profiles_page_0000_50 = await query_profile_page_0000_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0050_50")
    const profiles_page_0050_50 = await query_profile_page_0050_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0100_50")
    const profiles_page_0100_50 = await query_profile_page_0100_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0150_50")
    const profiles_page_0150_50 = await query_profile_page_0150_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0200_50")
    const profiles_page_0200_50 = await query_profile_page_0200_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0250_50")
    const profiles_page_0250_50 = await query_profile_page_0250_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0300_50")
    const profiles_page_0300_50 = await query_profile_page_0300_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0350_50")
    const profiles_page_0350_50 = await query_profile_page_0350_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0400_50")
    const profiles_page_0400_50 = await query_profile_page_0400_50(graphql)

    setTimeout(() => console.log("try profiles_page_0450_50"), 1000);
    const profiles_page_0450_50 = await query_profile_page_0450_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0500_50")
    const profiles_page_0500_50 = await query_profile_page_0500_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0550_50")
    const profiles_page_0550_50 = await query_profile_page_0550_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0600_50")
    const profiles_page_0600_50 = await query_profile_page_0600_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0650_50")
    const profiles_page_0650_50 = await query_profile_page_0650_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0700_50")
    const profiles_page_0700_50 = await query_profile_page_0700_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0750_50")
    const profiles_page_0750_50 = await query_profile_page_0750_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0800_50")
    const profiles_page_0800_50 = await query_profile_page_0800_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0850_50")
    const profiles_page_0850_50 = await query_profile_page_0850_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0900_50")
    const profiles_page_0900_50 = await query_profile_page_0900_50(graphql)

    await delay(1000);
    console.log("try profiles_page_0950_50")
    const profiles_page_0950_50 = await query_profile_page_0950_50(graphql)

    await delay(1000);
    console.log("try profiles_page_1000_50")
    const profiles_page_1000_50 = await query_profile_page_1000_50(graphql)

    await delay(1000);
    console.log("try profiles_page_1050_50")
    const profiles_page_1050_50 = await query_profile_page_1050_50(graphql)

    await delay(1000);
    console.log("try profiles_page_1100_50")
    const profiles_page_1100_50 = await query_profile_page_1100_50(graphql)

    await delay(1000);
    console.log("try profiles_page_1150_50")
    const profiles_page_1150_50 = await query_profile_page_1150_50(graphql)

    await delay(1000);
    console.log("try profile_page_1200_50")
    const profiles_page_1200_50 = await query_profile_page_1200_50(graphql)

    await delay(1000);
    console.log("try profile_page_1250_50")
    const profiles_page_1250_50 = await query_profile_page_1250_50(graphql)

    await delay(1000);
    console.log("try profile_page_1300_50")
    const profiles_page_1300_50 = await query_profile_page_1300_50(graphql)

    await delay(1000);
    console.log("try profile_page_1350_50")
    const profiles_page_1350_50 = await query_profile_page_1350_50(graphql)

    await delay(1000);
    console.log("try profile_page_1400_50")
    const profiles_page_1400_50 = await query_profile_page_1400_50(graphql)

    await delay(1000);
    console.log("try profile_page_1450_50")
    const profiles_page_1450_50 = await query_profile_page_1450_50(graphql)

    console.log(`ent time: ${new Date()}`)

    if (globals.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, globals.errors)
        return
    }
    if (profiles_page_0000_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0000_50.errors)
        return
    }
    if (profiles_page_0050_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0050_50.errors)
        return
    }
    if (profiles_page_0100_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0100_50.errors)
        return
    }
    if (profiles_page_0150_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0150_50.errors)
        return
    }
    if (profiles_page_0200_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0200_50.errors)
        return
    }
    if (profiles_page_0250_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0250_50.errors)
        return
    }
    if (profiles_page_0300_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0300_50.errors)
        return
    }
    if (profiles_page_0350_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0350_50.errors)
        return
    }
    if (profiles_page_0400_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0400_50.errors)
        return
    }
    if (profiles_page_0450_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0450_50.errors)
        return
    }
    if (profiles_page_0500_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0500_50.errors)
        return
    }
    if (profiles_page_0550_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0550_50.errors)
        return
    }
    if (profiles_page_0600_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0600_50.errors)
        return
    }
    if (profiles_page_0650_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0650_50.errors)
        return
    }
    if (profiles_page_0700_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0700_50.errors)
        return
    }
    if (profiles_page_0750_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0750_50.errors)
        return
    }
    if (profiles_page_0800_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0800_50.errors)
        return
    }
    if (profiles_page_0850_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0850_50.errors)
        return
    }
    if (profiles_page_0900_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0900_50.errors)
        return
    }
    if (profiles_page_0950_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_0950_50.errors)
        return
    }
    if (profiles_page_1000_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_1000_50.errors)
        return
    }
    if (profiles_page_1050_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_1050_50.errors)
        return
    }
    if (profiles_page_1100_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_1100_50.errors)
        return
    }
    if (profiles_page_1150_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_1150_50.errors)
        return
    }
    if (profiles_page_1200_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_1200_50.errors)
        return
    }
    if (profiles_page_1250_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_1250_50.errors)
        return
    }
    if (profiles_page_1300_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_1300_50.errors)
        return
    }
    if (profiles_page_1350_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_1350_50.errors)
        return
    }
    if (profiles_page_1400_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_1400_50.errors)
        return
    }
    if (profiles_page_1450_50.errors) {
        reporter.panicOnBuild(`There was an error loading profiles`, profiles_page_1450_50.errors)
        return
    }

    /**
     * Prepare profiles, blogs page
     */
    const { strapiBlogpage, allStrapiCampaigns, allStrapiFilters, allStrapiBlogs, strapiGlobalConfig } = globals.data
    
    const { allStrapiProfiles: allProfiles000050 } = profiles_page_0000_50.data
    const { allStrapiProfiles: allProfiles005050 } = profiles_page_0050_50.data
    const { allStrapiProfiles: allProfiles010050 } = profiles_page_0100_50.data
    const { allStrapiProfiles: allProfiles015050 } = profiles_page_0150_50.data
    const { allStrapiProfiles: allProfiles020050 } = profiles_page_0200_50.data
    const { allStrapiProfiles: allProfiles025050 } = profiles_page_0250_50.data
    const { allStrapiProfiles: allProfiles030050 } = profiles_page_0300_50.data
    const { allStrapiProfiles: allProfiles035050 } = profiles_page_0350_50.data
    const { allStrapiProfiles: allProfiles040050 } = profiles_page_0400_50.data
    const { allStrapiProfiles: allProfiles045050 } = profiles_page_0450_50.data
    const { allStrapiProfiles: allProfiles050050 } = profiles_page_0500_50.data
    const { allStrapiProfiles: allProfiles055050 } = profiles_page_0550_50.data
    const { allStrapiProfiles: allProfiles060050 } = profiles_page_0600_50.data
    const { allStrapiProfiles: allProfiles065050 } = profiles_page_0650_50.data
    const { allStrapiProfiles: allProfiles070050 } = profiles_page_0700_50.data
    const { allStrapiProfiles: allProfiles075050 } = profiles_page_0750_50.data
    const { allStrapiProfiles: allProfiles080050 } = profiles_page_0800_50.data
    const { allStrapiProfiles: allProfiles085050 } = profiles_page_0850_50.data
    const { allStrapiProfiles: allProfiles090050 } = profiles_page_0900_50.data
    const { allStrapiProfiles: allProfiles095050 } = profiles_page_0950_50.data
    const { allStrapiProfiles: allProfiles100050 } = profiles_page_1000_50.data
    const { allStrapiProfiles: allProfiles105050 } = profiles_page_1050_50.data
    const { allStrapiProfiles: allProfiles110050 } = profiles_page_1100_50.data
    const { allStrapiProfiles: allProfiles115050 } = profiles_page_1150_50.data
    const { allStrapiProfiles: allProfiles120050 } = profiles_page_1200_50.data
    const { allStrapiProfiles: allProfiles125050 } = profiles_page_1250_50.data
    const { allStrapiProfiles: allProfiles130050 } = profiles_page_1300_50.data
    const { allStrapiProfiles: allProfiles135050 } = profiles_page_1350_50.data
    const { allStrapiProfiles: allProfiles140050 } = profiles_page_1400_50.data
    const { allStrapiProfiles: allProfiles145050 } = profiles_page_1450_50.data

    const strapiProfiles = []
    const allStrapiProfiles = {}
    allStrapiProfiles.nodes = strapiProfiles.concat(
        allProfiles000050.nodes, allProfiles005050.nodes, allProfiles010050.nodes,
        allProfiles015050.nodes, allProfiles020050.nodes, allProfiles025050.nodes,
        allProfiles030050.nodes, allProfiles035050.nodes, allProfiles040050.nodes,
        allProfiles045050.nodes, allProfiles050050.nodes, allProfiles055050.nodes,
        allProfiles060050.nodes, allProfiles065050.nodes, allProfiles070050.nodes,
        allProfiles075050.nodes, allProfiles080050.nodes, allProfiles085050.nodes,
        allProfiles090050.nodes, allProfiles095050.nodes, allProfiles100050.nodes,
        allProfiles105050.nodes, allProfiles110050.nodes, allProfiles115050.nodes,
        allProfiles120050.nodes, allProfiles125050.nodes, allProfiles130050.nodes,
        allProfiles135050.nodes, allProfiles140050.nodes, allProfiles145050.nodes
    )

    console.log('Cantidad de allProfiles000050.length', allProfiles000050.nodes.length )
    console.log('Cantidad de allProfiles005050.length', allProfiles005050.nodes.length )
    console.log('Cantidad de allProfiles010050.length', allProfiles010050.nodes.length )
    console.log('Cantidad de allProfiles015050.length', allProfiles015050.nodes.length )
    console.log('Cantidad de allProfiles020050.length', allProfiles020050.nodes.length )
    console.log('Cantidad de allProfiles025050.length', allProfiles025050.nodes.length )
    console.log('Cantidad de allProfiles030050.length', allProfiles030050.nodes.length )
    console.log('Cantidad de allProfiles035050.length', allProfiles035050.nodes.length )
    console.log('Cantidad de allProfiles040050.length', allProfiles040050.nodes.length )
    console.log('Cantidad de allProfiles045050.length', allProfiles045050.nodes.length )
    console.log('Cantidad de allProfiles050050.length', allProfiles050050.nodes.length )
    console.log('Cantidad de allProfiles055050.length', allProfiles055050.nodes.length )
    console.log('Cantidad de allProfiles060050.length', allProfiles060050.nodes.length )
    console.log('Cantidad de allProfiles065050.length', allProfiles065050.nodes.length )
    console.log('Cantidad de allProfiles070050.length', allProfiles070050.nodes.length )
    console.log('Cantidad de allProfiles075050.length', allProfiles075050.nodes.length )
    console.log('Cantidad de allProfiles080050.length', allProfiles080050.nodes.length )
    console.log('Cantidad de allProfiles085050.length', allProfiles085050.nodes.length )
    console.log('Cantidad de allProfiles090050.length', allProfiles090050.nodes.length )
    console.log('Cantidad de allProfiles095050.length', allProfiles095050.nodes.length )
    console.log('Cantidad de allProfiles100050.length', allProfiles100050.nodes.length )
    console.log('Cantidad de allProfiles105050.length', allProfiles105050.nodes.length )
    console.log('Cantidad de allProfiles110050.length', allProfiles110050.nodes.length )
    console.log('Cantidad de allProfiles115050.length', allProfiles115050.nodes.length )
    console.log('Cantidad de allProfiles120050.length', allProfiles120050.nodes.length )
    console.log('Cantidad de allProfiles125050.length', allProfiles125050.nodes.length )
    console.log('Cantidad de allProfiles130050.length', allProfiles130050.nodes.length )
    console.log('Cantidad de allProfiles135050.length', allProfiles135050.nodes.length )
    console.log('Cantidad de allProfiles140050.length', allProfiles140050.nodes.length )
    console.log('Cantidad de allProfiles145050.length', allProfiles145050.nodes.length )
    console.log('Cantidad de allStrapiProfiles.length', allStrapiProfiles.nodes.length )
    console.log('Cantidad de allStrapiBlogs.length', allStrapiBlogs.nodes.length )

    const { nodes } = allStrapiBlogs

    locales.forEach(({ lang, isDefaultLang }) => {
        // set path prefix
        const path_prefix = isDefaultLang ? '' : `/${lang}`
        const path_keys = isDefaultLang ? 'escorts-prepagos-putas' : 'escorts-companions-callgirls-hookers'


        /**
         * create individual profile pages
         */
        let urls = {}
        let names = []
        console.log('**************************************************************************')
        console.log(`Create ${isDefaultLang ? 'spanish' : 'english'} individual profile pages`)
        console.log(`start time: ${new Date()}`)
        const homeLinks = allStrapiFilters.nodes.map(node => ({ link: isDefaultLang ? node.link : node.link_en, url: isDefaultLang ? `/${slugify(node.link, { lower: true, })}` : `/${slugify(node.link_en, { lower: true, })}` }))

        allStrapiProfiles.nodes.forEach((profile) => {
            const id = profile.id
            const name = profile.name
            const category_city = profile.category_city
            const catCity = category_city && category_city.name ? (isDefaultLang ? slugify(category_city.name, { lower: true }) : slugify(category_city.name_en, { lower: true })) : 'Bogota'
            const city = catCity.toLowerCase()
            const path = `${path_prefix}/${path_keys}-${city}-${slugify(name, { lower: true })}`
            urls[`${name}`] = path
            names = names.concat(name)

            if (isDefaultLang) {
                if (profile.video_url && profile.video_url.includes(`https://${domain}`)) {
                    urls[`Video ${name}`] = profile.video_url.includes(' ') ? profile.video_url.replace(' ', '%20').replace(/ /g, '%20') : profile.video_url
                    names = names.concat(`Video ${name}`)
                }
            } else {
                if (profile.video_url && profile.video_url.includes(`https://${domain}`)) {
                    urls[`${name} video`] = profile.video_url.includes(' ') ? profile.video_url.replace(' ', '%20').replace(/ /g, '%20') : profile.video_url
                    names = names.concat(`${name} video`)
                }
            }

            createPage({
                path: path,
                component: profilePage,
                context: {
                    id,
                    lang,
                    profile: profile,
                    globalConfig: strapiGlobalConfig,
                    profiles: allStrapiProfiles.nodes.slice(0, 100),
                    blog: allStrapiBlogs.nodes.slice(0, 100),
                    homeLinks
                },
            })
        })
        console.log(`end time: ${new Date()}`)
        console.log('**************************************************************************')

        /**
         * create blog listing page with pagination
         */
        const totalBlogs = nodes.length
        const { limit } = strapiBlogpage
        const pageCount = Math.ceil(totalBlogs / limit)

        console.log(`Create ${isDefaultLang ? 'spanish' : 'english'} blog listing page with pagination`)
        console.log(`start time: ${new Date()}`)
        Array.from({ length: pageCount }).forEach((_, i) => {
            const path = `${path_prefix}/blog/${i === 0 ? '' : i + 1}`
            createPage({
                path,
                component: blogListPage,
                context: {
                    lang,
                    skip: i * limit,
                    limit,
                    pageCount,
                    currentPage: i + 1,
                },
            })
        })
        console.log(`end time: ${new Date()}`)
        console.log('**************************************************************************')

        /**
         * create individual blog page
         */
        console.log(`Create ${isDefaultLang ? 'spanish' : 'english'} individual blog page`)
        console.log(`start time: ${new Date()}`)
        allStrapiBlogs.nodes.forEach(({ id, title, title_en }) => {
            const path = `${path_prefix}/blog/${slugify(isDefaultLang ? title : title_en, {
                lower: true,
            })}`

            createPage({
                path,
                component: blogPage,
                context: {
                    id,
                    lang,
                },
            })
        })
        console.log(`end time: ${new Date()}`)
        console.log('**************************************************************************')

        /**
         * create home page
         */
        console.log(`create ${isDefaultLang ? 'spanish' : 'english'} home page`)
        console.log(`start time: ${new Date()}`)
        createPage({
            path: isDefaultLang ? '/' : lang,
            component: homePage,
            context: {
                lang,
                homeLinks,
                profiles: allStrapiProfiles.nodes,
                cardscategory: globals.data.cardsHome.nodes, // enviamos el contenido de las cards para el home
                textCardsHome: globals.data.textCardsHome.nodes// enviamos el contenido de textos para le home en este caso los que van antes y depsues de las cards.
            },
        })

        createPage({
            path: isDefaultLang ? '/contacto-escorts-putas' : 'en/escorts-callgirls-contact',
            component: contactPage,
            context: {
                lang,
            },
        })

        console.log(`end time: ${new Date()}`)
        console.log('**************************************************************************')


        console.log(`create ${isDefaultLang ? 'spanish' : 'english'} filter pages`)
        console.log(`start time: ${new Date()}`)
        const looksLike = {}
        allStrapiFilters.nodes.forEach(({
            page_h1, page_h1_en, page_h2, page_h2_en, link, link_en, SEO,
            category_age, category_city, category_skin_color, category_hair_color,
            category_ass_size, category_bust_size, category_eyes_color, category_contexture, category_cosmetic_surgeries,
            category_additional_services, cosmetic_surgeries_items_filter_type, additional_service_items_filter_type
        }) => {
            const tempContext = {}
            tempContext.category = {}
            tempContext.url = isDefaultLang ? `/${slugify(link, { lower: true, })}` : `/${slugify(link_en, { lower: true, })}`
            tempContext.lang = lang
            tempContext.page_h1 = isDefaultLang ? page_h1 : page_h1_en
            tempContext.page_h2 = isDefaultLang ? page_h2 : page_h2_en
            tempContext.link = isDefaultLang ? link : link_en
            tempContext.SEO = SEO
            tempContext.cosmetic_surgeries_items_filter_type = cosmetic_surgeries_items_filter_type
            tempContext.additional_service_items_filter_type = additional_service_items_filter_type
            if (category_age) tempContext.category.category_age = [category_age.id]
            if (category_city) tempContext.category.category_city = [category_city.id]
            if (category_skin_color) tempContext.category.category_skin_color = [category_skin_color.id]
            if (category_hair_color) tempContext.category.category_hair_color = [category_hair_color.id]
            if (category_ass_size) tempContext.category.category_ass_size = [category_ass_size.id]
            if (category_bust_size) tempContext.category.category_bust_size = [category_bust_size.id]
            if (category_eyes_color) tempContext.category.category_eyes_color = [category_eyes_color.id]
            if (category_contexture) tempContext.category.category_contexture = [category_contexture.id]
            if (category_cosmetic_surgeries && category_cosmetic_surgeries.length > 0) tempContext.category.category_cosmetic_surgeries = category_cosmetic_surgeries.map(c => c.id)
            if (category_additional_services && category_additional_services.length > 0) tempContext.category.category_additional_services = category_additional_services.map(c => c.id)

            const filteredProfiles = getlLinkProfiles(
                tempContext.category,
                allStrapiProfiles.nodes,
                tempContext.cosmetic_surgeries_items_filter_type,
                tempContext.additional_service_items_filter_type
            )
            tempContext.profiles = filteredProfiles

            looksLike[`${link}`] = filteredProfiles.map(fp => {
                const name = fp.name
                const category_city = fp.category_city
                const catCity = category_city && category_city.name ? (isDefaultLang ? slugify(category_city.name, { lower: true }) : slugify(category_city.name_en, { lower: true })) : 'Bogota'
                const city = catCity.toLowerCase()
                const path = `${path_prefix}/${path_keys}-${city}-${slugify(name, { lower: true })}`
                return { name, path }
            })

            createPage({
                path: tempContext.url,
                component: homePage,
                context: tempContext,
            })
        })
        console.log(`end time: ${new Date()}`)
        console.log('**************************************************************************')

        /**
         * create individual category page
         */
        console.log(`create ${isDefaultLang ? 'spanish' : 'english'} category pages`)
        console.log(`start time: ${new Date()}`)
        let categories = {}
        categories['categoryAges'] = globals.data.categoryAges.nodes
        categories['categoryAssSizes'] = globals.data.categoryAssSizes.nodes
        categories['categoryBustSizes'] = globals.data.categoryBustSizes.nodes
        categories['categoryCities'] = globals.data.categoryCities.nodes
        categories['categoryCosmeticSurgeries'] = globals.data.categoryCosmeticSurgeries.nodes
        categories['categoryContextures'] = globals.data.categoryContextures.nodes
        categories['categoryEyesColors'] = globals.data.categoryEyesColors.nodes
        categories['categorySkinColors'] = globals.data.categorySkinColors.nodes
        categories['categoryHairColors'] = globals.data.categoryHairColors.nodes
        categories['categoryAdditionalServices'] = globals.data.categoryAdditionalServices.nodes
        categoryTypes.forEach(categoryType => {

            categories[categoryType.id].forEach(category => {
                const name = isDefaultLang ? category.name : category.name_en
                const title = slugify(categoryType.title[lang], { lower: true })
                const path = categoryType.getPath(lang, name)

                const seoTitle = isDefaultLang ? category.SEO.title : category.SEO.title_en
                const seoDescription = isDefaultLang ? category.SEO.description : category.SEO.description_en
                const seoKeywords = isDefaultLang ? category.SEO.keywords : category.SEO.keywords_en
                const seoPageH1 = isDefaultLang ? category.page_h1 : category.page_h1_en
                const seoPageH2 = isDefaultLang ? category.page_h2 : category.page_h2_en

                const key = `${title.replace(/-/g, ' ')} ${name.toLowerCase()}`
                urls[`${key}`] = path
                names = names.concat(`${key}`)

                createPage({
                    path,
                    component: categoryViewPage,
                    context: {
                        lang,
                        category: {
                            id: category.strapiId,
                            title: categoryType.title[lang],
                            name,
                            seoTitle,
                            seoDescription,
                            seoKeywords,
                            seoPageH1,
                            seoPageH2,
                            neighborhoods: category.neighborhoods ? category.neighborhoods : null,
                            phone: category.phone ? category.phone : null,
                            telegram: category.telegram ? category.telegram : null
                        },
                        homeLinks,
                        girls: allStrapiProfiles.nodes
                    },
                })




            })
        })
        console.log(`end time: ${new Date()}`)
        console.log('**************************************************************************')
        /**
         * create neighborhoods page --Only Spanish--
         */

        const convertNeighborhoods = (data) => {
            return data.map(item => {
                const neighborhoodsArray = item.neighborhoods ? item.neighborhoods.split('\n').filter(barrio => barrio.trim() !== '') : [];

                return {
                    city: item.name,
                    city_en: item.name_en,
                    neighborhoods: neighborhoodsArray,
                    data_site: item
                };
            });
        };

        let cities = globals.data.categoryCities.nodes
        const transformedData = convertNeighborhoods(cities);

        transformedData.forEach(item => {
            item.neighborhoods.forEach(neighborhood => {
                // Función para quitar tildes de una cadena
                const removeAccents = (str) => {
                    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                };                
                let path = `/escorts-prepagos-putas-ubicacion-${removeAccents(item.city.toLowerCase())}/${removeAccents(neighborhood.toLowerCase().replace(/[\s_]+/g, '-'))}`;
                let path_en = `/en/${removeAccents(item.city.toLowerCase())}-location-escorts-companions-callgirls-hookers/${removeAccents(neighborhood.toLowerCase().replace(/[\s_]+/g, '-'))}`;
                
                if(isDefaultLang){
                    createPage({
                        path,
                        component: NeighborhoodViewPage,
                        context: {
                            lang: 'es',
                            neighborhood, 
                            category: {
                                id: item.data_site.strapiId, 
                                title: item.data_site.SEO.title,
                                name: item.city,
                                seoTitle: item.data_site.SEO.title,
                                seoDescription: item.data_site.SEO.description,
                                seoKeywords: item.data_site.SEO.keywords,
                                seoPageH1: item.data_site.page_h1,
                                seoPageH2: item.data_site.page_h2,
                                neighborhoods: item.data_site.neighborhoods ? item.data_site.neighborhoods : null,
                                phone: item.data_site.phone ? item.data_site.phone : null,
                                telegram: item.data_site.telegram ? item.data_site.telegram : null
                            },
                            homeLinks,
                            girls: allStrapiProfiles.nodes
                        },
                    })
                } else {
                    createPage({
                        path:path_en,
                        component: NeighborhoodViewPage,
                        context: {
                            lang: 'en',
                            neighborhood, 
                            category: {
                                id: item.data_site.strapiId,
                                title: item.data_site.SEO.title_en,
                                name: item.city,
                                seoTitle: item.data_site.SEO.title_en,
                                seoDescription: item.data_site.SEO.description_en,
                                seoKeywords: item.data_site.SEO.keywords_en,
                                seoPageH1: item.data_site.page_h1_en,
                                seoPageH2: item.data_site.page_h2_en,
                                neighborhoods: item.data_site.neighborhoods ? item.data_site.neighborhoods : null,
                                phone: item.data_site.phone ? item.data_site.phone : null,
                                telegram: item.data_site.telegram ? item.data_site.telegram : null
                            },
                            homeLinks,
                            girls: allStrapiProfiles.nodes
                        },
                    })
                }
                                
                setTimeout(() => console.log("sleep 1s"), 1000);
            })
        })

        console.log('Create neighborhood page --->');

        /**
         * create Jobs page --Only Spanish--
         */
        console.log(`Create ${isDefaultLang ? 'spanish' : 'english'}  Jobs page`)
        console.log(`start time: ${new Date()}`)
        const campaigns = allStrapiCampaigns.nodes.map(campaign => (
            { id: campaign.id, url: campaign.url, name: campaign.name }
        ))
        createPage({
            path: isDefaultLang ? '/jobs' : 'en/jobs',
            component: Jobs,
            context: {
                lang,
                urls,
                names,
                campaigns: isDefaultLang ? campaigns : [],
            },
        })
        console.log(`end time: ${new Date()}`)

        /**
        * create Catalog page
        */
        console.log(`Create ${isDefaultLang ? 'spanish' : 'english'} Catalog page`)
        console.log(`start time: ${new Date()}`)
        createPage({
            path: isDefaultLang ? '/catalog' : `${lang}/catalog`,
            component: catalogViewPage,
            context: {
                lang,
                urls,
                names,
                nodes,
                campaigns: isDefaultLang ? campaigns : [],
                homeLinks
            },
        })
        console.log(`end time: ${new Date()}`)
        console.log('**************************************************************************')

        /**
         * create campaign pages
         */
        console.log(`create ${isDefaultLang ? 'spanish' : 'english'} campaign pages`)
        console.log(`start time: ${new Date()}`)
        if (isDefaultLang) {
            allStrapiCampaigns.nodes.forEach(({ id, url }) => {
                const path = `${path_prefix}/campaign/${slugify(url, {
                    lower: true,
                })}`

                createPage({
                    path,
                    component: campaignViewPage,
                    context: {
                        id,
                        lang,
                    },
                })
            })
        }
        console.log(`end time: ${new Date()}`)
        console.log('**************************************************************************')

    })


    //create redirects
    createRedirect({
        fromPath: '/profiles/ubicacion/Cali',
        toPath: '/',
        redirectInBrowser: true,
        isPermanent: true,
    });

    createRedirect({
        fromPath: '/en/profiles/location/Cali',
        toPath: '/',
        redirectInBrowser: true,
        isPermanent: true,
    });

    createRedirect({
        fromPath: '/profiles/anos/Mas-de-28',
        toPath: '/',
        redirectInBrowser: true,
        isPermanent: true,
    });

    createRedirect({
        fromPath: '/profiles/ubicacion/Bogota',
        toPath: '/escorts-prepagos-putas-ubicacion-bogota',
        redirectInBrowser: true,
        isPermanent: true,
    });

    createRedirect({
        fromPath: '/profiles/ubicacion/Medellin',
        toPath: '/',
        redirectInBrowser: true,
        isPermanent: true,
    });

    createRedirect({
        fromPath: '/profiles/ubicacion/Cartagena',
        toPath: '/',
        redirectInBrowser: true,
        isPermanent: true,
    });

    createRedirect({
        fromPath: '/en/profiles/location/Bogota',
        toPath: '/',
        redirectInBrowser: true,
        isPermanent: true,
    });

    createRedirect({
        fromPath: '/en/profiles/location/Cartagena',
        toPath: '/',
        redirectInBrowser: true,
        isPermanent: true,
    });

}

exports.sourceNodes = ({ actions }) => {
    console.log('into source nodes')
    const { createTypes } = actions
    const typeDefs = `
    type StrapiFilters implements Node {
      link: String
      link_en: String
      page_h1: String
      page_h1_en: String
      page_h2: String
      page_h2_en: String
      cosmetic_surgeries_items_filter_type: String
      additional_service_items_filter_type: String
      SEO: Seo
      category_age: Category
      category_city: Category
      category_skin_color: Category
      category_hair_color: Category
      category_ass_size: Category
      category_bust_size: Category
      category_eyes_color: Category
      category_contexture: Category
      category_cosmetic_surgeries: [Category]
      category_additional_services: [Category]
    }
    type Category implements Node {
      id: String
      name: String
      name_en: String
    }
    type Seo implements Node {
      title: String
      title_en: String
      keywords: String
      keywords_en: String
      description: String
      description_en: String
    }
  `
    createTypes(typeDefs)
}

const query_profile_page_0000_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:0, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    neighborhood 
                    images {
                        url
                        alternativeText
                        caption
                        localFile {
                            childImageSharp {
                            gatsbyImageData(width: 320, formats: WEBP, placeholder: DOMINANT_COLOR)
                            }
                        }
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0050_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:50, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0100_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:100, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0150_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:150, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0200_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:200, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0250_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:250, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0300_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:300, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0350_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:350, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0400_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:400, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0450_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:450, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0500_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:500, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0550_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:550, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0600_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:600, limit:50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0650_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:650, limit:50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0700_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:700, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0750_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:750, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0800_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:800, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0850_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:850, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0900_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:900, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_0950_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:950, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_1000_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:1000, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_1050_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:1050, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_1100_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:1050, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_1150_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:1050, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_1200_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:1200, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_1250_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:1250, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_1300_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:1300, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_1350_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:1350, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_1400_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:1400, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_profile_page_1450_50 = graphql => {
    return graphql(`
        query {
            allStrapiProfiles(sort: {order: ASC, fields: rank}, skip:1450, limit: 50) {
                nodes {
                    id
                    age
                    height
                    name
                    rank
                    slug
                    available
                    description
                    description_en
                    is_new
                    active
                    rate_one_hour
                    rate_two_hours
                    rate_five_hours
                    services
                    services_en
                    video_url
                    images {
                        url
                        alternativeText
                        caption
                    }
                    category_city {
                        id
                        name
                        name_en
                        phone
                    }
                    category_skin_color {
                        id
                        name
                        name_en
                    }
                    category_hair_color {
                        id
                        name
                        name_en
                    }
                    category_eyes_color {
                        id
                        name
                        name_en
                    }
                    category_bust_size {
                        id
                        name
                        name_en
                        cup_size
                    }
                    category_ass_size {
                        id
                        name
                        name_en
                    }
                    category_age {
                        id
                    }
                    category_contexture {
                        id
                        name
                        name_en
                    }
                    category_cosmetic_surgeries {
                        id
                        name
                        name_en
                    }
                    category_additional_services {
                        id
                        name
                        name_en
                    }
                    languages
                    languages_en
                    interest
                    interest_en
                    food
                    food_en
                    drinks
                    drinks_en
                    dress_style
                    dress_style_en
                    description
                    description_en
                    phone_number
                    SEO {
                        title
                        title_en
                        description
                        description_en
                        keywords
                        keywords_en
                    }
                    links
                    links_en
                }
            }
        }`
    )
}

const query_globals = graphql => {
    return graphql(`
    query {
        strapiGlobalConfig {
            cop_to_usd_rate
            phone
            graph_comment_code
        }        
        allStrapiFilters {
            nodes {
                id
                page_h1
                page_h1_en
                page_h2
                page_h2_en
                link
                link_en
                cosmetic_surgeries_items_filter_type
                additional_service_items_filter_type
                SEO {
                    title
                    title_en
                    keywords
                    keywords_en
                    description
                    description_en
                }
                category_age {
                    id
                    name
                    name_en
                }
                category_city{
                    id
                    name
                    name_en
                }
                category_skin_color{
                    id
                    name
                    name_en
                }
                category_hair_color{
                    id
                    name
                    name_en
                }
                category_ass_size{
                    id
                    name
                    name_en
                }
                category_bust_size{
                    id
                    name
                    name_en
                }
                category_eyes_color{
                    id
                    name
                    name_en
                }
                category_contexture{
                    id
                    name
                    name_en
                }
                category_cosmetic_surgeries {
                    id
                    name
                    name_en
                }
                category_additional_services {
                    id
                    name
                    name_en
                }
            }
        }
        strapiBlogpage {
            limit
        }
        allStrapiCampaigns {
            nodes {
                name
                id
                url
            }
        }
        allStrapiBlogs {
            nodes {
                id
                title
                title_en
                home
                home_en
                updatedAt(locale: "es", formatString: "DD,MMM")
            }
        }
        categoryAges: allStrapiCategoryAge {
            nodes {
                strapiId
                name
                name_en
                page_h1
                page_h1_en
                page_h2
                page_h2_en
                SEO {
                    title
                    title_en
                    description
                    description_en
                    keywords
                    keywords_en
                }
            }
        }
        categoryAssSizes: allStrapiCategoryAssSize {
            nodes {
                strapiId
                name
                name_en
                page_h1
                page_h1_en
                page_h2
                page_h2_en
                SEO {
                    title
                    title_en
                    description
                    description_en
                    keywords
                    keywords_en
                }
            }
        }
        categoryBustSizes: allStrapiCategoryBustSize {
            nodes {
                strapiId
                name
                name_en
                page_h1
                page_h1_en
                page_h2
                page_h2_en
                SEO {
                    title
                    title_en
                    description
                    description_en
                    keywords
                    keywords_en
                }
            }
        }
        categoryCities: allStrapiCategoryCity {
            nodes {
              strapiId
              name
              name_en
              phone
              telegram
              page_h1
              page_h1_en
              page_h2
              page_h2_en
              SEO {
                title
                title_en
                description
                description_en
                keywords
                keywords_en
              } 
              neighborhoods            
            }
          }
          categoryCosmeticSurgeries: allStrapiCategoryCosmeticSurgery {
            nodes {
                strapiId
                name
                name_en
                page_h1
                page_h1_en
                page_h2
                page_h2_en
                SEO {
                    title
                    title_en
                    description
                    description_en
                    keywords
                    keywords_en
                }
            }
        }
        categoryContextures: allStrapiCategoryContexture {
            nodes {
                strapiId
                name
                name_en
                page_h1
                page_h1_en
                page_h2
                page_h2_en
                SEO {
                    title
                    title_en
                    description
                    description_en
                    keywords
                    keywords_en
                }
            }
        }
        categoryEyesColors: allStrapiCategoryEyesColor {
            nodes {
                strapiId
                name
                name_en
                page_h1
                page_h1_en
                page_h2
                page_h2_en
                SEO {
                    title
                    title_en
                    description
                    description_en
                    keywords
                    keywords_en
                }
            }
        }
        categorySkinColors: allStrapiCategorySkinColor {
            nodes {
                strapiId
                name
                name_en
                page_h1
                page_h1_en
                page_h2
                page_h2_en
                SEO {
                    title
                    title_en
                    description
                    description_en
                    keywords
                    keywords_en
                }
            }
        }
        categoryHairColors: allStrapiCategoryHairColor {
            nodes {
                strapiId
                name
                name_en
                page_h1
                page_h1_en
                page_h2
                page_h2_en
                SEO {
                    title
                    title_en
                    description
                    description_en
                    keywords
                    keywords_en
                }
            }
        }
        categoryAdditionalServices: allStrapiCategoryAdditionalService {
            nodes {
                strapiId
                name
                name_en
                page_h1
                page_h1_en
                page_h2
                page_h2_en
                SEO {
                    title
                    title_en
                    description
                    description_en
                    keywords
                    keywords_en
                }
            
            }
        }
        cardsHome:allStrapiCategoryCity {
            nodes {
              home_card_link
              home_card_link_en
              home_card_text
              home_card_text_en
              home_card_image {
                url
              }
            }
          }
        textCardsHome:allStrapiHomepage {
            nodes {
              faq
              faq_en
              general_text
              general_text_en
            }
          }
    }
`)
}