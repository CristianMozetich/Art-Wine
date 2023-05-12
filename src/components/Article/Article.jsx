import React from 'react'
import './Article.css'

const Article = ({title, img, children}) => {
  return (
    <article className='artWine container justify-content-center m-2 flex-wrap'>
        <h2 className='m-2'>{title}</h2>
        <p className='m-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, alias voluptatibus! Molestias cum odit soluta ratione porro saepe tempora.</p>
        <img className='m-2' src={img} alt={title} />
        {children}
    </article>
  )
}

export default Article
