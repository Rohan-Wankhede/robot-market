import * as React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import Dropdown from './components/Dropdown';
import { useState, useEffect } from 'react';
function App() {

  const url = 'http://localhost:8000/api/robots/';
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [uniqueMaterials, setUniqueMaterials] = useState([]);


  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setProducts(users.data);
  };
  const uniqueMaterialsTmp = [];
  products.map(mat => {
    if (uniqueMaterials.indexOf(mat.material) === -1) {
      uniqueMaterials.push(mat.material)
    }
  });
  uniqueMaterials.map(op => {
    uniqueMaterialsTmp.push(
      {
        value: op,
        label: op
      }
    )
  }
  );

  const handleDropdown = (selectedMaterial) => {
    setSelectedMaterial(selectedMaterial)
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.name === product.name);
    if (exist) {
      if (exist.qty > (exist.stock - 1)) {
        alert('Maximum Quantity for ' + product.name + 'is limited to ' + exist.stock)
        return
      }
      setCartItems(
        cartItems.map((x) =>
          x.name === product.name ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      if (cartItems.length > 4) {
        alert('Only 5 products can be added to the cart.')
        return
      }
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.name === product.name);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.name !== product.name));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.name === product.name ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>

      <div className="columns">
        <div className="column column-1">
          <Main products={products} uniqueMaterialsTmp ={uniqueMaterialsTmp} handleDropdown ={handleDropdown} onAdd={onAdd} selectedMaterial={selectedMaterial} ></Main>
        </div>
        <div className="column column-2">
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
        </div>
      </div>
    </div>
  );
}

export default App;
