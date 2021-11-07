import React from 'react'

const Header = (props) => {
    return (
        <header className="header row center columns">
             <div className="column column-1">
                <a href="#/">
                    <h1 className="title">Robot Market Place</h1>
                </a>
            </div>
            <div className="column column-2 text-right">
                <a className="title" href="#/cart">
                    Cart{' '}
                    {props.countCartItems ? (
                        <button className="badge">{props.countCartItems}</button>
                    ) : (
                        ''
                    )}
                </a>{' '}
            </div>
        </header>
    )
}

export default Header
