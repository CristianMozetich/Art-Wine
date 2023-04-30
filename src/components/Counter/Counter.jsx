import { useState, useEffect } from "react"

const Counter = ({start, stock}) => {
    


    const [counter, setCounter] = useState(start);
    const increaseCounter = ()=>{
        if (counter < stock){
            setCounter(counter + 1);
        }
    };

    useEffect(()=>{
        console.log("se ultilizo useEffect");
        document.title = `contador : ${counter}`;

    },[counter])

    const removeProduct = ()=>{
        if(counter > start){
            setCounter(counter - 1);
        };
    };
    const addToCart = ()=>{
        console.log(`se agrego ${counter} items` )
    }
  return (
    <div className="d-flex m-5">
      <button className="btn m-2 bg-primary" onClick={increaseCounter}> + </button> 
      <strong className="m-2">{counter}</strong>
      <button className="btn m-2 bg-primary" onClick={removeProduct}> - </button>
      <br />
      <br />
      <button className="btn bg-success" onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default Counter
