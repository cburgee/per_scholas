import { useEffect, useState } from "react"
import UsersListItem from "./UsersListItem"

function UsersList() {
  const [users, setUsers] = useState(null)
  // Without the array of dependencies the use will run every time the mounts or re-render.

  // With an empty array it will run only when the component mounts the first time.

  useEffect(() => {
    console.log("Inside the useEffect")

    const fetchData = async () => {
      try {
        // return a response object
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json() // parsing the raw data
        console.log(data)
        setUsers(data) // setting the data to the users state variable
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  console.log("USERS", users)

  // const usersElements = users ? users.map(user => <h3 key={user.id} >{user.name}</h3>) : <h3>Loading...</h3>;

  return (
    <div>
      <h2>UsersList</h2>
      {/* <div>{usersElements}</div> */}

      <>
        {users ? (
          users.map((user) => <UsersListItem user={user} />)
        ) : (
          <h3>Loading!!!!</h3>
        )}
      </>
    </div>
  )
}

export default UsersList
