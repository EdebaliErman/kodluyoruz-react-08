import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,  Route, Routes } from 'react-router-dom'
import User from './User';

function Users() {

    {/* Burada users için yani kullanıcılarımız için useState  tanımladık ve loading işlemi içinde tanımladık */}
    const [users, setUsers] = useState();
    const [isLoading, setLoading] = useState(true)
    {/*axios ile Fake apimizi çektik ve useEffect ile render ettik ardından users state'mize set ettik */}
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .finally(() => setLoading(false))

    }, [])
    return (
        <div>
            <h1>Users</h1>
            {isLoading && <div>Loading......</div>}
            <ul> {/*ilk loding kontrolü yaptık ardından  map işlemi ile users datamızı çektik  */}
                {!isLoading && users?.map((user) => (<li key={user.id}><Link to={`${user.id}`}>{user.name}</Link></li>

                ))}

            </ul>
            
            <Routes>
                    {/* Burada /user/:id yerine sadece :id yazmamız yeterli 
                    sebebi ise zaten users'ın içinde olduğu için user'ımız yolu bu şekilde bulucaktır aksi taktirde okumuyacak */}
                <Route path=':id' element={<User />} />
            </Routes>

        </div>
    )
}

export default Users
