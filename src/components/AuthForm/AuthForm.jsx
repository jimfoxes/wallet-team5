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
    const showErrors = isSubmitted && !allValid

    const handleFocus = () => {
        if (isSubmitted) {
            setIsSubmitted(false)
            setError('')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitted(true)

        if (!isValidEmail) {
            setError('Введите корректный email')
            return
        }
        if (!isValidPassword) {
            setError('Пароль должен быть не менее 6 символов')
            return
        }
        if (isSignUp && !isValidName) {
            setError('Имя должно быть не менее 2 символов')
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
                    {isSignUp && (
                        <InputWrapper>
                            <Input
                                type="text"
                                placeholder="Имя*"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onFocus={handleFocus}
                                $error={
                                    (showErrors && !isValidEmail) ||
                                    (!!error && isSubmitted && isValidEmail)
                                }
                                $success={!showErrors && isValidName}
                                autoFocus
                            />
                        </InputWrapper>
                    )}

                    <InputWrapper>
                        <Input
                            type="email"
                            placeholder="Эл. почта*"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={handleFocus}
                            $error={
                                (showErrors && !isValidEmail) ||
                                (!!error && isSubmitted && isValidEmail)
                            }
                            $success={!showErrors && isValidEmail}
                            autoFocus={!isSignUp}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Input
                            type="password"
                            placeholder="Пароль*"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={handleFocus}
                            $error={
                                (showErrors && !isValidEmail) ||
                                (!!error && isSubmitted && isValidEmail)
                            }
                            $success={!showErrors && isValidPassword}
                        />
                    </InputWrapper>

                    <ErrorMessage $visible={!!error}>{error}</ErrorMessage>

                    <Button type="submit" disabled={showErrors}>
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
