import React,{useState} from 'react'
import movieData from "../data/movieData";
import MovieList from './MovieList';

const MovieDisplay = ({movieToBeDisplayed}) => {

    // if(!movieToBeDisplayed) return null;

  return (
    <div className='movie-display'>
        <h1 className='info'>Movie info</h1>
        <h2>Title: {movieToBeDisplayed.title}</h2>
        <h2>Year: {movieToBeDisplayed.year}</h2>
        <h2>Runtime: {movieToBeDisplayed.runtime} minutes</h2>
        <h2>Genre: {movieToBeDisplayed.genre}</h2>
    </div>
  )
}

export default MovieDisplay