import config from '@config/config'

const pageHeadHelper = {}

pageHeadHelper.title = (title) => {
    const pageTitle = (title) ? title : config.app.title

    return pageTitle
}

pageHeadHelper.metaData = (description, robots, title) => {
    let metadata = {}

    metadata.description = (description) ? description : config.app.description
    metadata.robots = (robots) ? robots : config.app.robots
    metadata.title = (title) ? title : config.app.title

    return metadata
}

pageHeadHelper.openGraph = (desc, img, locale, title, type) => {
    let openGraph = {}

    openGraph.description = (desc) ? desc : config.app.description
    openGraph.image = img
    openGraph.locale = (locale) ? locale : config.app.locale
    openGraph.title = (title) ? title : config.app.title
    openGraph.type = (type) ? type : 'website'

    return openGraph

}

pageHeadHelper.taxonomy = (audiencetype, audienceJourneyStage, audienceSpeciality, usage, channel, branding, usageWith, validFrom, validTo, countriesApprovedToUse, format, regulatoryId, contentAccessLevel, businessUnit, therapyArea, brand, indication, productLifecycle, category, theme) => {
    let taxonomy = {}

    taxonomy.audiencetype = audiencetype;
    taxonomy.audienceJourneyStage = audienceJourneyStage;
    taxonomy.audienceSpeciality = audienceSpeciality;
    taxonomy.usage = usage;
    taxonomy.channel = channel;
    taxonomy.branding = branding;
    taxonomy.usageWith = usageWith;
    taxonomy.validFrom = validFrom;
    taxonomy.validTo = validTo;
    taxonomy.countriesApprovedToUse = countriesApprovedToUse;
    taxonomy.regulatoryId = regulatoryId;
    taxonomy.contentAccessLevel = contentAccessLevel;
    taxonomy.businessUnit = businessUnit;
    taxonomy.therapyArea = therapyArea;
    taxonomy.brand = brand;
    taxonomy.indication = indication;
    taxonomy.format = format;
    taxonomy.productLifecycle = productLifecycle;
    taxonomy.category = category;
    taxonomy.theme = theme;

    return taxonomy;
}

export default pageHeadHelper