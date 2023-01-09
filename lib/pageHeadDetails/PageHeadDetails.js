import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { getFullImageStr, getValue, getValues, getSelectionLabel } from '@services/utilities/utilityHelper'
import { getGroupId, getOneTrustDomainId, getOneTrustScriptURL } from '@services/utilities/libraryUtils'
import pageHeadHelper from '@services/utilities/pageHeadHelper'

const PageHeadDetails = (props) => {
  const { domain, data: acousticData } = useSelector((state) => state.acoustic)
  const { asPath, locale } = useRouter()

  const { 
    hreflang,
    metaDescription,
    metaRobots,
    metaTitle,
    ogDescription,
    ogImage,
    ogLocale,
    ogTitle,
    ogType,
    pageTitle,
  } = props?.data?.elements

  const title = pageHeadHelper.title(getValue(pageTitle))
  const favIcon = acousticData?.favIcon ? getFullImageStr(acousticData?.favIcon.url) : '/favicon.ico'
  const metaData = pageHeadHelper.metaData(getValue(metaDescription), getSelectionLabel(metaRobots), getValue(metaTitle))
  const openGraph = pageHeadHelper.openGraph(getValue(ogTitle), getValue(ogDescription), getFullImageStr(ogImage?.url), getValue(ogLocale), getValue(ogType))
  const hrefLang = pageHeadHelper.hrefLang(getValues(hreflang))
  const url = locale ? domain + '/' + locale + asPath : domain + asPath
  const languagePath = useSelector((state) => state.acoustic.language)
  const OneTrustScriptURL = getOneTrustScriptURL(languagePath)
  const OneTrustDomainId = getOneTrustDomainId(languagePath)
  const googleAnalyticsId = getValue(acousticData?.googleAnalyticsId)
  const groupId = getGroupId(languagePath) || 'C0002'
  const scriptType = (OneTrustDomainId && OneTrustScriptURL) ? "text/plain" : "text/javascript"
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={metaData.title} />
        <meta name="robots" content={metaData.robots} />
        <meta name="description" content={metaData.description} />
        <meta property="og:title" content={openGraph.title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={openGraph.description} />
        <meta property="og:image" content={openGraph.image} />
        <meta property="og:locale" content={openGraph.locale} />
        <meta property="og:type" content={openGraph.type} />
        <meta name="twitter:card" content="summary_large_image" />      
        <link rel="icon" href={favIcon} />
        <link rel="canonical" href={url} />
        {hrefLang?.map((item, index) => {
          return <link rel='alternate' key={index} href={item.url} hreflang={item.hrefLang} />
        })}
      </Head>
      {(OneTrustDomainId && OneTrustScriptURL) && ( 
        <>
          <Script src={OneTrustScriptURL} type="text/javascript" data-document-language="true" charset="UTF-8" data-domain-script={OneTrustDomainId} />
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${googleAnalyticsId}');
            `}
          </Script>
        </>
      )}
    </>
  )
}

export default PageHeadDetails