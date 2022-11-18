import { useState, useEffect } from 'react'

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

const utilityHelper = {}

utilityHelper.useWindowDimensions = () => {

  const hasWindow = typeof window !== 'undefined'

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null
    return { width, height }
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    if (hasWindow) {
      const debouncedHandleResize = debounce(function handleResize() {
        setWindowDimensions(getWindowDimensions())
      }, 100)
      
      window.addEventListener('resize', debouncedHandleResize)
      return () => window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [hasWindow])

  return windowDimensions
}

utilityHelper.useComponentDimensions = (componentRef) => {

  function getComponentDimensions() {
    const width = componentRef?.current?.offsetWidth ? componentRef.current.offsetWidth : 0
    const height = componentRef?.current?.offsetHeight ? componentRef.current.offsetHeight : 0
    return { width, height }
  }

  const [componentDimensions, setComponentDimensions] = useState(getComponentDimensions())

  useEffect(() => {
    if (componentRef.current) {
      const debouncedHandleResize = debounce(function handleResize() {
        setComponentDimensions(getComponentDimensions())
      }, 100)

      if (componentRef.current) {
        setComponentDimensions(getComponentDimensions())
      }

      window.addEventListener("resize", debouncedHandleResize)
      return () => {
        window.removeEventListener("resize", debouncedHandleResize)
      }
    }
  }, [componentRef])

  return componentDimensions;
}

utilityHelper.breakPointsDefault = {
  'xs': 320,
  's': 545,
  'm': 832,
  'l': 1088,
  'xl': 1272,
  'xxl': 1504
}

utilityHelper.detectBreakpoint = (breakpointSize) => {
  const isBreakpoint = (utilityHelper.useWindowDimensions().width >= utilityHelper.breakPointsDefault[breakpointSize]) ? false : true
  return isBreakpoint
}

utilityHelper.detectComponentBreakpoint = (breakpointSize, width) => {
  const isBreakpoint = (width >= (utilityHelper.breakPointsDefault[breakpointSize]/2)) ? false : true
  return isBreakpoint
}

export default utilityHelper