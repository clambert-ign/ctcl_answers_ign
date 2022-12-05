import config from '@config/config'
import { templateTypes } from './acousticMappings'

/** @type {*} */
const acousticHelper = {}

/**
 * Acoustic Content API URL
 *
 * @returns {string} Acoustic Content API URL
 */
acousticHelper.apiUrl = `${config.acoustic.domain}/api/${config.acoustic.contentHubID}`

/**
 * List of defined library paths in config file.
 *
 * @return {Array<String>}
 */
acousticHelper.libraryPaths = config.acoustic.libraries.map((lib) => lib.path)

/**
 * Returns related libraryId from libraryPaths, defined in config file.
 *
 * @param {string} path ex : '/en-gb'
 * @return {string} libraryId
 */
acousticHelper.libraryIdByPath = (path) => config.acoustic.libraries.find((lib) => lib.path === path).libraryId

/**
 * Returns website configuration endpoint by related libraryId
 *
 * @param {string} path ex : '/en-gb'
 * @return {string} websiteConfigurationIdPath
 */
acousticHelper.getWebsiteConfigurationUrl = (path) => {
  // Get requested library by path
  const libraryId = acousticHelper.libraryIdByPath(path)

  // Build query string
  const parameters = [
    'fq=classification:(content)',
    'fq=libraryId:(' + libraryId + ')',
    'fq=type:(Website Configuration)',
    'q=*:*' // If last parameter ends with with bracket somehow it disappears. that's why we moved "q=*:*" parameter at the end.
  ]
  const searchParameters = parameters.join('&')
  return config.acoustic.searchPath + searchParameters
}

// /**
//  * Used by developers when this item is referenced in a delivery application or website.
//  * The URL is not active until the item status is published.
//  *
//  * @param {string} uuid
//  * @return {string} Delivery URL
//  */
// acousticHelper.getDeliveryUrl = (uuid) => config.acoustic.deliveryPath + '/' + uuid

/**
 * Used by developers when this item is referenced in a delivery application or website,
 * and when the content and all the items referenced by the content are required in one API call.
 * The URL is not active until the item status is published.
 *
 * @param {string} uuid
 * @return {string} Delivery rendering context URL
 */
acousticHelper.getDeliveryRenderingContextUrl = (uuid) => config.acoustic.deliveryRenderingContextPath + '/' + uuid

// /**
//  * Used by developers when this item is referenced in an application that carries out item authoring.
//  * Authentication to the authoring APIs is required to use this URL.
//  *
//  * @param {string} uuid
//  * @return {string} Authoring URL
//  */
// acousticHelper.getAuthoringUrl = (uuid) => config.acoustic.authoringPath + '/' + uuid

/**
 * Returns array of sitemap object list
 * [{pageName, urlSlug, uuid, content array as placeholder}]
 *
 * @param {Array<Object>} siteMapResponse Api response
 * @return {Array<Object>} siteMap
 */
acousticHelper.extractContentList = (siteMapResponse, path) => {
  const siteMap = []
  if (siteMapResponse?.value?.elements?.sitemapItem) {
    siteMapResponse?.value?.elements?.sitemapItem?.values.forEach((siteMapItem) => {
      siteMap.push({
        pageName: siteMapItem?.elements?.pageName?.value || null,
        urlSlug: path + siteMapItem?.elements?.urlSlug?.value || null,
        uuid: siteMapItem?.elements?.uuid?.value || null,
        content: null,
        page: null
      })
    })
  } else {
    return null
  }
  return siteMap
}

/**
 * Returns template content from Acoustic by querying by library, content type and category.
 *
 * @param {string} locale
 * @param {string} slug
 * @return {string} Delivery rendering context URL
 */
acousticHelper.getAcousticHomepage = (locale) => {
  const libraryId = acousticHelper.libraryIdByPath(locale)
  const typeStr = buildTypeStr(templateTypes)

  // Build query string
  const parameters = [
    `q=*:* AND classification:content`,
    `fq=libraryId:${libraryId}`,
    `fq=type:${typeStr}`,
    `fq=categoryLeaves:Homepage`,
    `fl=document:[json]`,
    `sort=type asc, lastModified asc`
  ]

  const searchParameters = parameters.join('&')
  return acousticHelper.apiUrl + config.acoustic.searchPath + searchParameters
}
/**
 * Returns template content from Acoustic by querying by library, content type and category.
 *
 * @param {string} locale
 * @param {string} slug
 * @return {string} Delivery rendering context URL
 */

/**
 * Returns template content from Acoustic by querying the content by library, content type and URL slugs.
 *
 * @param {string} locale
 * @param {string} slug
 * @return {string} Delivery rendering context URL
 */
acousticHelper.getAcousticPage = (locale, slug) => {
  const libraryId = acousticHelper.libraryIdByPath(locale)
  const typeStr = buildTypeStr(templateTypes)
  const numOfRows = 50

  // Build query string
  const parameters = [
    `q=text:'${slug}' AND classification:content`,
    `fq=type:${typeStr}`,
    `fq=libraryId:${libraryId}`,
    `fl=document:[json]`,
    `sort=lastModified asc&rows=${numOfRows}`
  ]

  const searchParameters = parameters.join('&')
  return acousticHelper.apiUrl + config.acoustic.searchPath + searchParameters
}

/**
 * Returns template content from Acoustic by querying the content by library and UUID.
 *
 * @param {string} locale
 * @param {string} slug
 * @return {string} Delivery rendering context URL
 */
acousticHelper.getAcousticPageByUuid = (locale, uuid) => {
    const libraryId = acousticHelper.libraryIdByPath(locale)

    // Build query string
    const parameters = [`q=*:* AND classification:content`, `fq=id:(${uuid})`, `fq=libraryId:${libraryId}`, `fl=document:[json]`, `sort=lastModified asc`]

    const searchParameters = parameters.join('&')

    return acousticHelper.apiUrl + config.acoustic.searchPath + searchParameters
}

/**
 * Returns template content from Acoustic by querying the content by library and category.
 *
 * @param {string} locale
 * @param {string} category
 * @param {boolean} renderUrl
 * @return {string} Delivery rendering context URL
 */
acousticHelper.getAcousticPageContent = (locale, category, renderUrl) => {
  const libraryId = acousticHelper.libraryIdByPath(locale)
  const parameters = ['q=*:*', 'fq=classification:content', `fq=libraryId:${libraryId}`, `fq=categories:*${category}*`, 'fl=categoryLeaves', 'fl=*,document:[json]']
  const searchParameters = parameters.join('&')
  if(renderUrl) {
    return acousticHelper.apiUrl + config.acoustic.deliveryPath + config.acoustic.renderContextPath + config.acoustic.searchQueryPath + searchParameters
  } 
  return acousticHelper.apiUrl + config.acoustic.searchPath + searchParameters
}

const buildTypeStr = (typeTemplates) => {
  let str = ''
  typeTemplates.forEach(function (item, index) {
    if (index > 0) {
      str = `${str} OR type:${item}`
    } else {
      str = `${item}`
    }
  })
  return str
}

export default acousticHelper
