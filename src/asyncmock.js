const products = [{
    id:1,
    img: "./assets/img/Barda_Pinot_Noir_2020-removebg-preview.png",
    name: "Barda Pinot Noir 2020",
    desc: 10,
},
{
    id:2,
    img: "./assets/img/Fincas_Notables_Cabernet_Franc_2018-removebg-preview.png",
    name: "Fincas Notables Cabernet Franc 2018",
    desc: 15,
},
{
    id:3,
    img: "./assets/img/Lagarde_Guarda_Malbec_D.O.C_2019-removebg-preview.png",
    name: "Lagarde Guarda Malbec D.O.C 2019",
    desc: 20,
},
{
    id:4,
    img: "./assets/img/Trapiche_Gran_Medalla_Malbec_2019-removebg-preview.png",
    name: "Trapiche Gran Medalla Malbec 2019",
    desc: 25,
}];

export const getProducts = ()=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
};

export const getUnProducto = (id)=>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            const productos = products.find(prod => prod.id === id)
            resolve(productos)
        }, 2000)
    })
};