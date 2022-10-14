
export const linkHelper = (helper, alertMessage, href) => {
  switch (helper) {
    case linkHelperConstants[1]:
      return true
    case linkHelperConstants[2]:
      const confirmed = window.confirm(alertMessage)
      if (confirmed) {
        window.open(href, '_blank')
      }
      return null
    case linkHelperConstants[3]:
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      })
      return null
    case linkHelperConstants[4]:
      return "Start quiz"        
    case linkHelperConstants[5]:
      return null
    default:
      return null
  }
}

export const linkHelperConstants = { 1: 'modal', 2: 'alert', 3: 'scrollTo', 4: 'quiz', 5: 'quizDownload' }
