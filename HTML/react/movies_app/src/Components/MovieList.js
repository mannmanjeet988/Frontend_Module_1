import React,{useState} from 'react'
import movieData from "../data/movieData";
import MovieDisplay from './MovieDisplay';

const MovieList = ({addMovie}) => {
  return (
    <div className='movie-list'>
       {
            movieData.map((movie)=>(
                <h2 onClick={()=>addMovie(movie)}>{movie.title}</h2>
            ))
        }
       </div>
       
  )
    }

export default MovieList