import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemCard1 from './ItemCard1'


function OrgCard() {
const [org, setOrg] = useState([])
const [items, setItems] = useState([])
    
const {id} = useParams()
  useEffect(() => {
    fetch(`/organizations/${id}`)
        .then(r => r.json())
        .then(org =>setOrg(org));
      }, [id])

  useEffect(() => {
    fetch(`/items`)
        .then(r => r.json())
        .then(items =>setItems(items));
      }, [])

  // console.log({id})

  // const displayedItem = <ItemCard1 key={items.id} items={items}/>
  //   if ({id} === items.org_id) {
  //     return displayedItem
  //   }
  
  const orgItems = items.filter((item) => {
      if ({id} === item.organization_id) {
        return item
      }
        });

  return (
    <> 
         

    <div className='orgPage'>
    <h3>Organization Details:</h3>
    <p>{org.name}</p>
    <p>{org.address}</p>
    <p>{org.telephone}</p>
    <p> In need of: {org.needs} </p>
    {/* <p>{org.items}</p> */}
    <ItemCard1 key={items.id} items={orgItems}/>
    </div>
    </>
  )
}

export default OrgCard

//map through orgs and then render an item card for each nested item

  // const orgItems = org.items
  // console.log("items", orgItems)
  // const itemCards = orgItems.map(item => 
  //   <itemCard1
  //   key = {item.id}
  //   name = {item.name} />)

