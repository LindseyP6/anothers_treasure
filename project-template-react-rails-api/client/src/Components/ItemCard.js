import React, {useState} from 'react'

function ItemCard({onHandleDelete, item, id, name, description, image, category, organization }) {

  function handleDeleteClick() {
    fetch(`/items/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onHandleDelete(item);
      });
  }

 
  return (
    <div className="itemCards">

      <h3>{name}</h3>
      <p>{description}</p>
      <img src={image} alt={name} className="cardImages" />
      <p>{category}</p>
      <p>{organization}</p>
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>    <button>update</button>
    </div>
  )
}

export default ItemCard