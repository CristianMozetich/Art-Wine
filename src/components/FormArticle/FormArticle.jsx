import './FormArticle.css'

const FormArticle = () => {
    const imgForm = "../../../assets/img/wineArt.avif"
  return (
    <div className="formArticle m-2 text-center d-flex flex-column align-items-center">
        <h2>Tastings & Events</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, similique quasi aperiam ut dicta reiciendis, laboriosam illum vitae cum nam modi neque repellat iusto aliquid ratione, architecto asperiores explicabo iste?</p>
        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, incidunt.</strong>
        <img className='imgForm m-2 p-2' src={imgForm} alt="wines" />
    </div>
  )
}

export default FormArticle
