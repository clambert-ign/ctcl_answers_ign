import { getLibraryList } from '@services/utilities/libraryUtils'

// Constants
const config = {}
const activeLibraries = getLibraryList()

// App
config.app = {
  title: 'CTCL',
  description: 'CTCL Test site',
  robots: 'index, follow',
  locale: '/en-gb'
}

// Acoustic Content
config.acoustic = {
  domain: 'https://content-eu-1.content-cms.com',    
  //Live Acoustic subscription
  //contentHubID: '7dd72924-538f-4876-a2c6-b384c797bccb',
  //UAT Acoustic subscription
  //UAT Acoustic subscription//
  searchPath: '/delivery/v1/search?',
  searchQueryPath: '/search?',
  deliveryRenderingContextPath: '/delivery/v1/rendering/context',
  deliveryPath: '/delivery/v1',
  renderContextPath: '/rendering',
  libraries: activeLibraries,
  defaultHomePageId: '9fb6b25f-7d40-49e7-b0e4-287e2e35e992'
}

config.ipstackHelper = {
  domain: 'https://api.ipstack.com/',
  accessKey: 'e89cb496cbef14293f461c291800afa6',
  active: false
}

config.homepageId = (uuid) => {
  const homepageId = uuid ? uuid : config.acoustic.defaultHomePageId
  return homepageId
}

config.theme = 'theme-ctcl'
config.languageInUse = ''

// NProgress
config.nProgress = {
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: true
}

// HTTP Basic Auth
config.basicAuth = {
  protectedDomain: 'ctclanswers-ign.vercel.app',
  users: [{ 
    user: 'preview', 
    password: 'i9n1f1d3v' 
  }]
}

export default config