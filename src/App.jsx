import { Routes, Route } from "react-router-dom"
import Home from './Home'


function App() {

  return (
    <div className="App">
       <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={ 'About' } />
          <Route path="contact" element={ 'Contact' } />
      </Routes>
    </div>
  )
}

export default App
