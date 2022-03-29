import React from 'react'
import ItemCard from './ItemCard'

function ItemContainer({items}) {
    console.log(items)
  return (
    <div>
    {items.map((item) => (    
    <ItemCard
        key={item.id}
        name={item.name}
        description={item.description}
        image={item.image}
        category={item.category}
        location={item.org_name} 
        // donated={item.user_name}
        />
    )) }
</div>
  )
}

export default ItemContainer