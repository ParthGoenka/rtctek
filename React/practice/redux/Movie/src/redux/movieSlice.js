import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie:(state,action)=>{
      const newMovie={
        id:state.movies[state.movies.length - 1].id + 1 ,name:action.payload
      }
        state.movies.push(newMovie)
    },
    removeMovie:(state,action)=>{
        state.movies = state.movies.filter((movie) => movie.id !== action.payload)
    },
    fetchMoviesRequest(state) {
      state.loading = true;
    },
    fetchMoviesSuccess(state, action) {
      state.movies = action.payload;
      state.loading = false;
    },
    fetchMoviesFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
})

export const { addMovie, removeMovie, fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure } = movieSlice.actions;
export default movieSlice.reducer;
