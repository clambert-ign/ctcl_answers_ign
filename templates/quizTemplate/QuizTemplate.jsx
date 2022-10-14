import { getComponentName } from '../../services/utilities/acousticMappings'
import QuizAcousticData from '../../lib/quiz/QuizAcousticData'

const QuizTemplate = (props) => {

  const { data } = props

  return (
    <>
      {data.pageContent?.map((content, index) => {
        if (getComponentName(content.type) === 'Quiz') { 
          if (content?.document?.elements?.pageClass?.value) {
            document.body.classList.add(content?.document?.elements?.pageClass?.value)
          }          
          return <QuizAcousticData key={`${content.type}${index}`} data={content?.document?.elements?.quizToDisplay?.value?.elements} />
        }
      })}
    </>
  )
}

export default QuizTemplate