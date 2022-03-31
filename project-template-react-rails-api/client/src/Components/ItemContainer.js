import React from 'react'
import ItemCard from './ItemCard'

function ItemContainer({items}) {
  return (
    <div>
    {items.map((item) => (    
    <ItemCard
        key={item.id}
        name={item.name}
        description={item.description}
        image={item.image}
        category={item.category}
        organization={item.org_name} 
        />
    )) }
</div>
  )
}

export default ItemContainer