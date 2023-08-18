import React,{useState} from 'react'
import "./style.css"
import movieData from "./data/movieData";
import MovieList from './Components/MovieList';
import MovieDisplay from './Components/MovieDisplay';

const App = () => {

    const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div>
        <h1 className='heading'>Movies List</h1>
        <MovieList  addMovie={setSelectedMovie} />
       { selectedMovie && <MovieDisplay  movieToBeDisplayed={selectedMovie} />}
    </div>
  )
}

export default App