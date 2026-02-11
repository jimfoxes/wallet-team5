import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

import { signIn, signUp } from '../../services/auth'

export const AuthForm = ({ isSignUp = false, onLogin }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const isValidEmail = email.trim() !== '' && /\S+@\S+\.\S+/.test(email)
    const isValidPassword = password.trim().length >= 6
    const isValidName =
        !isSignUp || (name.trim() !== '' && name.trim().length >= 2)

    const allValid = isValidEmail && isValidPassword && isValidName

    const showEmailError = isSubmitted && !isValidEmail
    const showPasswordError = isSubmitted && !isValidPassword
    const showNameError = isSubmitted && isSignUp && !isValidName

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitted(true)

        if (!allValid) {
            if (!isValidEmail) {
                setError('Введите корректный email')
            } else if (!isValidPassword) {
                setError('Пароль должен быть не менее 6 символов')
            } else if (isSignUp && !isValidName) {
                setError('Имя должно быть не менее 2 символов')
            }
            return
        }

        try {
            setError('')
            let response

            if (isSignUp) {
                response = await signUp({
                    name,
                    login: email,
                    password,
                })
            } else {
                response = await signIn({
                    login: email,
                    password,
                })
            }

            localStorage.setItem('authToken', response.user.token)
            localStorage.setItem('userName', response.user.name)

            if (onLogin) onLogin()
            navigate('/analytics', { replace: true })
        } catch (err) {
            setError(err.message || 'Ошибка авторизации')
        }
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
