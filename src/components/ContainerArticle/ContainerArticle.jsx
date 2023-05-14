import React from 'react'
import Article from '../Article/Article'

const ContainerArticle = () => {
  return (
    <>
    <Article title="ART & WINE" img="../../../assets/img/vinoArt.avif" >
        <img className='imgArticle m-2' src="../../../assets/img/vinosArt.avif" alt="wine" />
        <img className='imgArticle m-2' src="../../../assets/img/wineArt2.jpg" alt="vino" />
        <strong>esto es un agregado de contenido a un articulo mediante "children"</strong>
    </Article>
    </>
  )
}

export default ContainerArticle
