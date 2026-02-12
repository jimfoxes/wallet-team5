import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { AuthForm } from './AuthForm/AuthForm'
import Analytics from '../pages/Analytics'  
import MyExpensesPage from '../pages/MyExpensesPage/MyExpensesPage'
import { useState, useEffect } from 'react'
import Header from './Header/Header'


export default function AppRoutes() {
    const [isAuthenticated, setIsAuthenticated] = useState(
        !!localStorage.getItem('authToken')
    )
    const navigate = useNavigate()

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('authToken')
            if (!token && isAuthenticated) {
                setIsAuthenticated(false)
                navigate('/sign-in', { replace: true })
            }
        }

        window.addEventListener('storage', checkAuth)

        return () => {
            window.removeEventListener('storage', checkAuth)
        }
    }, [isAuthenticated, navigate])

    const handleLogin = () => {
        setIsAuthenticated(true)
    }

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        localStorage.removeItem('userName')
        setIsAuthenticated(false)
        navigate('/sign-in', { replace: true })
    }

    return (
        <>
            {isAuthenticated && <Header onLogout={handleLogout} />}

            <Routes>
                {isAuthenticated ? (
                    <>
                        <Route path="/" element={<Navigate to="/expenses" />} />
                        <Route path="/expenses" element={<MyExpensesPage />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="*" element={<Analytics />} />
                    </>
                ) : (
                    <>
                        <Route
                            path="/sign-in"
                            element={
                                <AuthForm
                                    isSignUp={false}
                                    onLogin={handleLogin}
                                />
                            }
                        />
                        <Route
                            path="/sign-up"
                            element={
                                <AuthForm
                                    isSignUp={true}
                                    onLogin={handleLogin}
                                />
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <AuthForm
                                    isSignUp={false}
                                    onLogin={handleLogin}
                                />
                            }
                        />
                    </>
                )}
            </Routes>
        </>
    )
}