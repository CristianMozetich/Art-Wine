import React from 'react'
import './Article.css'

const Article = ({title, img, children}) => {
  return (
    <article className='artWine justify-content-center m-2 flex-wrap'>
        <h2 className='m-2'>{title}</h2>
        <h6 className='m-2 text-center'>In our store you can choose wines to accompany your experiences and enjoy the good taste of art bla bla bla bla bla blablaaaaaa</h6>
        <img className='imgArticle m-2' src={img} alt={title} />
        {children}
    </article>
  )
}

export default Article
