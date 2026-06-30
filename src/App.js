
import './App.css';
import Header from './components/header/Header';
import Movie from './components/Movies/Movie';
import NavBar from './components/Nav/NavBar';
import AllMovies from "./components/assets/MoviesData"

function App() {
  return (
    <div >
    <NavBar />
    <Header />
    <Movie  movies ={AllMovies}/>
      
    </div>
  );
}

export default App;
