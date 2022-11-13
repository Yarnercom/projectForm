import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from "../../axios";

const Product = () => {

    const params = useParams()
    const [product, setProduct] = useState({})

    useEffect(()=>{
        axios.get(`/product/${params.id}`)
            .then(({data})=>{
                setProduct(data)
            })
    }, [])

    return (
        <div className='product'>
            <div className='container'>
                <div className='product__crumbs'>
                    <Link className='product__crumbs-link' to='/'>Home</Link> <span className='product__crumbs-icon'>►</span> <p className='product__crumbs-product'>Product</p>
                </div>
                <div className='product__container'>
                    <div className='product__left'>
                        <img className='product__left-img' src={product.image} alt={product.title}/>
                        <div className='product__left-info'>
                            <h2>{product.title}</h2>
                            <div>
                                <p>Цвет:{product.color}</p>
                            </div>
                        </div>
                    </div>
                    <div className='product__right'>
                        <p className='product__right-price'>{product.price} KGS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;