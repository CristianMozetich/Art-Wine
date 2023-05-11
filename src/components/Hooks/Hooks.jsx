import { Counter } from "../Counter/Counter"



const Hooks = () => {
    const {contador, incrementar, decrementar} = Counter(1,5);
  return (
    <div>
        <button className="btn btn-primary m-2 p-2" onClick={incrementar}>+</button>
        <strong>{contador}</strong>
        <button className="btn btn-primary m-2 p-2" onClick={decrementar}>-</button>
        <button className='btn btn-primary p-2 m-2'>Add To Cart</button>
    </div> 
  )
}

export default Hooks
