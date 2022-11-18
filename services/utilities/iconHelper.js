import * as svgIcons from '@assets/svgIcons/SvgIcons'

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const iconHelper = {}

iconHelper.init = (iconName) => {
  const keys = Object.keys(svgIcons)
  for(const key of keys) {
    if(key === capitalize(iconName)) {
      return svgIcons[key]
    }
  }
}

export default iconHelper