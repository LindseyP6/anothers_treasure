import React from 'react'

function ItemCard({ name, description, image, category, organization }) {
  return (
    <div className="itemCards">
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={image} alt={name} className="cardImages" />
      <p>{category}</p>
      <p>{organization}</p>
      <button>delete</button>
      <button>update</button>
    </div>
  )
}

export default ItemCard