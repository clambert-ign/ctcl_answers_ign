import PageSection  from '@patterns/pageSection/PageSection'
import '@i18n/config'
import { useTranslation } from 'react-i18next'

const FourOhFour = () => {
    
    const { t } = useTranslation()
    
    return (
        <div style={{padding: "5% 0"}}>
            <PageSection
                headingText="404"
                headingTag="h4"
                subText={t('error404')}
                align="center"
            />
        </div>
    );
  };
  
  export default FourOhFour;