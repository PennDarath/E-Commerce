import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/HeaderSection/Login'
import NavBar from '../components/HeaderSection/NavBar'
import NavbarMobile from '../components/HeaderSection/NavbarMobile'
import Item from '../components/Items/Item'
import Slider from '../components/SlideSection/Slider'
import Spacer from '../components/Spacer'


export default function HomePage() {
  const [show, setShow] = useState(false);

  return (
    <main>
      {/* <Link to='/about'>go to about</Link> */}
      <NavbarMobile show={show} setShow={setShow} />
      <Login />
      <NavBar setShow={setShow} />
      <Spacer height={60}/>
      <Slider />  
      <Item  />
    </main>
  )
}
