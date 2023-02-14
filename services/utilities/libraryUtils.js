import { dynamicSort, groupBy } from './arrayUtils'

const libraries = [
  {
    id: '1',
    path: '/de-de',
    language: 'de',
    code: 'de-de',
    active: false,
    secondaryDomain: 'https://www.verstopfungimgespraech.de',
    libraryId: 'b72ac361-4410-4cfd-af6e-a3453cdb10af',
    oneTrustScriptURL:'',
    oneTrustDomainID:'',
    performanceCookieId:''
  },
  {
    id: '2',
    path: '/en-ie',
    language: 'en',
    code: 'en-ie',
    active: false,
    secondaryDomain: 'https://www.talkaboutconstipation.ie',
    libraryId: '7ec53459-d961-4892-af14-013f19bfe173',
    oneTrustScriptURL:'',
    oneTrustDomainID:'',
    performanceCookieId:''
  },
  {
    id: '3',
    path: '/fr-fr',
    language: 'fr',
    code: 'fr-fr',
    active: false,
    secondaryDomain: '',
    libraryId: '51190713-9d43-4377-80ea-7c294e42c490',
    oneTrustScriptURL:'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
    oneTrustDomainID:'6f13fe5d-9efe-4d8e-9d9c-0085907f2806-test',
    performanceCookieId:''
  },
  {
    id: '4',
    path: '/it-it',
    language: 'it',
    code: 'it-it',
    active: false,
    secondaryDomain: 'https://www.parliamodistipsi.it',
    libraryId: '09e8af2c-ad8f-449e-9fc5-f7f93fba8372',
    oneTrustScriptURL:'',
    oneTrustDomainID:'',
    performanceCookieId:''
  },
  {
    id: '5',
    path: '/nl-nl',
    language: 'nl',
    code: 'nl-nl',
    active: false,
    secondaryDomain: 'https://www.bespreekobstipatie.nl',
    libraryId: '5dfdc10f-31cb-4045-86e9-7c121d13b799',
    oneTrustScriptURL:'',
    oneTrustDomainID:'',
    performanceCookieId:''
  },
  {
    id: '6',
    path: '/no-no',
    language: 'no',
    code: 'no-no',
    active: false,
    secondaryDomain: 'https://www.snakkomforstoppelse.no',
    libraryId: '89d6b06f-574c-4762-8cd2-3ea36c69657d',
    oneTrustScriptURL:'',
    oneTrustDomainID:'',
    performanceCookieId:''
  },
  {
    id: '7',
    path: '/sv-se',
    language: 'se',
    code: 'sv-se',
    active: false,
    secondaryDomain: 'https://www.prataomforstoppning.se',
    libraryId: '491a906f-a092-497e-9c10-882091a4df2c',
    oneTrustScriptURL:'',
    oneTrustDomainID:'',
    performanceCookieId:''
  },
  {
    id: '8',
    path: '/en-gb',
    language: 'gb',
    code: 'en-gb',
    active: true,
    secondaryDomain: '',
    libraryId: '51190713-9d43-4377-80ea-7c294e42c490',
    oneTrustScriptURL:'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
    oneTrustDomainID:'5c27b2fe-cc52-41b5-8332-432ed02d2925-test',
    performanceCookieId:''
  },
  {
    id: '9',
    path: '/es-es',
    language: 'es',
    code: 'es-es',
    active: false,
    secondaryDomain: 'https://www.hablemosdeestrenimiento.es',
    libraryId: 'ab81a400-6d2c-4b50-9d63-a30f16259656',
    oneTrustScriptURL:'',
    oneTrustDomainID:'',
    performanceCookieId:''
  },
  {
    id: '10',
    path: '/fi-fi',
    language: 'fi',
    code: 'fi-fi',
    active: false,
    secondaryDomain: 'https://www.puhutaanummetuksesta.fi',
    libraryId: '8c59bec6-2849-477f-a753-84fd16e74fee',
    oneTrustScriptURL:'',
    oneTrustDomainID:'',
    performanceCookieId:''
  },
  {
    id: '11',
    path: '/de-dk',
    language: 'dk',
    code: 'de-dk',
    active: false,
    secondaryDomain: 'https://www.talomforstoppelse.dk',
    libraryId: '2a11edf3-00c7-4cef-89b2-dc3cadcf3456',
    oneTrustScriptURL:'',
    oneTrustDomainID:'',
    performanceCookieId:''
  }
]

// Returns active libraries as array.
// If active parameter is false, it will return all defined libraries above.
export const getLibraryList = (active = true) => {
  if(active) {
    return libraries.filter((library) => library.active === true)
  } else {
    return libraries
  }
}

export const getLibraryLanguage = (path) => {
  if(path) {
    const lib = libraries.filter((library) => library.path === path)
    return lib[0].language
  }
}

export const checkLibraryExistsAndActive = (path) => {
  if(path) {
    const activeLibraries = getLibraryList()
    const lib = activeLibraries.filter((library) => library.path === path)
    const libExists = (lib.length > 0) ? true : false

    return libExists
  }
}

export const getLibraryHomePageId = (path) => {
  if(path) {
    const lib = libraries.filter((library) => library.path === path)
    return lib[0].homePageId
  }
}

// Returns active libraries as array grouped by region
// If active parameter is false, it will return all defined libraries above.
export const getLibrariesByRegion = (active = true) => {
  if(active) {
    return groupBy(
      libraries.filter((library) => library.active === true),
      'region'
    )
  } else {
    return groupBy(libraries, 'region')
  }
}

// Returns requested library by code parameter.
export const getLibraryByCode = (code) => {
  return libraries.find((library) => library.code === code)
}

// Returns current library according with the URL country code
export const getUrlCountryData = () => {
  const cultureCode = getUrlCountryPath()
  return getLibraryByCode(cultureCode)
}

export const getLibraryCode = (path) => {
  if(path) {
    const lib = libraries.filter((library) => library.path === path)
    return lib[0].code
  }
}

export const getLibraryPath = (path) => {
  const lib = libraries.find((library) => library.path === path)
  if (!lib) return '/en-gb'
  return lib.path
}

export const getOneTrustScriptURL = (path) => {
  if (path) {
    const lib = libraries.filter((library) => library.path === path)
    return lib[0].oneTrustScriptURL
  }
}

export const getOneTrustDomainId = (path) => {
  if (path) {
    const lib = libraries.filter((library) => library.path === path)
    return lib[0].oneTrustDomainID
  }
}

export const getGroupId = (path) => {
  if (path) {
    const lib = libraries.filter((library) => library.path === path)
    return lib[0].performanceCookieId
  }
}

export const getActiveLibrariesLocalised = (activeCountriesTranslations) => {
  const libraries = getLibraryList()
  const result = libraries.map((item) => {
    const obj = activeCountriesTranslations.find((o) => o.id === item.id)
    return { ...item, ...obj }
  })
  const activeLib = groupBy(result.filter((library) => library.active === true), 'region')
  Object.keys(activeLib).map((region) => {
    activeLib[region].sort(dynamicSort('country'))
  })
  return activeLib
}