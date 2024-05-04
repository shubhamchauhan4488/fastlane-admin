
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([{
    id: '1',
    name: 'pasta',
    price: '9.99',
    quantity: 1
  }]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);
  console.log('items', items)
  const fetchItems = async () => {
    try {
      const response = await axios.get('https://effective-space-pancake-r7jqqgxj667hx695-3000.app.github.dev/v1/api/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleAddItem = async () => {
    try {
      await axios.post('https://effective-space-pancake-r7jqqgxj667hx695-3000.app.github.dev/v1/api/items', {
        name: itemName,
        price: parseFloat(itemPrice),
        quantity: parseInt(itemQuantity)
      });
      // Clear input fields
      setItemName('');
      setItemPrice('');
      setItemQuantity('');
      // Fetch updated items
      fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="App">
      <h1>Grocery Item Dashboard (Admin)</h1>
      <div>
        <h2>Add New Item</h2>
        <input type="text" placeholder="Name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        <input type="number" placeholder="Price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
        <input type="number" placeholder="Quantity" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div>
        <h2>Existing Items</h2>
        <ul>
          
        </ul>
      </div>
    </div>
  );
}

export default App;
