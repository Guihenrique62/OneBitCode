import products from "../database.json"

export default function loadProduct({ params }){
    const product = products.find((p)=> p.id === Number(params.productId))
    
    
    return product
}