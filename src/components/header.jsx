import React from 'react'
import Themeswitcher from './Themeswitcher'

export default function Header({ handleChangeTheme }) {
  return (
    <header>
        <h1>Calculator</h1>
        <Themeswitcher handleChangeTheme={handleChangeTheme} />
    </header>
  )
} 
