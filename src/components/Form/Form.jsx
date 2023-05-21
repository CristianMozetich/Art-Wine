import { useState } from "react"
import './Form.css'



const Form = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")

    const hanldeClick = (e)=>{
        e.preventDefault();

        const nuevoCliente = {name, surname, email}

        console.log(nuevoCliente);

        setName("")
        setSurname("")
        setEmail("")
    }
    
    

  return (
    <form onSubmit={hanldeClick}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' onChange={(e)=>setName(e.target.value)} value={name} />

        <label htmlFor="surname">Surname</label>
        <input type="text" id='surname' onChange={(e)=>setSurname(e.target.value)} value={surname}/>

        <label htmlFor="email">Email</label>
        <input type="text" id='email' onChange={(e)=>setEmail(e.target.value)} value={email} />

        <button type='submit'>Send</button>
      
    </form>
  )
}

export default Form
