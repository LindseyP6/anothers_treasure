import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';


function ItemEditForm({ handleItemUpdate, itemsArray, orgArray, itemId, name, description, image, category, organization  }) {
 
  const [formState, setFormState] = useState({})
  const { id } = useParams();
  const history = useHistory();


  useEffect(() => {
    fetch(`items/${id}`)
      .then(res => res.json())
      .then(data => {
        setFormState(data);
      })
  }, [id])

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setFormState({...formState, [name]: value})
//   }
  function handleChange(event){
      setFormState({
    ...formState, [event.target.name]: event.target.value,
  });
}

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`/items/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    })
      .then(res => res.json())
      .then(updatedItem => {
        handleItemUpdate(updatedItem)
        history.push(`/items/${id}`)
      })
    }

//   const { name, description, image, category, organization } = formState;

  return (
    <div className="itemForm">
      {" "}
      Donate an Item
      <form onSubmit={handleSubmit} className="signupForm">
        <label>
          Item Name
          <br></br>
          <input
            type="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Item Description
          <br></br>
          <input
            type="name"
            name="name"
            value={description}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Item Image
          <br></br>
          <input
            type="name"
            name="name"
            value={image}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label for="select1">Select Category</label>
        <br></br>
        {/* <select
          onChange={handleChange}
          value={category}
          name="category"
          id="select1"
        >
          <option value="Select">Select</option>
          <option value="Furniture">Furniture</option>
          <option value="Clothes">Clothes</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Books">Books</option>
          <option value="Toys">Toys</option>
        </select> */}
        {/* <br></br>
        <label for="select1">Select organization</label>
        <br></br>
        <select
          onChange={handleChange}
          value={organization}
          name="organization"
          id="select1"
          placeholder="Field Textarea"
        >
          <option value="Select">Select</option>
          {itemsArray.map((item) => (
            <option value="{item.org_name}">{item.org_name}</option>
          ))}
        </select> */}
        <br></br>
      <button onClick={() => handleItemUpdate(itemId)}>Update</button> 

      </form>
    </div>
  );
}
export default ItemEditForm;