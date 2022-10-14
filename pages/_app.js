
// Need these because NextJS only supports pure selectors
import '@assets/theme/ctcl/styles.scss'
import '@atoms/video/VideoPlyr.css'
import '@atoms/audio/AudioPlyr.css'

import { useEffect } from 'react'
import { Provider } from 'react-redux'
import Router, { useRouter } from 'next/router'
import AppRouter from '@src/routers/AppRouter'
import Layout from '@layouts/Layout'
import store from '@src/ducks/store'
import config from '@config/config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/**
 * NProgress: A nanoscopic progress bar. Featuring realistic trickle animations to convince your users that something is happening!
 * URL: https://ricostacruz.com/nprogress/
*/ 
NProgress.configure({
  minimum: config.nProgress.minimum,
  easing: config.nProgress.easing,
  speed: config.nProgress.speed,
  showSpinner: config.nProgress.showSpinner
}) 
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    //module.scss won't allow changes on body tag without a class being present
    document.querySelector('body').classList.add('body')
    document.documentElement.className = config.theme;
  })
  
  return (
    <Provider store={store}>
      <AppRouter>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </AppRouter>
    </Provider>
  )
}

export default MyApp