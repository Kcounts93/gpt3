import React from 'react'
import './blog.css'
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Alot is happening, we are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgURL={blog01} date="June 2, 2023" title="Revolutionizing Content Creation: How GPT-3 is Changing the Game" />
        </div>
        <div className='gpt3__blog-container_groupB'>
        <Article imgURL={blog02} date="May 29, 2023" title="Unleashing the Power of GPT-3: Exploring its Limitless Potential" />
        <Article imgURL={blog03} date="May 16, 2023" title="From Conversations to Code: GPT-3's Journey in Empowering Developers" />
        <Article imgURL={blog04} date="May 1, 2023" title="GPT-3 in Healthcare: Transforming Patient Care and Medical Research" />
        <Article imgURL={blog05} date="April 22, 2023" title="Unveiling the Artistic Side of GPT-3: Poetry, Music, and Creativity at Its Best" />
        </div>
      </div>
    </div>
  )
}

export default Blog;