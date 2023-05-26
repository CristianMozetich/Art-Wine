import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, img, name, price}) => {
  return (
      <div className="card m-2 p-4 text-center" style={{width: '18rem'}}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price}</p>
          <Link className="btn btn-primary" to={`/Item/${id}`}>Ver Detalles</Link>
        </div>
      </div>
  )
}

export default Item
