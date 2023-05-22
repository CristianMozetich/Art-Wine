import { useState } from "react"
import './Form.css'



const Form = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const hanldeClick = (e)=>{
        e.preventDefault();

        const nuevoCliente = {name, surname, email}

        console.log(nuevoCliente);

        setName("")
        setSurname("")
        setEmail("")
    }
    
    

  return (
    <form className="formulario" onSubmit={hanldeClick}>
        <label className="p-2" htmlFor="name">Name<input type="text" id='name' onChange={(e)=>setName(e.target.value)} value={name} /></label>
        

        <label className="p-2" htmlFor="surname">Surname<input type="text" id='surname' onChange={(e)=>setSurname(e.target.value)} value={surname}/></label>
        

        <label className="p-2" htmlFor="email">Email<input type="text" id='email' onChange={(e)=>setEmail(e.target.value)} value={email} /></label>
        

        <label className="p-2" htmlFor="phone">Phone<input type="text" id="phone" onChange={(e)=> setPhone(e.target.value)} value={phone} /></label>
        

        <label className="p-2" htmlFor="comentario">Message<textarea name="comentario" id="comentario"></textarea></label>
        

        <button className="btn btn-primary m-2 p-2" type='submit'>Send</button>
      
    </form>
  )
}

export default Form
