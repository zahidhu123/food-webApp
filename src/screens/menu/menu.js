import React, { useState } from 'react'
import './menu.css'
import Navbar from '../../component/navbar/navbar'
import Burger from '../../assets/burger.jpeg'
import { MdAdd, MdRemove } from 'react-icons/md'
import { count, productList } from '../../data/productDetail'

export default function Menu() {

  const [count, setCount] = useState(0);

    return (
        <>
            <Navbar  cartCount={count}/>
            <div className="container px-5">
                <div className="row justify-content-start mt-5">
                    {productList.map((product)=> {return <div className="col-md-4">
                        <div class="card mb-4" >
                            <img src={product.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title pt-3">{product.name}</h5>
                                <p class="card-text">Price: {product.price}</p>
                                <a href="#" class="btn btn-primary f-25 add me-2" onClick={()=> setCount(count+ 1)}><MdAdd /></a>
                                <a href="#" class="btn btn-secondary f-25 minus"  onClick={()=>(count == 0) ? null : setCount(count - 1)}><MdRemove /></a>
                            </div>
                        </div>
                    </div>}) }
                 
                </div>
            </div>
        </>
    )
}
