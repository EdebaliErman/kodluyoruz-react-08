import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom'
function User() {
  {/*Burada useParams kullanık ve userden gelen id burada gözükecektir*/}
  const { id } = useParams()
  const [user, setUser] = useState()
  const [isLoading, setLoading] = useState(true)


  {/*Apimizin users/"Buraya useParams'taki tanımladığımız yani userden gelen id'yi yazmamız yeterli ve id'yi useEffet ile aktarmamız önemli"*/}

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <div>

      <h1>{id} 'is User Address </h1>
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
      {/*parseInt kullandık çünkü bize gelen id değeri string olduğu için sayı değerine yani int' dönüştürmemiz lazım.
        Burada yaptığımız işlem eğer id'im 10 'dan küçük ve 1'den büyük ise benim linkimi göster değilse gösterme şeklinde.
        Users'dan geldiğimiz için to'muza /users/'şeklinde kullandık. 
      */}
      {parseInt(id) < 10 && <Link to={`/users/${parseInt(id) + 1}`}><strong>Sonraki Kullanıcı( {parseInt(id) + 1}) </strong></Link>}
      {parseInt(id) > 1 && <Link to={`/users/${parseInt(id) - 1}`}><strong>Önceki Kullanıcı( {parseInt(id) - 1}) </strong></Link>}
    </div >
  )
}

export default User
