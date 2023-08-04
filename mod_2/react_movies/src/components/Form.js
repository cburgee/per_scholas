// export default function MovieDisplay({ movie }) {
//   const loaded = () => {
//     return (
//       <>
//         <h1>{movie.Title}</h1>
//         <h2>{movie.Genre}</h2>
//         <img src={movie.Poster} alt={movie.Title} />
//         <h2>{movie.Year}</h2>
//       </>
//     )
//   }

//   const loading = () => {
//     return <h1>No Movie to Display</h1>
//   }
//   return movie ? loaded() : loading()
// }
import { useState, useEffect } from "react"

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function Form(props) {
  //State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  })

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault()
    //pass the search term to moviesearch prop, which is apps getMovie function
    props.moviesearch(formData.searchterm)
  }

  //The component must return some JSX
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}
