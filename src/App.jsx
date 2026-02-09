 header&table_analysis
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import MyExpenses from '../src/pages/MyExpenses'

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/expenses" />} />
                <Route path="/expenses" element={<MyExpenses />} />
            </Routes>
        </BrowserRouter>

import AppRoutes from './components/AppRoutes'

function App() {
    return (
        <>
            <AppRoutes />
        </>
 main
    )
}
