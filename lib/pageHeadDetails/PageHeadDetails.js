import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import pageHeadHelper from '../../services/utilities/pageHeadHelper'
import { useSelector } from 'react-redux'
import { getFullImageStr } from '../../services/utilities/utilityHelper'
import config from '../../config/config'
import { arrayToStringBuilder } from '../../services/utilities/utilityHelper'
import { getGroupId, getOneTrustDomainId, getOneTrustScriptURL } from '../../services/utilities/libraryUtils'

const PageHeadDetails = (props) => {
    const { domain, data: acousticData } = useSelector((state) => state.acoustic)
    const { asPath, locale } = useRouter()
    const { data } = props
    const { metaDescription, metaRobots, metaTitle, pageTitle, ogDescription, ogImage, ogLocale, ogTitle, ogType, hreflang, audienceJourneyStage, audienceSpeciality, audiencetype, usage, channel, branding, usageWith, validFrom, validTo, countriesApprovedToUse, format, regulatoryId, contentAccessLevel, businessUnit, therapyArea, brand, indication, productLifecycle, category, theme } = data?.elements
    const metaData = pageHeadHelper.metaData(metaDescription?.value, metaRobots?.value?.label, metaTitle?.value)
    const title = pageHeadHelper.title(pageTitle?.value)
    const openGraph = pageHeadHelper.openGraph(ogDescription?.value, ogImage?.url, ogLocale?.value, ogTitle?.value, ogType?.value)
    const taxonomy = pageHeadHelper.taxonomy(arrayToStringBuilder(audiencetype?.values), audienceJourneyStage?.value?.selection, arrayToStringBuilder(audienceSpeciality?.values), arrayToStringBuilder(usage?.values), arrayToStringBuilder(channel?.values), branding?.value?.selection, usageWith?.value, validFrom?.value, validTo?.value,arrayToStringBuilder(countriesApprovedToUse?.values), arrayToStringBuilder(format?.values), regulatoryId?.value, contentAccessLevel?.value?.selection, businessUnit?.value?.selection, therapyArea?.value?.selection, arrayToStringBuilder(brand?.values), indication?.value?.selection, productLifecycle?.value?.selection, arrayToStringBuilder(category?.categories), arrayToStringBuilder(theme?.values));
    const url = locale ? domain + '/' + locale + asPath : domain + asPath
    const googleAnalyticsId = acousticData?.seo?.googleAnalyticsId
    const faviconImgUrl = acousticData?.faviconImg ? getFullImageStr(acousticData?.faviconImg.url) : '/favicon.ico'
    const hrefLangArray = (hreflang && hreflang?.values) ? HrefLinkBuilder(hreflang.values) : []
    const languagePath = useSelector((state) => state.acoustic.language)
    const OneTrustScriptURL = getOneTrustScriptURL(languagePath)
  const OneTrustDomainId = getOneTrustDomainId(languagePath)

  const ScriptType = OneTrustDomainId && OneTrustScriptURL ? "text/plain" : "text/javascript";
  const groupId = getGroupId(languagePath) || 'C0002'

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="canonical" href={url} />
                <link rel="icon" href={faviconImgUrl} /> 
                { hrefLangArray && 
                    hrefLangArray.map(item => {
                        return <link rel='alternate' key={item.id} href={item.url} hreflang={item.hrefLang} />
                    })
                }
                <meta name="description" content={metaData.description} />
                <meta name="robots" content={metaData.robots} />
                <meta name="title" content={metaData.title} />
                <meta property="og:title" content={openGraph.title} />
                <meta property="og:url" content={url} />
                <meta property="og:locale" content={openGraph.locale} />
                <meta property="og:description" content={openGraph.description} />
                <meta property="og:type" content={openGraph.type} />
                <meta property="og:image" content={getFullImageStr(openGraph.image)} />

                {/* Taxonomy */}
                <meta name="audiencetype" content={taxonomy.audiencetype} />
                <meta name="audienceJourneyStage" content={taxonomy.audienceJourneyStage} />
                <meta name="audienceSpeciality" content={taxonomy.audienceSpeciality} />
                <meta name="usage" content={taxonomy.usage} />
                <meta name="channel" content={taxonomy.channel} />
                <meta name="branding" content={taxonomy.branding} />
                <meta name="usageWith" content={taxonomy.usageWith} />
                <meta name="validFrom" content={taxonomy.validFrom} />
                <meta name="validTo" content={taxonomy.validTo} />
                <meta name="countriesApprovedToUse" content={taxonomy.countriesApprovedToUse} />
                <meta name="format" content={taxonomy.format} />
                <meta name="regulatoryId" content={taxonomy.regulatoryId} />
                <meta name="contentAccessLevel" content={taxonomy.contentAccessLevel} />
                <meta name="businessUnit" content={taxonomy.businessUnit} />
                <meta name="therapyArea" content={taxonomy.therapyArea} />
                <meta name="brand" content={taxonomy.brand} />
                <meta name="indication" content={taxonomy.indication} />
                <meta name="productLifecycle" content={taxonomy.productLifecycle} />
                <meta name="category" content={taxonomy.category} />
                <meta name="theme" content={taxonomy.theme} />
          {OneTrustDomainId && OneTrustScriptURL ? 
                  <script src={OneTrustScriptURL} type="text/javascript" data-document-language="true" charset="UTF-8" data-domain-script={OneTrustDomainId}></script>
                  : ""}
                            
            
          {
            OneTrustDomainId && OneTrustScriptURL ?
              <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} class={`optanon-category-${groupId}`} type={`${ScriptType}`} />
              <script                        
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${googleAnalyticsId}', { 'anonymize_ip': true, 'cookie_expires': ${config.cookie.lifespan.accept} * 24 * 60 * 60, page_path: window.location.pathname });
                            `
                        }}
                />
                <script dangerouslySetInnerHTML={{__html: `
                      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.type='text/plain';j.class='optanon-category-C0002';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-W5W7GX4');
                    `}} />
                </>
              : ""
          }
            </Head>
        </>
    )
}

const HrefLinkBuilder = (val) => {

    let array = []
    let hrefLang = val

    hrefLang.forEach(function (item, index) {
        let obj = {}
        obj.id = `${item}-${index}`
        obj.url = item

        let urlSplit = item.split("/")
        obj.hrefLang = urlSplit[3]

        array.push(obj)
    });

    return array
}

export default PageHeadDetails