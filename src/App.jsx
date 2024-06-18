import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import ThreeInOneCredit from './pages/productPolicy/ThreeInOneCredit'
import TwoInOneCredit from './pages/productPolicy/TwoInOneCredit'


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route path='/home' element= {<HomePage />}/>
      <Route path='/3-in-1-credit' element= {<ThreeInOneCredit />}/>
      <Route path='/2-in-1-credit' element= {<TwoInOneCredit />}/>
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
