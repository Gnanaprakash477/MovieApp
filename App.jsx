import NavBar from './NavBar'
import Home from './Home'
import Favorites from './favorites.'
import { Route,Routes } from 'react-router-dom'

function App(){

  document.title = "Movie App"

  return(
  <div className='full-body'>
    <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element = {<Home />}/> 
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>
    </main>
  </div>
  )
}

export default App