import GlobalNavigation from './GlobalNavigation'
import { getValue, getValues, getFullImageStr } from '@services/utilities/utilityHelper'

const GlobalNavigationAcousticData = (props) => {
  const { 
    menuLevel1, 
    siteLogoText, 
    yourLogo = '' 
  } = props.data  
  let menuData = { menu: [] }
  if (getValues(menuLevel1)) {
    getValues(menuLevel1).map((item) => {
      let obj = {}, menuItemObj = {}
      menuItemObj['text'] = item?.elements?.menuItem?.value?.elements?.text?.value
      menuItemObj['url'] = item?.elements?.menuItem?.value?.elements?.link?.value
      obj['menuItem'] = menuItemObj
      obj['menuItems'] = [] // Currently there are none but if level 2 menu items exist push them into this array
      menuData.menu.push(obj)
    })
  }
  
  return (
    <GlobalNavigation
      className="nav"
      menuData={menuData}
      logoText={getValue(siteLogoText)}
      logo={getFullImageStr(yourLogo.url)}
    />
  )
}

export default GlobalNavigationAcousticData
