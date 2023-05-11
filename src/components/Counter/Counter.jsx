import { useState } from "react"


export const Counter = (valorinical, valorMaximo) => {
    const [contador, setContador] = useState(null);

    const incrementar = ()=>{
        if ( contador < valorMaximo){
            setContador (contador + 1)
        } 
    }

    const decrementar = ()=>{
        if ( contador > valorinical){
            setContador (contador - 1)
        }
    };

  return {contador, incrementar, decrementar};
}


