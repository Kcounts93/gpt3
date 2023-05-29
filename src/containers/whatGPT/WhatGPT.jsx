import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3, is a state-of-the-art language model developed by OpenAI. It stands for Generative Pre-trained Transformer and represents the third iteration of the GPT series. GPT-3 is a deep learning model that has been trained on a massive amount of text data from the internet, allowing it to generate human-like text based on given prompts." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="ChatGPT-3 powers human-like chatbots capable of engaging in contextually relevant conversations, though occasional limitations in accuracy and reliability remain."/>
      <Feature title="Knowledgebase" text="GPT-3 generates responses based on patterns and information it learned during training," />
      <Feature title="Education" text="Can be utilized in education to provide personalized learning experiences, assist in answering student questions, offer explanations on various topics, generate educational content" />
    </div>
  </div>
);

export default WhatGPT3;