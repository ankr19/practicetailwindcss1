import React from 'react'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Navbar3 from './components/Navbar3'
import Dropdown from './components/Dropdown'
import Mega from './components/Mega'
import Mega2 from './components/Mega2'
import Dropdown2 from './components/Dropdown2'
import Mega3 from './components/Mega3'
import Dropdown3 from './components/Dropdown3'
import Dropdown4 from './components/Dropdown4'
import MainNavbar from './components/MainNavbar'
import GridSystem from './components/GridSystem'
import Navbar1 from './components/responsive navbar/Navbar'
import Part from './components/responsive navbar/Part'
import FlyoutExample from './components/FlyoutExample'
// import Dropdown5 from './Dropdown5'

const App = () => {
  return (
    <div className='container w-full'>
      {/* <div>1st Navbar</div>
      <Navbar/>
      <div>2nd Navbar</div>
      <Navbar2/>
      <div>drop down</div>
      <Dropdown/>
      <div>Mega Menu</div>
      <Mega/>
    <Mega2/> */}
    {/* <div>3rd Navbar</div>
    <Navbar3/>
      <div>Dropdown</div>
      <Dropdown2/>
      <div>Mega 3</div>
      <Mega3/>
    */}
      {/* <div>Dropdown</div>
      <Dropdown4/>  */}
      {/* <MainNavbar/> */}
      {/* <Dropdown5/> */}
      {/* <GridSystem/> */}
      <Navbar1/>
      <div className='text-center'>
      <Part/>
      </div>
      <FlyoutExample />
    </div>
  )
}

export default App