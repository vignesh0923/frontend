import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Mainpage from './components/Mainpage'
import Ourservices from './components/Ourservices'
import Contact from './components/Contact'
import Blog from './components/Blog'
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainpage/>}/>
          <Route path='/service' element={<Ourservices/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App