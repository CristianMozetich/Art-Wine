const products = [{
    id:1,
    img: "./assets/img/Barda Pinot Noir 2020.webp",
    name: "Barda Pinot Noir 2020",
    desc: 10,
},
{
    id:2,
    img: "./assets/img/Fincas Notables Cabernet Franc 2018.webp",
    name: "Fincas Notables Cabernet Franc 2018",
    desc: 15,
},
{
    id:3,
    img: "./assets/img/Lagarde Guarda Malbec D.O.C 2019.webp",
    name: "Lagarde Guarda Malbec D.O.C 2019",
    desc: 20,
},
{
    id:4,
    img: "./assets/img/Trapiche Gran Medalla Malbec 2019.webp",
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