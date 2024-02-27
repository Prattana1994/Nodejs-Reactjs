import { useState } from 'react'

import './App.css'
import FormProduct from './componence/FormProduct'

function App() {

  const myName = "JELLY"
  const number = 20+9

  

  return (
    <div>
      <h1>Form CRUD {myName} {number}</h1>
      <FormProduct />
    </div>
  )
}

export default App
