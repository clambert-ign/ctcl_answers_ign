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
  //contentHubID: 'fadaa259-5193-4c1e-984b-5d76502c7dcb', 
  //CTCL UAT   
  contentHubID: 'c21df77d-c3dd-42a7-837d-0d360900e599',
  searchPath: '/delivery/v1/search?',
  searchQueryPath: '/search?',
  deliveryRenderingContextPath: '/delivery/v1/rendering/context',
  deliveryPath: '/delivery/v1',
  renderContextPath: '/rendering',
  libraries: activeLibraries,
  //defaultHomePageId: 'b4583b8b-ed99-4aae-b722-b9e6340a74ec'
  //CTCL Homepage Id
  defaultHomePageId: '9fb6b25f-7d40-49e7-b0e4-287e2e35e992'
}

config.ipstackHelper = {
  domain: 'https://api.ipstack.com/',
  accessKey: 'e89cb496cbef14293f461c291800afa6'
}

config.homepageId = (uuid) => {
  const homepageId = uuid ? uuid : config.acoustic.defaultHomePageId
  return homepageId
}

config.theme = 'theme-kanso-primary'
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

// Cookie Settings
config.cookie = {
  name: 'KKI-CTCL',
  lifespan: {
    // Days
    accept: 420,
    reject: 3
  },
  types: {
    functional: { name:'_ga', value:'GA1.1.841501750.1638184465', status: false },
    marketing: { status: false }
  },
  gaId: 'G-XVNYVMMPW9'
}

export default config