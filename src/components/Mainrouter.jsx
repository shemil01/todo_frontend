import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AddTask from './Task/AddTask'
import ViewTask from './List/ViewTask'
import axios from 'axios'

export const Axios = axios.create({
    baseURL:"localhost:4000/api"
})
const Mainrouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AddTask/>} />
            <Route path='/view-task' element={<ViewTask />} />
            
        </Routes>
    </div>
  )
}

export default Mainrouter