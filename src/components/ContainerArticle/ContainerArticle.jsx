import React from 'react'
import Article from '../Article/Article'

const ContainerArticle = () => {
  return (
    <>
    <Article  title="ART & WINE" img="../../../public/assets/img/vinoArt.avif" >
        <img src="../../../public/assets/img/vinosArt.avif" alt="" />
    </Article>
    <Article img="../../../public/assets/img/wineArt.avif">
        <strong>esto es un agregado de contenido a un articulo mediante "children"</strong>
    </Article>
    </>
  )
}

export default ContainerArticle
