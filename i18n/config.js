import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import config from '@config/config'

i18n.use(initReactI18next).init({
    fallbackLng: 'gb',
    lng: config.languageInUse,
    resources: {
        gb: {
            translations: require('./locales/gb/translations.json')
        },
        es: {
            translations: require('./locales/es/translations.json')
        },
        de: {
            translations: require('./locales/de/translations.json')
        },
        fr: {
            translations: require('./locales/fr/translations.json')
        },
        dk: {
            translations: require('./locales/dk/translations.json')
        },
        fi: {
            translations: require('./locales/fi/translations.json')
        },
        se: {
            translations: require('./locales/se/translations.json')
        },
        no: {
            translations: require('./locales/no/translations.json')
        },
        it: {
            translations: require('./locales/it/translations.json')
        },
        nl: {
            translations: require('./locales/nl/translations.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'
})

i18n.languages = ['gb', 'es', 'de', 'fr', 'dk', 'fi', 'se', 'no', 'it', 'nl']

export default i18n
