import { Counter } from "./CustomCounter"


const Hooks = () => {
    const {contador, incrementar, decrementar} = Counter(1,5);
  return (
    <div className="d-flex flex-column flex-wrap">
        <h4>Cantidad</h4>
        <button className="btn btn-primary m-2" onClick={incrementar}>+</button>
        <strong>{contador}</strong>
        <button className="btn btn-primary m-2" onClick={decrementar}>-</button>
        <button className='btn btn-primary p-2 m-2'>Add To Cart</button>
    </div> 
  )
}

export default Hooks
