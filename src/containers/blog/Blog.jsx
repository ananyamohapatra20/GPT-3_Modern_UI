import React from 'react';
import './blog.css';
import { Article }  from '../../components';
import { blog01, blog02, blog03, blog04, blog05} from "./imports"

const Blog = () => {
  return (
    <div className='gpt3_blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
        A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
        <Article imgUrl={blog01} date="September 25, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
        <Article imgUrl={blog02} date="October 21, 2022" title="Exploring How GPT-3 and OpenAI Will Transform Tomorrow"/>
        <Article imgUrl={blog03} date="May 15, 2023" title="The Role of GPT-3 and OpenAI in the Future of Technology"/>
        <Article imgUrl={blog04} date="January 25, 2024" title="GPT-3 and OpenAI: Shaping the Future of AI"/>
        <Article imgUrl={blog05} date="September 12, 2022" title="How GPT-3 and OpenAI Are Paving the Way for Innovation"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
