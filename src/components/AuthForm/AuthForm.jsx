import { useState } from 'react'

import {
    AuthWrapper,
    Modal,
    Title,
    Form,
    InputWrapper,
    Input,
    Button,
    ErrorMessage,
    LinkText,
    Link,
    LinkTextUp,
    LinkUp,
} from './AuthForm.styled'

export const AuthForm = ({ isSignUp = false }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Флаг: была ли попытка отправить форму
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    // Валидация
    const isValidEmail = email.trim() !== '' && /\S+@\S+\.\S+/.test(email)
    const isValidPassword = password.trim().length >= 6
    const isValidName =
        !isSignUp || (name.trim() !== '' && name.trim().length >= 2)

    const allValid = isValidEmail && isValidPassword && isValidName

    // Показывать ошибки ТОЛЬКО после отправки
    const showEmailError = isSubmitted && !isValidEmail
    const showPasswordError = isSubmitted && !isValidPassword
    const showNameError = isSubmitted && isSignUp && !isValidName

    // Устанавливаем текст ошибки
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitted(true)

        // Устанавливаем ошибку напрямую
        if (!isValidEmail) {
            setError('Введите корректный email')
        } else if (!isValidPassword) {
            setError('Пароль должен быть не менее 6 символов')
        } else if (isSignUp && !isValidName) {
            setError('Имя должно быть не менее 2 символов')
        } else {
            setError('')
        }

        if (!allValid) return

        console.log('Форма отправлена:', { name, email, password })
    }

    return (
        <AuthWrapper>
            <Modal>
                <Title>{isSignUp ? 'Регистрация' : 'Вход'}</Title>

                <Form onSubmit={handleSubmit}>
                    <ErrorMessage $visible={!!error}>{error}</ErrorMessage>

                    {isSignUp && (
                        <InputWrapper>
                            <Input
                                type="text"
                                placeholder="Имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                $error={showNameError}
                                $success={
                                    !showNameError && name.trim().length > 0
                                }
                                autoFocus
                            />
                        </InputWrapper>
                    )}

                    <InputWrapper>
                        <Input
                            type="email"
                            placeholder="Эл. почта"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            $error={showEmailError}
                            $success={
                                !showEmailError && email.trim().length > 0
                            }
                            autoFocus={!isSignUp}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Input
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            $error={showPasswordError}
                            $success={
                                !showPasswordError && password.trim().length > 0
                            }
                        />
                    </InputWrapper>

                    <Button type="submit" disabled={isSubmitted && !allValid}>
                        {isSignUp ? 'Зарегистрироваться' : 'Войти'}
                    </Button>
                </Form>

                {isSignUp ? (
                    <LinkTextUp>
                        Уже есть аккаунт? <br />
                        <LinkUp href="/sign-in">Войдите здесь</LinkUp>
                    </LinkTextUp>
                ) : (
                    <LinkText>
                        Нужно зарегистрироваться? <br />
                        <Link href="/sign-up">Регистрируйтесь здесь</Link>
                    </LinkText>
                )}
            </Modal>
        </AuthWrapper>
    )
}
