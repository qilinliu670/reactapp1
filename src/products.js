import { useState, useEffect } from 'react'
import axios from 'axios'

function Products() {
    var [products, setProducts] = useState()

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:4000/products'
        }).then((response) => {
            setProducts(response.data)
        })
    }, [])

    return <div>
        <h1>Products</h1>
        {products?.length > 0 && products.map((each, index) => {
            return <div key={index}>name: {each.name}, description: {each.description}<br/></div>
        })}
    </div>
}

export default Products