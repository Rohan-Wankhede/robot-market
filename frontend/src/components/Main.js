import React from 'react'
import Product from './Product';
import Dropdown from './Dropdown';

const Main = (props) => {
    const { products, selectedMaterial, onAdd, handleDropdown, uniqueMaterialsTmp } = props;

    const filteredProducts = products.filter(function (prod) {
        if (prod.material == selectedMaterial && selectedMaterial != 'All') {
            return true;
        }
        if (selectedMaterial == 'All') {
            return true;
        }
        return false;
    }).map(function (prod) { return prod; });

    return (
        <main className="block col-2">
            <h2>Robots</h2>
            <div className="rightAlignItems">
                <Dropdown
                    data={uniqueMaterialsTmp}
                    styleClass='none'
                    value={selectedMaterial}
                    placeholder='Select Material'
                    placeholderValue='All'
                    onChange={handleDropdown}
                />
            </div>
            <div className="users">
                {filteredProducts.map((product, index) => (
                    <Product key={index} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </main>
    )
}

export default Main
