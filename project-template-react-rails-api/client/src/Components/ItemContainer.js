import React, {useState} from 'react'
import ItemCard from './ItemCard'

function ItemContainer({items}) {
  const [options, setOptions] = useState([])
  const [orgs, setOrg] = useState("")


  const filterByOrgs = items.filter((item) =>
    item.org_name.includes(orgs)
);

  function handleOrgChange(e){
    setOrg(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <div classeName="orgDropdown">
      <form onSubmit={handleSubmit}>
        <label for="select1">Select Category</label>
        <select
          onChange={handleOrgChange}
          value={options}
          name="options"
          id="select1"
        >
          <option value="Select">Select</option>
          {filterByOrgs.map((item) => 
                <option value="{item.org_name}">{item.org_name}</option>
              )}
        </select>

      </form>
      </div>

    {items.map((item) => (    
    <ItemCard
        key={item.id}
        name={item.name}
        description={item.description}
        image={item.image}
        category={item.category}
        organization={item.org_name} 
        itemArray = {items}
        />
    )) }
</div>
  )
}

export default ItemContainer