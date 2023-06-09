import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Component/Header'


const Router = () => {
  return (
    <>
    <Routes>
        <Route Route exact
        path=''
        element={<Header/>} />
    </Routes>
    </>
  )
}

export default Router