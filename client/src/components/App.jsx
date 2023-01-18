import { useState } from 'react'
import '../styles/App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Main from './main';
import Quiz from './quiz'; 
import Result from './result';
// react routes
const router=createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>
  },
  {
    path:'/quiz',
    element: <Quiz></Quiz>
  },
  {
    path:'/result',
    element: <Result></Result>
  },
])

function App() {
 

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
