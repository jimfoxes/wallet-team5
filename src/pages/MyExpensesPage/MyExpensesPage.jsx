import React, { useState, useEffect } from 'react'
import * as S from './MyExpensesPage.styled'
import ExpensesTable from '../../components/ExpensesTable/ExpensesTable'
import MyExpenses from '../MyExpenses'
import { fetchTransactions, addTransaction } from '../../services/api'

const mockExpenses = [
    { id: 1, description: 'Пятерочка', category: 'Еда', date: '03.07.2024', amount: 3500 },
    { id: 2, description: 'Яндекс Такси', category: 'Транспорт', date: '03.07.2024', amount: 730 },
    { id: 3, description: 'Аптека Вита', category: 'Другое', date: '03.07.2024', amount: 1200 },
    { id: 4, description: 'Бургер Кинг', category: 'Еда', date: '03.07.2024', amount: 950 },
    { id: 5, description: 'Деливери', category: 'Еда', date: '02.07.2024', amount: 1320 },
    { id: 6, description: 'Кофейня №1', category: 'Еда', date: '02.07.2024', amount: 400 },
    { id: 7, description: 'Бильярд', category: 'Развлечения', date: '29.06.2024', amount: 600 },
    { id: 8, description: 'Перекресток', category: 'Еда', date: '29.06.2024', amount: 2360 },
    { id: 9, description: 'Лукойл', category: 'Транспорт', date: '29.06.2024', amount: 1000 },
    { id: 10, description: 'Летуаль', category: 'Другое', date: '29.06.2024', amount: 4300 },
    { id: 11, description: 'Яндекс Такси', category: 'Транспорт', date: '28.06.2024', amount: 320 },
    { id: 12, description: 'Перекресток', category: 'Еда', date: '28.06.2024', amount: 1360 },
    { id: 13, description: 'Деливери', category: 'Еда', date: '28.06.2024', amount: 2320 },
    { id: 14, description: 'Вкусвилл', category: 'Еда', date: '27.06.2024', amount: 1220 },
    { id: 15, description: 'Кофейня №1', category: 'Еда', date: '27.06.2024', amount: 920 },
    { id: 16, description: 'Вкусвилл', category: 'Еда', date: '26.06.2024', amount: 840 },
    { id: 17, description: 'Кофейня №1', category: 'Еда', date: '26.06.2024', amount: 920 },
]

const MyExpensesPage = () => {
    const [expenses, setExpenses] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [useMockData, setUseMockData] = useState(true)

    const token = localStorage.getItem('authToken')

    useEffect(() => {
        if (useMockData) {
            setExpenses(mockExpenses)
            setLoading(false)
        } else {
            loadTransactions()
        }
    }, [useMockData])

    const loadTransactions = async () => {
        try {
            setLoading(true)
            const data = await fetchTransactions({ token })
            const formattedExpenses = data.map(item => ({
                id: item.id,
                description: item.description || item.name || 'Без описания',
                category: item.category,
                date: item.date.split('-').reverse().join('.'),
                amount: Number(item.amount)
            }))
            setExpenses(formattedExpenses)
        } catch (err) {
            setError(err.message)
            setExpenses(mockExpenses)
        } finally {
            setLoading(false)
        }
    }

    const handleAddExpense = async (newExpense) => {
        try {
            if (useMockData) {
                const newId = Math.max(...expenses.map(e => e.id), 0) + 1
                const addedExpense = {
                    id: newId,
                    ...newExpense,
                    amount: Number(newExpense.amount)
                }
                setExpenses(prev => [addedExpense, ...prev])
            } else {
                const [day, month, year] = newExpense.date.split('.')
                const apiDate = `${year}-${month}-${day}`

                const transaction = {
                    description: newExpense.description,
                    category: newExpense.category,
                    date: apiDate,
                    amount: Number(newExpense.amount)
                }

                const response = await addTransaction({ 
                    token, 
                    transaction 
                })
                
                const addedExpense = {
                    ...response,
                    date: response.date.split('-').reverse().join('.'),
                    amount: Number(response.amount)
                }
                setExpenses(prev => [addedExpense, ...prev])
            }
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <S.PageContainer>
            <S.ContentWrapper>
                <S.PageTitle>Мои расходы</S.PageTitle>
                
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                
                <S.TableWrapper>
                    {loading ? (
                        <S.LoadingText>Загрузка...</S.LoadingText>
                    ) : (
                        <ExpensesTable expenses={expenses} />
                    )}
                </S.TableWrapper>
                
                <S.FormWrapper>
                    <MyExpenses onAddExpense={handleAddExpense} />
                </S.FormWrapper>
            </S.ContentWrapper>
        </S.PageContainer>
    )
}

export default MyExpensesPage