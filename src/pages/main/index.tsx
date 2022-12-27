import React, { useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { NavBar } from 'widgets/navbar'
import { useAppSelector } from 'processes/hooks'
import { getTheme } from 'processes/store/select'
import { Notification } from 'widgets/notification'

import styles from './Main.module.scss'

const MainPage = (): JSX.Element => {
  const location = useLocation()
  const currentOutlet = useOutlet()

  const theme: boolean = useAppSelector(getTheme)

  //keeps track of the theme of the system
  useEffect(() => {
    document.body.dataset.theme = theme ? 'dark' : 'light'
  }, [theme])

  return (
    <>
      <div className={styles.mainWrapper}>
        <Notification />
        <NavBar />
        <SwitchTransition>
          <CSSTransition key={location.pathname} timeout={300} classNames='page' unmountOnExit>
            <section className='page'>
              {currentOutlet}
              <footer className={styles.footerWrapper}>hello</footer>
            </section>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  )
}

export default MainPage
