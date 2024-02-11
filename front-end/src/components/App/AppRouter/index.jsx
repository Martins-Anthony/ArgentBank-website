import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../../layout/NavBar'
import Home from '../../../pages/Home'
import Footer from '../../layout/Footer'
import SignIn from '../../../pages/SignIn'
import Users from '../../../pages/Users'
import Error from '../../layout/Error'
import { selectUser } from '../selectors'
import { useSelector } from 'react-redux'

function AppRouter() {
  const user = useSelector(selectUser)
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        {user ? <Route path="/user" element={<Users />} /> : null}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRouter
