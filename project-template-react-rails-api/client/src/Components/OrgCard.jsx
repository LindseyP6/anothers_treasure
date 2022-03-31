import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'


function OrgCard() {
const [org, setOrg] = useState([])
    
const {id} = useParams()
  useEffect(() => {
    fetch(`/organizations/${id}`)
        .then(r => r.json())
        .then(org =>setOrg(org));
      }, [id])

  return (
    <> 
    <p>{org.name}</p>

    </>
  )
}

export default OrgCard