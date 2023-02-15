import { useState } from 'react'
import CalcCosts from './components/CalcCosts';
import ListProducts from './components/ListProducts';
import SaleProducts from './components/SaleProducts';
import SortProducts from './components/SortProducts';

function App() {

  return (
    <div>
      <CalcCosts></CalcCosts>
      <br/>
      <ListProducts></ListProducts>
      <br/>
      <SortProducts></SortProducts>
      <br/>
      <SaleProducts></SaleProducts>
      <br/>
    </div>
  )
}

export default App
