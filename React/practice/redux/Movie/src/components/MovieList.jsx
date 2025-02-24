import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie, fetchMoviesRequest } from "../redux/movieSlice";

const MovieList = () => {
    const Dispatch = useDispatch();
    const handleDelete = (key) =>{
        Dispatch(removeMovie(key));
    }
    
    const dispatch = useDispatch();
    const { movies, loading, error } = useSelector(state => state.movies);
  
    useEffect(() => {
      dispatch(fetchMoviesRequest());
    }, [dispatch]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;




    return(<div>
        <h1 className="font-bold text-3xl mb-10">Movies</h1>
        
        {movies.map((movie) => (<li className="font-bold text-2xl" key={movie.id}>{movie.name}<button className="ml-5 mb-5 p-2 rounded-lg bg-blue-500 text-white text-md font-md" onClick={() => handleDelete(movie.id)}>Delete</button></li>))}
        
        </div>)
}

export default MovieList