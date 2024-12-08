import { useEffect, useState } from "react";
import axios from "axios"
import Topbar from "./components/topbar"
import UserCard from "./components/UserCard"


function App() {

  const [users, setUser] = useState([])

  useEffect(() => {
    axios.get(import.meta.env.VITE_REACT_APP_BASE_URL).then((response) => {
      setUser(response.data);
    });
  }, []);



  return (
    <>
      <Topbar/>
      <div className='h-full w-full p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
      {users.map((user) => (
          <UserCard
            key={user._id}
            id={user._id}
            name={user.name}
            email={user.email}
            phone={user.phone}
            website={`http://${user.website}`}
          />
        ))}

      </div>
    </>
  )
}

export default App
