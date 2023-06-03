import { useState, useEffect, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../service/config"
import { collection, addDoc } from "firebase/firestore"
import './Checkout.css'

const Checkout = () => {
    const { clearCart, cart } = useContext(CartContext);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailconfirm, setEmailconfirm] = useState("");
    const [error, setError] = useState("")
    const [ordenId, setOrdenid] = useState ("");

    const handleClick = (e)=>{
        e.preventDefault();

        if(!name || !surname || !phone || !email || !emailconfirm){
            setError("Please complete the information");
            return;
        };

        if(email !== emailconfirm){
            setError("The emails do not match");
            return;
        };
        console.log(name, surname, phone, email, emailconfirm)
        setName("");
        setSurname("");
        setPhone("");
        setEmail("");
        setEmailconfirm("");


        const orden = {
            items: cart.map(prod=>({
                    id: prod.item.id,
                    name: prod.item.name,
                    cantidad: prod.item.cantidad
            })),
            total: cart.reduce((total, producto)=> total + producto.item.price * producto.cantidad, 0),
            name,
            surname,
            phone,
            email
        };
    
        addDoc(collection(db, "ordenes"), orden)
        .then((docref)=>{
            setOrdenid (docref.id)
            clearCart()
        })
        .catch((error)=>console.log("Error al crear la orden", error))
        
    }




  return (
    <div className="checkout container">
      <h1>Checkout</h1>
      <form onSubmit={handleClick}>
        {
            cart.map(prod =>(
                <div key={prod.item.id}>
                    <h5>{prod.item.name} x {prod.item.cantidad}</h5>
                    <h4>Total: $ {prod.item.price}</h4>
                </div>
            ))}

            <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="surname">Surname</label>
                <input type="text" value={surname} onChange={(e)=>setSurname(e.target.value)} />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="emailConfirm">Confirm Email</label>
                <input type="text" value={emailconfirm} onChange={(e)=>setEmailconfirm(e.target.value)} />
            </div>
                <button type="submit" className="btn btn-primary">Pay</button>
      </form>

    </div>
  )
}

export default Checkout
