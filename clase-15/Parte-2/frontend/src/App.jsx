import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { Products } from './components/Products'
import { NewProducts } from './components/NewProducts'
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<Products />} />
          <Route path='/new-product' element={<NewProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}