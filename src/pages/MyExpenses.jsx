import { Outlet } from 'react-router-dom'
import MyExpenses from '../components/MyExpenses/MyExpenses'

function MyExpensesPage() {
    return (
        <>
            <MyExpenses />
            <Outlet />
        </>
    )
}

export default MyExpensesPage
