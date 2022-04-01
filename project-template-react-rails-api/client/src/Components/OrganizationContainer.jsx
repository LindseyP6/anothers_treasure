import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom';
import OrganizationPage from './OrganizationPage'

function OrganizationContainer({orgArray}) {

  const [card, setCard] = useState([])
    
  // const {id} = useParams()
  //   useEffect(() => {
  //     fetch(`/organizations/${id}`)
  //         .then(r => r.json())
  //         .then(card =>setCard(card));
  //       }, [id])

  return (
    <div className='orgContainer'>
       { orgArray.map(org => <div>
       <h1>{org.name}</h1>
       <p> {org.address} {org.telephone}</p>
       <Link key={org.id} to = {`/organizations/${org.id}`}>  
      <p> Organization Page</p>
    </Link>
</div>)
}
    </div>
  )
}

export default OrganizationContainer