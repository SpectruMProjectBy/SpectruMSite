import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import { Card, Button, Input } from 'shared'
import { useAppDispatch, useAppSelector, useNotification } from 'processes/hooks'
import { fetchLoginAccount } from 'processes/store/thunk'
import { getUserError } from 'processes/store/select'
import { actionClearError } from 'processes/store/slice'

import FormLoginProps from './FormLogin.props'
import styles from './FormLogin.module.scss'

export function FormLogin({ className, setForm, ...props }: FormLoginProps): JSX.Element {
  const dispatch = useAppDispatch()
  const notification = useNotification()
  const navigate = useNavigate()

  const userError = useAppSelector(getUserError)

  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [loginError, setLoginError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)

  const handleLogin = () => {
    if (login.trim().length < 3) {
      setLoginError(true)
      notification(
        'error',
        5000,
        { text: 'Логин должeн содержать не меньше 3-х симоволов' },
        loginError,
      )
    }

    if (password.trim().length < 8) {
      setPasswordError(true)
      notification(
        'error',
        5000,
        { text: 'Пароль должeн содержать не меньше 8-х симоволов' },
        passwordError,
      )
    }

    if (password.trim().length >= 8) {
      setPasswordError(false)
    }

    if (login.trim().length >= 3) {
      setLoginError(false)
    }

    if (password.trim().length >= 8 && login.trim().length >= 3) {
      dispatch(fetchLoginAccount({ login, password })).then(() => {
        const token = localStorage.getItem('accessToken')
        if (token) {
          navigate('/profile')
        }
      })
    }
  }

  useEffect(() => {
    if (userError) {
      notification('error', 5000, { text: userError })
      dispatch(actionClearError())
      setLoginError(true)
      setPasswordError(true)
    }
  }, [userError])

  return (
    <div className={cn(className, styles.wrapperFormLogin)} {...props}>
      <Card>
        <h2 className={styles.title}>Авторизация</h2>
        <Input value={login} setValue={setLogin} error={loginError} label='Логин' />
        <Input
          value={password}
          setValue={setPassword}
          error={passwordError}
          password={true}
          label='Пароль'
        />
        <Button
          onClick={(e) => {
            e.preventDefault()
            handleLogin()
          }}
        >
          Подтвердить
        </Button>
      </Card>
      <Card className={styles.cardWrap}>
        <p>Нет аккаунта?</p>
        <Button
          className={styles.buttonRegister}
          onClick={() => {
            setForm(true)
            setLogin('')
            setLoginError(false)
            setPassword('')
            setPasswordError(false)
          }}
        >
          Регистрация
        </Button>
      </Card>
    </div>
  )
}
