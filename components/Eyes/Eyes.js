import { useEffect } from "react"
import styles from './eye-easy.module.scss'
import { observer } from "mobx-react-lite"
import theme from "../../store/theme"

const Eyes = observer(() => {

  let currentTheme

  useEffect(() => {
    currentTheme = theme.setTheme()
  })

  const handleClick = () => {
    theme.changeTheme()
    
    document.documentElement.setAttribute('font-size', 'A1')
  }


  const handleFontChangeA1 = () => {
    document.documentElement.setAttribute('font-size', 'A1')
  }

  const handleFontChangeA2 = () => {
    document.documentElement.setAttribute('font-size', 'A2')
  }

  const handleFontChangeA3 = () => {
    document.documentElement.setAttribute('font-size', 'A3')
  }


  return (
    <>
      <div className={styles.container}>
        <div className={styles.font_control_group}>
          <button className={styles.font_control} style={{ fontSize: '20px' }} onClick={handleFontChangeA1}>A</button>
          <button className={styles.font_control} style={{ fontSize: '25px' }} onClick={handleFontChangeA2}>A</button>
          <button className={styles.font_control} style={{ fontSize: '30px' }} onClick={handleFontChangeA3}>A</button>
        </div>

        <button className={styles.change_button} onClick={handleClick}>Обычная версия сайта</button>
      </div>
    </>
  )
})

export default Eyes