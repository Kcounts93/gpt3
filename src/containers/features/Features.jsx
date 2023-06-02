import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Natural Language Understanding',
    text: 'ChatGPT excels in understanding and generating human-like responses in natural language. It can comprehend and process user queries, instructions, and prompts, allowing for interactive and dynamic conversations.'
  },
  {
    title: 'Contextual Responses',
    text: 'ChatGPT maintains context throughout a conversation, allowing it to provide relevant and coherent responses. It can remember and refer back to earlier parts of the conversation, making the interaction feel more fluid and natural.'
  },
  {
    title: 'Extensive Knowledge Base',
    text: "ChatGPT is trained on diverse internet text, providing access to a wide range of information on various topics. However, its knowledge is based on data up until September 2021, so recent events may not be included."
  },
  {
    title: 'Creative and Open-Ended',
    text: 'ChatGPT is capable of generating creative and imaginative responses. It can engage in storytelling, generate ideas, and provide suggestions. It is not limited to factual information but can also produce fictional narratives or explore hypothetical scenarios.'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>Your Future is Now and You Just Need To Realize It. Step into the Future Today & Make It Happen</h1>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) =>
        <Feature title={item.title} text={item.text} key={item.title + index} />
        )}
      </div>
    </div>
  )
}

export default Features;