import React from 'react'
import './Article.css'

const Article = ({title, img, children}) => {
  return (
    <article className='artWine container m-2'>
        <img src={img} alt={title} />
        <h2 className='m-2'>{title}</h2>
        <p className='m-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, alias voluptatibus! Molestias cum odit soluta ratione porro saepe tempora, quasi perspiciatis sint voluptatem hic, beatae similique dolorem harum? Sit, quibusdam.</p>
        {children}
    </article>
  )
}

export default Article
