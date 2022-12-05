import config from '@config/config'

const pageHeadHelper = {}

pageHeadHelper.title = (title) => {
  const pageTitle = title ? title : config.app.title
  return pageTitle
}

pageHeadHelper.metaData = (title, robots, description) => {
  let metadata = {}
  metadata.title = title ? title : config.app.title
  metadata.robots = robots ? robots : config.app.robots
  metadata.description = description ? description : config.app.description
  return metadata
}

pageHeadHelper.openGraph = (title, desc, img, locale, type) => {
  let openGraph = {}
  openGraph.title = title ? title : config.app.title
  openGraph.description = desc ? desc : config.app.description
  openGraph.image = img
  openGraph.locale = locale ? locale : config.app.locale
  openGraph.type = type ? type : 'website'
  return openGraph
}

pageHeadHelper.hrefLang = (hrefLang) => {
  if(hrefLang) {
    let aHrefLang = []
    hrefLang.map((item, index) => {
      let obj = {}
      obj.url = item
      let urlSplit = item.split("/")
      obj.hrefLang = urlSplit[3]
      aHrefLang.push(obj)
    })
    return aHrefLang
  }
  return null
}

export default pageHeadHelper