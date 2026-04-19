
import Header from './components/layouts/Header.jsx'
import Footer from './components/layouts/Footer.jsx'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  )
}

export default App
