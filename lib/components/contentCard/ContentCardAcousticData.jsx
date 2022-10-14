import { Fragment } from 'react'
import ContentCard from './ContentCard'
import styles from './ContentCardAcousticData.module.scss'
import { getFullImageStr, getValue, getSelectionValue } from '@services/utilities/utilityHelper'
import RichText from '@lib/richText/RichText'

const ContentCardAcousticData = (props) => {
    const { displayType, contentCardItems } = props.data

    const cardType = getSelectionValue(displayType)
    const classes =
        cardType === 'fullWidth'
            ? 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'
            : cardType === 'threeInARow'
            ? 'col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4'
            : cardType === 'twoInARow'
            ? 'col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6'
            : 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'

    // Rule - any number of cards can be addded for a row in Acoustic but only first 3 cards can be displayed if display type is 3 in a row or first 2 if 2 in a row
    const cardTypeInt = cardType === 'threeInARow' ? 3 : 2

    const getRichText = (text) => {
        if (!text) return ''
        return <RichText data={text} />
    }

    return (
        <div className={`row g-3 g-lg-4 g-xl-5 ${styles.contentCardContainer}`}>
            {contentCardItems?.values.map((item, index) => {
                return (
                    <Fragment key={`${item.id}${index}`}>
                        {index < cardTypeInt && (
                            <div className={classes}>
                                <ContentCard
                                    contentCardDisplayImage={item?.elements?.image?.url ? true : false}
                                    contentCardTitle={getValue(item?.elements?.title)}
                                    contentCardSubtitle={getValue(item?.elements?.subtitle)}
                                    contentCardDescription={getRichText(getValue(item.elements.descriptionrte?.value?.text))}
                                    contentCardImageAlign={getSelectionValue(item?.elements?.imageAlign)}
                                    contentCardLinkType={getSelectionValue(item?.elements?.link?.value?.elements?.btnType)}
                                    contentCardLinkText={getValue(item?.elements?.link?.value?.elements?.btnText)}
                                    contentCardLinkUrl={getValue(item?.elements?.link?.value?.elements?.btnLink)}
                                    contentCardLinkIcon={getSelectionValue(item?.elements?.link?.value?.elements?.btnIcon)}
                                    contentCardLinkIconAlign={getSelectionValue(item?.elements?.link?.value?.elements?.btnIconAlign)}
                                    contentCardLinkIsDisabled={getValue(item?.elements?.link?.value?.elements?.isDisabled)}
                                    contentCardLinkIsExternal={getValue(item?.elements?.link?.value?.elements?.isExternal)}
                                    contentCardLinkExternalText={getValue(item?.elements?.link?.value?.elements?.externalText)}
                                    contentCardLinkIsDownload={getValue(item?.elements?.link?.value?.elements?.isDownload)}
                                    contentCardLinkDownloadText={getValue(item?.elements?.link?.value?.elements?.downloadFileName)}
                                    contentCardLinkHelper={getSelectionValue(item?.elements?.link?.value?.elements?.clickEvent)}
                                    contentCardLinkBehaviour={getValue(item?.elements?.link?.value?.elements?.behaviourReference)}
                                    contentCardLabel={getValue(item?.elements?.label)}
                                    contentCardImageUrl={getFullImageStr(item?.elements?.image?.url)}
                                    contentCardType={cardType}
                                ></ContentCard>
                            </div>
                        )}
                    </Fragment>
                )
            })}
        </div>
    )
}

export default ContentCardAcousticData
