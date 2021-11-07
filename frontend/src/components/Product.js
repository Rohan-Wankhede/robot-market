import React from 'react'
import moment from 'moment'

const Product = (props) => {
    const { product, onAdd } = props;
    const { name, material, image, stock, price, createdAt } = product;
    const numberFormat = (value) => new Intl.NumberFormat('th-TH', {
        style: 'currency',
        currency: 'THB'
    }).format(value);
    return (
        <>
            <div className="card">
                <div>
                <img src={image} alt={name} /></div>
                <div className="container">
                    <h3>{name}</h3>
                    <span>{numberFormat(price)}</span>
                    <h5>Stock : {stock}</h5>
                    <h5>{moment(createdAt).format('DD-MM-YYYY')}</h5>
                    <h5> Material : {material}</h5>
                    <div className="button" >
                        <button onClick={() => onAdd(product)} disabled={stock > 0 ? false : true}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
