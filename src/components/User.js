import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
function User() {
  const { id } = useParams()
  const [user, setUser] = useState()
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data))
      .finally(() => setLoading(false))
  }, [id])
  return (
    <div>
      <h1>{id} User Detaliy</h1>
      {isLoading && <div>Loading......</div>}
      <code>
        {!isLoading && <ul>
          <li>
            <strong>Name</strong>  {user.name}
          </li>
          <li>
            <strong>User Name</strong>  {user.username}
          </li>
          <li>
            <strong>Mail</strong>  {user.email}
          </li>
          <li>
            <strong>Address</strong>
            <br />
            {user.address.street}
            {user.address.suite}<br />
            {user.address.city} <br />
            {user.address.zipcode}
          </li>
        </ul>}
      </code>
      <br />
      <Link to={`/user/${parseInt(id) + 1}`}><strong>Next User( {parseInt(id) + 1}) </strong></Link>
      <Link to={`/user/${parseInt(id) - 1}`}><strong>Last User( {parseInt(id) - 1}) </strong></Link>
    </div>
  )
}

export default User
