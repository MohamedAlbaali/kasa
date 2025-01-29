import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Featchapi from './contexts/featchapi'
import ProjectDetails from './pages/projectDetails'
import ErrorPage from './pages/error'
import About from './pages/about'

function App() {

  return(
    <>
    <Router>
      <Header/>
      <Featchapi>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path="/project/:id" element={<ProjectDetails/>}/>
              <Route path='*' element={<ErrorPage/>}/>
            </Routes>
      </Featchapi>
      <Footer/>
    </Router>

    </>
  )
}

export default App
