import config from '@config/config'
import { getLibraryPath } from './libraryUtils'

/** @type {*} */
const ipstackHelper = {}

/**
 * Acoustic Content API URL
 *
 * @returns {string} Acoustic Content API URL
 */
ipstackHelper.apiUrl = `${config.ipstackHelper.domain}check?access_key=${config.ipstackHelper.accessKey}`

export const getLanguagePath = (country, lang) => {
    return getLibraryPath(`/${lang}-${country.toLowerCase()}`)
}

export default ipstackHelper
