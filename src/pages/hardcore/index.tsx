import React from 'react'
import cn from 'classnames'

import { Button, CardPage, CardInfo } from 'shared'
import { AppleIcon, BerriesIcon, CarrotIcon, HeartIcon, WatermelonIcon } from 'app/assets/svg'

import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'

const HardcorePage = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <CardPage className={styles.wrapperHardcore}>
      <CardInfo className={styles.wrapperLife}>
        <section className={styles.wrapperInfo}>
          <div className={styles.infoFirst}>
            <Button>Скопировать IP-адрес</Button>
            <div className={styles.minecraftInfo}>
              <p>License</p>
              <p>1.19.2</p>
              <p>Minecraft:JE</p>
            </div>
          </div>
          <div className={styles.infoSecond}>
            <h2>Minecraft</h2>
            <h2>Vanilla Hardcore SMP</h2>
          </div>
        </section>
        <section className={styles.wrapperHeart}>
          <p>0</p>
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <HeartIcon />
          <p>50</p>
          <h3>Online</h3>
        </section>
      </CardInfo>
      <CardInfo className={styles.wrapperServer} background={'dark-middle'}>
        <h2>О сервере</h2>
        <ul>
          <li>
            <p>Vanilla</p>
            <span></span>
            <p>Ванильный геймплей, минимальное количество плагинов для комфортной игры</p>
          </li>
          <li>
            <p>Hardcore</p>
            <span></span>
            <p>Только хардкор! Платите за свою смерть временем потраченным на сервере</p>
          </li>
          <li>
            <p>SMP</p>
            <span></span>
            <p>“Survival Multiplayer” - Проще говоря обычное выживание и никаких поблажек</p>
          </li>
        </ul>
        <AppleIcon className={styles.icon} />
        <WatermelonIcon className={cn(styles.icon, styles.melon)} />
        <CarrotIcon className={cn(styles.icon, styles.carrot)} />
        <BerriesIcon className={cn(styles.icon, styles.berries)} />
      </CardInfo>
      <CardInfo className={styles.wrapperInfoHardcore}>
        <h2>Как работает Hardcore режим?</h2>
        <p>
          Если вы прошаренный игрок в Minecraft, то вы знаете что режим Hardcore работает по
          принципу одной смерти. Однако на сервере эта механика очень расточительна, т.к. по
          неосторожности можно потерять не только прогресс, но и возможность играть с друзьями.
          Поэтому мы сделали плагин который даст возможность возродиться спустя время, которое вы
          провели на сервере
        </p>
        <span>
          *Для того чтобы точно расчитать время возрождения, мы пользуемся формулой: время до
          возрождения = текущее время (на момент смерти) + время на сервере (только в режиме
          выживания)
        </span>
      </CardInfo>
      <CardInfo className={styles.wrapperDownInfo} background={'dark-middle'}>
        <h2>Ивенты, лёгкая сборка, и прочее...</h2>
        <div>
          <iframe src='https://giphy.com/embed/UdXlLBeKNW9xqemxYk' />
          <div>
            <p>
              Сервер на Paper, дружелюбное комьюнити, полностью бесплатное пользование, Discord
              сервер, и другие плюшки. Регистрируйся и заходи на сервер!
            </p>
            <div>
              <Button>Скопировать IP адрес</Button> или{' '}
              <Button onClick={() => navigate('/profile')}>Перейти в личный кабинет</Button>
            </div>
          </div>
        </div>
      </CardInfo>
    </CardPage>
  )
}

export default HardcorePage
