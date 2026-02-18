import React, { useState } from 'react'
import {
    FormWrapper,
    Title,
    Label,
    Input,
    CategoriesWrapper,
    CategoryButton,
    SubmitButton,
    ErrorStar,
} from './MyExpenses.styled'

const categories = [
    { name: 'food', label: 'Еда', icon: '/icon/food_icon.svg' },
    { name: 'transport', label: 'Транспорт', icon: '/icon/transport_icon.svg' },
    { name: 'housing', label: 'Жилье', icon: '/icon/house_icon.svg' },
    { name: 'joy', label: 'Развлечения', icon: '/icon/entertainment_icon.svg' },
    {
        name: 'education',
        label: 'Образование',
        icon: '/icon/education_icon.svg',
    },
    { name: 'others', label: 'Другое', icon: '/icon/other_icon.svg' },
]

const isValidDate = (value) => {
    const regex = /^(\d{2})\.(\d{2})\.(\d{2}|\d{4})$/
    if (!regex.test(value)) return false

    let [day, month, year] = value.split('.').map(Number)

    if (year < 100) {
        year += 2000
    }

    if (month < 1 || month > 12) return false
    if (day < 1 || day > 31) return false

    const date = new Date(year, month - 1, day)

    return date.getDate() === day && date.getMonth() === month - 1
}

const MyExpenses = ({ onAddExpense }) => {
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [amount, setAmount] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const validDesc = description.trim().length >= 4
    const validDate = isValidDate(date)
    const validAmount = Number(amount) > 0 && !isNaN(Number(amount))
    const validCategory = category !== ''
    const allValid = validDesc && validDate && validAmount && validCategory

    const handleDateChange = (e) => {
        let value = e.target.value.replace(/\D/g, '')

        if (value.length > 8) {
            value = value.slice(0, 8)
        }

        if (value.length >= 5) {
            value = `${value.slice(0, 2)}.${value.slice(2, 4)}.${value.slice(4)}`
        } else if (value.length >= 3) {
            value = `${value.slice(0, 2)}.${value.slice(2)}`
        }

        setDate(value)
    }

    const handleSubmit = () => {
        setSubmitted(true)

        if (allValid) {
            const [day, month, yearInput] = date.split('.')

            let year = Number(yearInput)
            if (year < 100) {
                year += 2000
            }

            const formattedDate = `${Number(month)}-${Number(day)}-${year}`

            const expenseData = {
                description: description.trim(),
                category,
                sum: Number(amount),
                date: formattedDate,
            }

            if (onAddExpense) {
                onAddExpense(expenseData)
            }

            setDescription('')
            setCategory('')
            setDate('')
            setAmount('')
            setSubmitted(false)
        }
    }

    return (
        <FormWrapper>
            <Title>Новый расход</Title>

            <Label>
                Описание
                {submitted && !validDesc && (
                    <ErrorStar>* (минимум 4 символа)</ErrorStar>
                )}
            </Label>
            <Input
                placeholder="Введите описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={submitted ? (validDesc ? 'valid' : 'error') : ''}
            />

            <Label>
                Категория
                {submitted && !validCategory && <ErrorStar>*</ErrorStar>}
            </Label>
            <CategoriesWrapper>
                {categories.map((cat) => (
                    <CategoryButton
                        key={cat.name}
                        selected={category === cat.name}
                        onClick={() => setCategory(cat.name)}
                        type="button"
                    >
                        <img
                            src={cat.icon}
                            alt={cat.label}
                            width={14}
                            height={14}
                        />
                        {cat.label}
                    </CategoryButton>
                ))}
            </CategoriesWrapper>

            <Label>
                Дата
                {submitted && !validDate && <ErrorStar>*</ErrorStar>}
            </Label>
            <Input
                placeholder="Введите дату"
                value={date}
                onChange={handleDateChange}
                className={submitted ? (validDate ? 'valid' : 'error') : ''}
            />

            <Label>
                Сумма
                {submitted && !validAmount && <ErrorStar>*</ErrorStar>}
            </Label>
            <Input
                placeholder="Введите сумму"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={submitted ? (validAmount ? 'valid' : 'error') : ''}
            />

            <SubmitButton
                $allValid={allValid}
                $submitted={submitted}
                onClick={handleSubmit}
                type="button"
            >
                Добавить новый расход
            </SubmitButton>
        </FormWrapper>
    )
}

export default MyExpenses
