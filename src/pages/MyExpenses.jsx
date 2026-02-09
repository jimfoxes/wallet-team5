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
    { name: 'Еда', icon: '/icon/food_icon.svg' },
    { name: 'Транспорт', icon: '/icon/transport_icon.svg' },
    { name: 'Жилье', icon: '/icon/house_icon.svg' },
    { name: 'Развлечения', icon: '/icon/entertainment_icon.svg' },
    { name: 'Образование', icon: '/icon/education_icon.svg' },
    { name: 'Другое', icon: '/icon/other_icon.svg' },
]

const isValidDate = (value) => {
    const regex = /^(\d{2})\.(\d{2})\.(\d{2}|\d{4})$/
    if (!regex.test(value)) return false
    const [day, month, year] = value.split('.').map(Number)
    if (day < 1 || day > 31 || month < 1 || month > 12) return false
    if (year < 0) return false
    if (String(year).length !== 2 && String(year).length !== 4) return false
    return true
}

export default function NewExpenseForm() {
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [amount, setAmount] = useState('')

    const [submitted, setSubmitted] = useState(false)

    const validDesc = description.trim().length > 0
    const validDate = isValidDate(date)
    const validAmount = Number(amount) > 0
    const validCategory = category !== ''

    const allValid = validDesc && validDate && validAmount && validCategory

    const handleSubmit = () => {
        setSubmitted(true)
        if (allValid) {
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
                {submitted && !validDesc && <ErrorStar>*</ErrorStar>}
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
                    >
                        <img
                            src={cat.icon}
                            alt={cat.name}
                            width={14}
                            height={14}
                        />
                        {cat.name}
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
                onChange={(e) => setDate(e.target.value)}
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
            >
                Добавить новый расход
            </SubmitButton>
        </FormWrapper>
    )
}
