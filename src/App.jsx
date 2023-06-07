import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'  
import PokemonList from './pages/PokemonList'
import ProtectedRoutes from './components/ProtectedRoutes';
import PokemonDetails from './pages/PokemonDetails';
import Loader from './components/Loader';
import { useSelector } from 'react-redux'

function App() {

  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
      <div className="App">
      {
        isLoading && <Loader />
      }
        <Routes>
          
          <Route 
          path='/'
          element={ <Home /> }
          />

          <Route
          element={ <ProtectedRoutes /> }
          >
            <Route 
            path='/pokedex'
            element={ <PokemonList /> }
            />
            
            <Route 
            path='/pokedex/:id'
            element={ <PokemonDetails /> }
            />
          </Route>

        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
