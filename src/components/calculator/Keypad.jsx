import React from 'react'

export default function Keypad({ onKeyPress = () => {}, onDelete = () => {}, onReset = () => {}, onEquals = () => {} }) {
  return (
    <section className='keypad'>
      <div className="keypad-grid">
        <button className='key' onClick={() => onKeyPress('7')}>7</button>
        <button className='key' onClick={() => onKeyPress('8')}>8</button>
        <button className='key' onClick={() => onKeyPress('9')}>9</button>
        <button className='del' onClick={onDelete}>DEL</button>

        <button className='key' onClick={() => onKeyPress('4')}>4</button>
        <button className='key' onClick={() => onKeyPress('5')}>5</button>
        <button className='key' onClick={() => onKeyPress('6')}>6</button>
        <button className='operator' onClick={() => onKeyPress('+')}>+</button>

        <button className='key' onClick={() => onKeyPress('1')}>1</button>
        <button className='key' onClick={() => onKeyPress('2')}>2</button>
        <button className='key' onClick={() => onKeyPress('3')}>3</button>
        <button className='operator' onClick={() => onKeyPress('-')}>-</button>

        <button className='key' onClick={() => onKeyPress('.')}>.</button>
        <button className='key' onClick={() => onKeyPress('0')}>0</button>
        <button className='operator' onClick={() => onKeyPress('/')}>/</button>
        <button className='operator' onClick={() => onKeyPress('x')}>x</button>

        <button className='reset' onClick={onReset}>RESET</button>
        <button className='equals-key' onClick={onEquals}>=</button>
      </div>
      
    </section>
  )
}
