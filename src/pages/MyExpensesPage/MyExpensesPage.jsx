import React, { useState, useEffect, useCallback } from 'react'
import * as S from './MyExpensesPage.styled'
import ExpensesTable from '../../components/ExpensesTable/ExpensesTable'
import MyExpenses from '../MyExpenses'
import {
    fetchTransactions,
    addTransaction,
    deleteTransaction,
} from '../../services/api'

// Словарь для обратного преобразования (с английского на русский)
const apiToCategory = {
    food: 'Еда',
    transport: 'Транспорт',
    housing: 'Жилье',
    joy: 'Развлечения',
    education: 'Образование',
    others: 'Другое',
}

const formatDateFromISO = (isoString) => {
    const date = new Date(isoString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}.${month}.${year}`
}

const MyExpensesPage = () => {
    const [expenses, setExpenses] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const token = localStorage.getItem('authToken')

    const loadTransactions = useCallback(async () => {
        try {
            setLoading(true)
            setError('')

            const data = await fetchTransactions({ token })

            const formattedExpenses = data.map((item) => ({
                id: item._id,
                description: item.description,
                category: apiToCategory[item.category] || item.category,
                date: formatDateFromISO(item.date),
                sum: Number(item.sum),
            }))

            setExpenses(formattedExpenses)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }, [token])

    useEffect(() => {
        if (!token) {
            setError(
                'Токен авторизации отсутствует. Пожалуйста, войдите заново.'
            )
            setLoading(false)
            return
        }
        loadTransactions()
    }, [token, loadTransactions])

    const handleAddExpense = async (newExpense) => {
        try {
            setError('')

            if (!token) {
                throw new Error('Токен авторизации отсутствует')
            }

            const apiExpense = {
                description: newExpense.description,
                sum: Number(newExpense.sum),
                category: newExpense.category,
                date: newExpense.date.trim(),
            }

            await addTransaction({ token, transaction: apiExpense })
            await loadTransactions()
        } catch (err) {
            setError(err.message)
        }
    }

    const handleDeleteExpense = async (id) => {
        try {
            setError('')

            if (!token) {
                throw new Error('Токен авторизации отсутствует')
            }

            await deleteTransaction({ token, id })
            await loadTransactions()
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
                        <ExpensesTable
                            expenses={expenses}
                            onDeleteExpense={handleDeleteExpense}
                        />
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
