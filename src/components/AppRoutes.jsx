import { Routes, Route, useNavigate } from 'react-router-dom'
import { AuthForm } from './AuthForm/AuthForm'
import Analytics from './Analytics/Analytics'
import { useState, useEffect } from 'react'
import { Header } from './Header/Header'

export function AppRoutes() {
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
            <Header onLogout={isAuthenticated ? handleLogout : null} />

            <Routes>
                {isAuthenticated ? (
                    <>
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
