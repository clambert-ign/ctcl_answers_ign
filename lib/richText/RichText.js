import ReactHtmlParser from 'react-html-parser'

const RichText = (props) => {
    if(props.data) {
        return ReactHtmlParser(props.data)
    } else {
        return null
    }
}

export default RichText