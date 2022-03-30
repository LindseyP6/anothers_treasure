import React, { useState } from 'react'

function ItemForm({items, onFormSubmit}) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [organization, setOrganization] = useState("")

    function handleSubmit(e) {
        const newItem = {
            name,
            description,
            image,
            category,
            organization_id: organization.id
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
    <label>Item Image
        <input
            type="name"
            name="name"
            value={image}
            onChange={(e) => setImage(e.target.value)} />
    </label>
    <br></br>

    <label for="select1">Select Category</label>
          <br></br>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            name="category"
            id="select1"
          >
            <option value="Select">Select</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothes">Clothes</option>
            <option value="Kitchen">Kitchen</option>
          </select>
<br></br>
    <label for="select1">Select organization</label>
          <br></br>
        <select
            onChange={(e) => setOrganization(e.target.value)}
            value={organization}
            name="organization"
            id="select1"
            placeholder="Field Textarea"
            >
            <option value="Select">Select</option>
            {items.map((item) => 
              <option value="{item.org_name}">{item.org_name}</option>
            )}
            {/* <option value="Org">Org2</option>
            <option value="Org1">Org3</option>
            <option value="rg">Org4</option> */}
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