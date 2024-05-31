
import { useEffect,useState } from 'react'
// import Nasi from '../../componen/img/makanan.jpg'
import './produk.css'
import axios from 'axios'
import { config } from '../../config'


const Produk =()=>{
    const [products, setPoroducts]= useState([])

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = async()=>{
        const products = await axios.get(`${config.api_host_dev}/product`);
        console.log(products.data.data)
        setPoroducts(products.data.data)
    }
    return(
        <div className="USProduk-row">
            {
            products.map((item,index)=>{
                // console.log(`http://localhost:5000/${item.foto}`)
                return(
                <div className="USproduk-card" key={index.id}>
                <img className='imgProdut' src={`${config.api_host_dev}/foto/${item.foto}`} alt={item.name}/>
                <h3>nama    : {item.name}</h3>
                <h4>harga   : {item.harga}</h4>
            </div>
                )})
                }
        </div>
    )
}
export default Produk