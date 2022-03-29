import React, { useState } from 'react'

function ItemForm({items, onFormSubmit}) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState("")
    const [category, setCategory] = useState("")
    const [location, setLocation] = useState("")

    function handleSubmit(e) {
        const newItem = {
            name,
            description,
            img,
            category,
            location
        }
        e.preventDefault();
        fetch("/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        })
          .then((response) => response.json())
          .then((data) => onFormSubmit(data));
      }

  return (
    <div className="itemForm">Signup!
    <form onSubmit={handleSubmit} className="signupForm">
    <label>Item Name
        <input
            type="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    </label>
    <label>Item Description
        <input
            type="name"
            name="name"
            value={description}
            onChange={(e) => setDescription(e.target.value)} />
    </label>
    <label>Item Category
        <input
            type="name"
            name="name"
            value={img}
            onChange={(e) => setImg(e.target.value)} />
    </label>

    <label for="select1">Select Category</label>
          <br></br>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            name="category"
            id="select1"
            placeholder="Field Textarea"
          >
            <option value="Select">Select</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothes">Clothes</option>
            <option value="Kitchen">Kitchen</option>
          </select>

    <label for="select1">Select Location</label>
          <br></br>
        <select
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            name="location"
            id="select1"
            placeholder="Field Textarea"
            >
            <option value="Select">Org1</option>
            <option value="Furniture">Org2</option>
            <option value="Clothes">Org3</option>
            <option value="Kitchen">Org4</option>
        </select>

    <button 
        type="submit"
        name="submit"
        value="Join!"
        className="submit"> 
        <strong>Enter!</strong>
    </button>
    </form>
    </div>
  )
}

export default ItemForm