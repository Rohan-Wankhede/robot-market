import React from 'react'

const Basket = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const numberFormat = (value) => new Intl.NumberFormat('th-TH', {
        style: 'currency',
        currency: 'THB'
        }).format(value);
    return (
        <aside className="cartItems col-1">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item, index) => (
                    <div key={index} className="subcolumns ">
                        <div className="subcolumn subcolumn-1">{item.name}</div>
                        <div className="subcolumn subcolumn-2 align-center">
                            <button onClick={() => onRemove(item)} className="remove">
                                -
                            </button>{' '}
                            <button onClick={() => onAdd(item)} className="add">
                                +
                            </button>
                        </div>
                        <div className="subcolumn subcolumn-3 text-right">
                            {item.qty} x {numberFormat(item.price)}
                        </div>
                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className="columns">
                            <div className="column column-1">
                                <strong>Total Price</strong>
                            </div>
                            <div className="column column-2 text-right">
                                <strong>{numberFormat(totalPrice.toFixed(2))}</strong>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <button onClick={() => alert('Checkout Cart!')}>
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </aside>
    )
}

export default Basket
