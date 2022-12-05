import { useState, useEffect, useRef } from 'react'

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

utilityHelper.useScreenDimensions = () => {

  const hasWindow = typeof window !== 'undefined'
  const hasDoc = typeof document !== 'undefined'

  function getDimensions() {
    const screenWidth = hasWindow ? window.screen.width : null
    const screenHeight = hasWindow ? window.screen.height : null
    const winWidth = hasWindow ? window.innerWidth : null
    const winHeight = hasWindow ? window.innerHeight : null
    const winScrollX = hasWindow ? window.scrollX : null
    const winScrollY = hasWindow ? window.scrollY : null
    const docWidth = hasDoc ? document.body.offsetWidth : null
    const docHeight = hasDoc ? document.body.scrollHeight : null
    return { screenWidth, screenHeight, winWidth, winHeight, winScrollX, winScrollY, docWidth, docHeight }
  }

  const [screenDimensions, setScreenDimensions] = useState(getDimensions())

  useEffect(() => {
    if (hasWindow && hasDoc) {
      const debouncedHandleResize = debounce(function handleResize() {
        setScreenDimensions(getDimensions())
      }, 100)
      
      window.addEventListener('resize', debouncedHandleResize)
      return () => window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [hasWindow, hasDoc])

  return screenDimensions
}

utilityHelper.useComponentDimensions = (componentRef) => {
  if(componentRef?.current) {
    console.log('utilHelper', componentRef.current)
  }
 
  function getComponentDimensions() {
    const { width, height, x, y } = componentRef?.current?.getBoundingClientRect()
    return { width, height, x, y }
  }

  const [componentDimensions, setComponentDimensions] = useState(getComponentDimensions())

  useEffect(() => {
    if(componentRef?.current) {
      const debouncedHandleResize = debounce(function handleResize() {
        setComponentDimensions(getComponentDimensions())
      }, 100)

      if(componentRef?.current) {
        setComponentDimensions(getComponentDimensions())
      }

      window.addEventListener("resize", debouncedHandleResize)
      return () => {
        window.removeEventListener("resize", debouncedHandleResize)
      }
    }
  }, [componentRef])

  return componentDimensions
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
  const isBreakpoint = (utilityHelper?.useScreenDimensions().winWidth >= utilityHelper?.breakPointsDefault[breakpointSize]) ? false : true
  return isBreakpoint
}

utilityHelper.detectComponentBreakpoint = (breakpointSize, width) => {
  const isBreakpoint = (width >= (utilityHelper?.breakPointsDefault[breakpointSize]/2)) ? false : true
  return isBreakpoint
}

utilityHelper.clickOutside = (ref) => {
  const [isOutside, setIsOutside] = useState(false)
  function handleClickOutside(event) {
    (ref?.current && !ref?.current?.contains(event.target)) ? setIsOutside(true) : setIsOutside(false)
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])
  return isOutside
}

utilityHelper.useTimeout = (callback, delay) => {
  const timeoutRef = useRef(null)
  const savedCallback = useRef(callback)
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  useEffect(() => {
    const tick = () => savedCallback.current()
    if (typeof delay === 'number') {
      timeoutRef.current = window.setTimeout(tick, delay)
      return () => window.clearTimeout(timeoutRef.current)
    }
  }, [delay])
  return timeoutRef
}

export default utilityHelper