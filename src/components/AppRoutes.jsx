import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/Main'
import AnalyticsPage from '../pages/Analytics'
import { SignInPage } from '../pages/SignIn'
import { SignUpPage } from '../pages/SignUp'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/analytics" element={<AnalyticsPage />}></Route>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
    )
}

export default AppRoutes
