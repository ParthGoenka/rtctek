import MovieInput from "./components/MovieInput"
import MovieList from "./components/MovieList"

function App() {
  return (
    <div className="bg-gray-300">
    <div className="flex flex-wrap justify-center">
      <MovieInput />
      </div>
      <div className="flex flex-wrap justify-center mt-20">
      <MovieList /> 
    </div>
    </div>
  )
}

export default App
