import React from 'react'
import "./App.css"
import Page2 from './Components/Page2'
import Page1 from './Components/Page1'

function App(){
  return (
    <div className='d-flex flex-wrap justify-content-center gap-5'>
       <Page1/>
       <Page2/>
    </div>
  )
}

export default App