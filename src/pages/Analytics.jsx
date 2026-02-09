import { Outlet } from 'react-router-dom'
import Analyics from '../components/Analytics/Analytics'
import { Header } from '../components/Header/Header'

function AnalyticsPage() {
    return (
        <>
            <Header />
            <Analyics />
            <Outlet />
        </>
    )
}

export default AnalyticsPage
