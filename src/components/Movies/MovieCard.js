import React from 'react'
import styles from "./Movie.module.css"

// rendering movie card data 
const MovieCard = ({movie,key}) => {

  return (
    <div className={styles.MovieCard}>
         


        <div>  
                
            
            <h1>{movie.title}</h1>
           
         <div >
            <img className={styles.movieImage} src={movie.imageUrl} alt={movie.title} />
         <p>Rating: <span>{movie.rating}</span> </p>
         <div className= {styles.timedate}>
         <p>📅  <span>{movie.releaseDate}</span></p>
         <p>⏱  <span>{movie.duration}</span></p>
         </div>
         <p>{movie.description}</p>
         <h3>👤 {movie.director}</h3>
         </div>

         </div>




      
    </div>
  )
}

export default MovieCard
