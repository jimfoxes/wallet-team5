import { Outlet } from 'react-router-dom'
import Analyics from '../components/Analytics/Analytics'

function AnalyticsPage() {
    return (
        <>
            <Analyics />
            <Outlet />
        </>
    )
}

export default AnalyticsPage
