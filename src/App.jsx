import './App.css'
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/footer/Footer'
import UserList from './Components/userList/UserList'
import NewUser from './Components/newUser/NewUser'
import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)

const handleDelete = (id) => {
  setUsers((prev) => {
    return prev.filter((user) => {
      return user.id !== id
    })
  })   
}

const closeModal = (e) => {
  if(e.target.className === "overlay") setShowModal(false)
  if(e.key === "Escape") setShowModal(false)
}

const addUser = (user) => {
  setUsers((prev) => {
    return [...prev, user]
  })
  setShowModal(false)
}

  return (
    <div className='App' onClick={closeModal} onKeyDown={closeModal}>
      <Navbar usersLength={users.length}/>
          <main>
           <div className="no-users">
            {users.length === 0 && <h2>No Users</h2>}
           </div>
           <UserList users={users} handleDelete={handleDelete}/>
          </main>
          {showModal && <NewUser addUser={addUser}/>}
          <button className='create-user' onClick={() => setShowModal(true)}>Create user</button>
      <Footer />
    </div>
  )
}

export default App

