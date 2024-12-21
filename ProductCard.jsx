// src/components/AddProductForm.jsx
import React, { useState } from 'react';

const AddProductForm = () => {
  const [form, setForm] = useState({
    name: '',
    image: '',
    price: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Data:', form);
    alert('Product added (not persisted).');
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h1>Add New Product</h1>
      <label>
        Product Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={form.image} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={form.price} onChange={handleChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={form.category} onChange={handleChange} />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
