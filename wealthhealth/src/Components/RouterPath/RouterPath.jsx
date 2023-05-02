import React from 'react'
import { Routes, Route } from 'react-router-dom'

import  { Layout, EmployeesList, CreateEmployee, Error } from '../index.js'


export default function RouterPath() {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route index element={<EmployeesList />} />

            <Route path="/list" element={<EmployeesList />} />
            <Route path="/create" element={<CreateEmployee />} />

            <Route path="/error" element={<Error />} />
        </Route>
    </Routes>
  )
}
