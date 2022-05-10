import { useState } from 'react'
import bugImageUrl from '../../assets/imgs/bug.svg'
import ideaImageUrl from '../../assets/imgs/idea.svg'
import thoughtImageUrl from '../../assets/imgs/thought.svg'
import { Footer } from '../Footer'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackSuccesStep } from './Steps/FeedbackSuccessStep'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'

export const feedbackTypes = {
  BUG : {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA : {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  THOUGHT : {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem'
    }
  }
}

interface WidgetFormProps {
  setSubmitFeedback: React.Dispatch<React.SetStateAction<boolean>>
}

export type FeedbackType = keyof typeof feedbackTypes

export const WidgetForm = ({setSubmitFeedback}:WidgetFormProps) => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const handleRestartFeedback = () => {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="bg-light-surface-primary dark:bg-dark-surface-primary mb-4 p-4 rounded-2xl flex flex-col items-center shadow-md w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccesStep onFeedbackRestartRequest={handleRestartFeedback}/>
      ) : (
        <>
          {
            !feedbackType ? (
              <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
            ) : (
              <FeedbackContentStep
                setSubmitFeedback={setSubmitFeedback} 
                feedbackTypeSelected={feedbackType}
                onFeedbackRestartRequest={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)}
              />
            )
          }
        </>
      )}

      <Footer />
    </div>
  )
}