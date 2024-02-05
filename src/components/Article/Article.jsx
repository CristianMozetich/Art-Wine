import Aos from 'aos'
import 'aos/dist/aos.css';
import './Article.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Article = () => {

  useEffect(()=> {
    Aos.init();
  }, [])

  return (
    <>
    <article className='artWine'>
        <h2 className='m-2' data-aos="fade-right" data-aos-duration="1000">Art & Wine</h2>
        <Link to={"/categoria/1"} className='btn'>Malbec</Link>
        <Link to={"/categoria/2"} className='btn'>Cavernet Sauvignon</Link>
        <Link to={"/categoria/3"} className='btn'>Merlot</Link>
    </article>
    <div className='imagenes'>
      <img src="/assets/img/vinoArt.avif" alt="" />
      <img src="/assets/img/wineArt2.jpg" alt="" />
      <img src="/assets/img/vinosArt.avif" alt="" />
    </div>
    </>
  )
}

export default Article
