const products = [{
    id: "1",
    img: "../assets/img/Barda_Pinot_Noir_2020-removebg-preview.png",
    name: "Barda Pinot Noir 2020",
    price: 10,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis aliquam aperiam, voluptate voluptas voluptates expedita nostrum mollitia.",
    idCat: "1",
    stock: 10,
},
{
    id: "2",
    img: "../assets/img/Fincas_Notables_Cabernet_Franc_2018-removebg-preview.png",
    name: "Fincas Notables Cabernet Franc 2018",
    price: 15,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis aliquam aperiam, voluptate voluptas voluptates expedita nostrum mollitia.",
    idCat: "1",
    stock: 10,
},
{
    id: "3",
    img: "../assets/img/Lagarde_Guarda_Malbec_D.O.C_2019-removebg-preview.png",
    name: "Lagarde Guarda Malbec D.O.C 2019",
    price: 20,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis aliquam aperiam, voluptate voluptas voluptates expedita nostrum mollitia.",
    idCat: "2",
    stock: 10,
},
{
    id: "4",
    img: "../assets/img/Trapiche_Gran_Medalla_Malbec_2019-removebg-preview.png",
    name: "Trapiche Gran Medalla Malbec 2019",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis aliquam aperiam, voluptate voluptas voluptates expedita nostrum mollitia.",
    idCat: "3",
    stock: 10,
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

export const getProductoPorCategoria = (idCategoria)=>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            const productoPorCategoria = products.filter(prod => prod.idCat === idCategoria)
            resolve (productoPorCategoria)
        }, 2000)
    })
};