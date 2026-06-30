import React from 'react'
import MovieCard from './MovieCard'
import styles from "./Movie.module.css"

const Movie = ({movies}) => {
  return (
    <div className={styles.container} >
    {movies.map((movie) =>{

        return (<MovieCard 
          key={movie.id}
          movie = {movie}/> 

        );
         
        
    })};
   

    </div>
   
  )
}

export default Movie
