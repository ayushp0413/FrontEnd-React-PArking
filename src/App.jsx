// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import First from './components/First/First'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import ContactUs from './components/ContactUs/ContactUs'
import AboutUs from './components/AboutUs/AboutUs'
import SlotIndex from './components/SlotIndex/SlotIndex'
import BikeSlot from './components/Bikeslot/Bikeslot'
import Qr from './components/QR/Qr'
// import UserPage from './components/UserPage/UserPage'

const App = () => {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<First></First>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          {/* <Route path='/userpage' element={<UserPage></UserPage>}></Route> */}
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
          <Route path='/about' element={<AboutUs></AboutUs>}></Route>
          <Route path='/slot' element={<SlotIndex></SlotIndex>}></Route>
          <Route path='/bikeslot' element={<BikeSlot></BikeSlot>}></Route>
          <Route path='/Qrbike' element={<Qr></Qr>}></Route>
        </Routes>  
      </Router>
    </div>
    </>
  )
}

export default App
