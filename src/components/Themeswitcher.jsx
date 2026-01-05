import React from 'react'
import { basic, light, dark, ThemeButton } from '../styled/Theme.styled'

export default function Themeswitcher(props) {
  return (
    <section className="themes">
        <p>THEME</p>
        <nav className='theme-toggle'>
            <section className='theme-number'>
                <section id='color-theme-1' className='theme-number'>
                    1
                </section>
                <section id='color-theme-2' className='theme-number'>
                    2
                </section>
                <section id='color-theme-3' className='theme-number'>
                    3
                </section>
            </section>
            <section className="theme-value">
                <ThemeButton className='theme-btn basic active' onClick={(e)=>props.handleChangeTheme(basic)}/>
                <ThemeButton className='theme-btn light' onClick={(e)=>props.handleChangeTheme(light)}/>
                <ThemeButton className='theme-btn dark' onClick={(e)=>props.handleChangeTheme(dark)}/>
                </section>
        </nav>
    </section>
  )
}
