import { useState } from 'react'
import styles from './NavigationAccordion.module.scss'
import Button from '@atoms/button/Button'

const NavigationAccordion = (props) => {

  const { 
    data, 
    onClose 
  } = props

  const [openSection, toggleOpenSection] = useState(null)

  const openDropdown = (e, i, id) => {     
    e.preventDefault();
    toggleOpenSection(() => {
      if (openSection === i) {
        return null
      }
      return i
    })
  }

  const closeMenu = () => {
    if (onClose) { onClose(false) } 
  }

  return (
    <>
      <ul className={`${styles['accordion']}`} >
        {data.menu.map(({ menuItem, menuItems }, index) => {
          const open = openSection === index                  
          return (
            <li key={`panel${index}`} 
                className={`${open ? styles['active'] : ''}`} 
                onClick={(e) => openDropdown(e,index, 1)}
            >
              {menuItem.length > 0 ? (
                <>
                  <Button 
                    type="tertiary"
                    link={menuItem?.url}
                    text={menuItem?.text}
                    icon="chevrondown"
                    iconAlign="right"
                  />

                  {open && (
                    <ul>
                      {menuItems.map(({ url, text }, i) => {
                        return (
                          <li key={`list${i}`}>
                            <Button 
                              type="tertiary" 
                              link={url} 
                              text={text} 
                            />
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </>
              ) : (
                <div className={styles['accordion-list-item']} onClick={() => closeMenu()} >
                  <Button 
                    type="tertiary" 
                    link={menuItem.url} 
                    text={menuItem.text} 
                  />
                </div>
              )}
            </li>
          )
        })}  
      </ul>
    </>
  )
}

export default NavigationAccordion