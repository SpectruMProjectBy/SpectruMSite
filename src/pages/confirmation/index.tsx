import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector, useExitAccount, useNotification } from 'processes/hooks'
import { IUser } from 'processes/interface'
import { getUser } from 'processes/store/select'
import { fetchConfirmationAccount } from 'processes/store/thunk'
import { CardPage } from 'shared/cardPage'
import { LoadingIcon } from 'app/assets/svg'

import styles from './Confirmation.module.scss'

const ConfirmationPage = (): JSX.Element => {
  const { code } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const notification = useNotification()
  const exitAccount = useExitAccount()

  const user: IUser | undefined = useAppSelector(getUser)

  useEffect(() => {
    exitAccount()
    if (code) {
      dispatch(fetchConfirmationAccount(code))
        .then(() => {
          if (user) {
            navigate('/profile')
            notification('action', 5000, { text: 'Аккаунт активирован!' })
          }
        })
        .catch((error) => {
          notification('error', 5000, { text: error.text })
        })
    }
  }, [])

  return (
    <CardPage className={styles.wrapperConf}>
      <div className={styles.loadWrapper}>
        <LoadingIcon className={styles.loadicon} />
        <p>Ожидание подтверждения...</p>
      </div>
    </CardPage>
  )
}

export default ConfirmationPage
