import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([])


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => setUsers(response.data))
    .catch(error => console.log(error) )
  }, [])
  return (
    <div className='task'>
      <table border='1'>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>USERNAME</td>
            <td>EMAIL</td>
            <td>ADDRESS</td>
            <td>GEO</td>
          </tr>
        </thead>
        <tbody>
          {users.map((users, index) => (
            <tr key={index}>
              <td>{users.id}</td>
              <td>{users.name}</td>
              <td>{users.username}</td>
              <td>{users.email}</td>
              <td>{users.address.street},  {users.address.suite},  {users.address.city},  {users.address.zipcode}</td>
              <td>{users.address.geo.lat}, {users.address.geo.lng}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default App