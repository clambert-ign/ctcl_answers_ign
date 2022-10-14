import Divider from './Divider'
import { getValue } from '@services/utilities/utilityHelper'

const DividerAcousticData = (props) => {
    const { colour, animate } = props.data
    return <Divider color={getValue(colour)} animate={getValue(animate)} />
}

export default DividerAcousticData
