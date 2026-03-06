import { useNavigate, useLocation } from 'react-router-dom'
import React, { useState, useEffect, useCallback } from 'react'
import * as S from './MyExpenses.styled'
import ExpensesTable from '../ExpensesTable/ExpensesTable'
import ExpensesForm from '../ExpensesForm/ExpensesForm'
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

const MyExpenses = ({ showForm }) => {
    const [expenses, setExpenses] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const token = localStorage.getItem('authToken')

    const navigate = useNavigate()

    const location = useLocation()

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
        <S.ContentWrapper>
            {(location.pathname === '/expenses' || showForm) && (
                <S.PageTitleWrapper>
                    <S.PageTitle>Мои расходы</S.PageTitle>

                    <S.MobileToExpensesFormButton
                        onClick={() => navigate('/new-expense')}
                    >
                        <svg
                            viewBox="0 0 11.6667 11.6666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="11.666748"
                            height="11.666626"
                            fill="none"
                            data-customframe="#000000"
                        >
                            <path
                                id="Vector"
                                d="M5.83333 0C2.61917 0 0 2.61917 0 5.83333C0 9.0475 2.61917 11.6667 5.83333 11.6667C9.0475 11.6667 11.6667 9.0475 11.6667 5.83333C11.6667 2.61917 9.0475 0 5.83333 0ZM8.16667 6.27083L6.27083 6.27083L6.27083 8.16667C6.27083 8.40583 6.0725 8.60417 5.83333 8.60417C5.59417 8.60417 5.39583 8.40583 5.39583 8.16667L5.39583 6.27083L3.5 6.27083C3.26083 6.27083 3.0625 6.0725 3.0625 5.83333C3.0625 5.59417 3.26083 5.39583 3.5 5.39583L5.39583 5.39583L5.39583 3.5C5.39583 3.26083 5.59417 3.0625 5.83333 3.0625C6.0725 3.0625 6.27083 3.26083 6.27083 3.5L6.27083 5.39583L8.16667 5.39583C8.40583 5.39583 8.60417 5.59417 8.60417 5.83333C8.60417 6.0725 8.40583 6.27083 8.16667 6.27083Z"
                                fill="rgb(0,0,0)"
                                fillRule="nonzero"
                            />
                        </svg>
                        <S.ToExpensesFormText>
                            Новый расход
                        </S.ToExpensesFormText>
                    </S.MobileToExpensesFormButton>
                </S.PageTitleWrapper>
            )}

            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

            <S.ColumnsLayout>
                {/* Таблица */}
                {showForm && (
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
                )}

                {/* Форма */}
                {showForm && (
                    <S.DesktopOnly>
                        <S.FormWrapper>
                            <ExpensesForm onAddExpense={handleAddExpense} />
                        </S.FormWrapper>
                    </S.DesktopOnly>
                )}

                {!showForm && (
                    <S.MobileOnly>
                        <S.MobileBackButton
                            onClick={() => navigate('/expenses')}
                        >
                            <S.BackArrow />
                            <S.BackText>Мои расходы</S.BackText>
                        </S.MobileBackButton>

                        <S.FormWrapper>
                            <ExpensesForm onAddExpense={handleAddExpense} />
                        </S.FormWrapper>
                    </S.MobileOnly>
                )}
            </S.ColumnsLayout>
        </S.ContentWrapper>
    )
}

export default MyExpenses
