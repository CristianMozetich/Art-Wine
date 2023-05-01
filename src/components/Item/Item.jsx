import React from 'react'

const Item = ({img, name, desc}) => {
  return (
      <div className="card m-2 text-center" style={{width: '18rem'}}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title"> {name} </h5>
          <p className="card-text"> {desc} </p>
          <a href="#" className="btn btn-primary">Description</a>
        </div>
      </div>
  )
}

export default Item
