import React from 'react'
import { useRef, useState }  from 'react'
import Screen from './Screen'
import Keypad from './Keypad'

export default function Calculator() {
    const ref = useRef(null);
    const [calc, setCalc] = useState('');

    const isOperator = (c) => ['+','-','x','/'].includes(c);

    const handleKeyPress = (value) => {
        if (isOperator(value)) {
            if (calc === '') return; // don't start with operator
            const last = calc.slice(-1);
            if (isOperator(last)) {
                setCalc(calc.slice(0, -1) + value);
                return;
            }
        }
        setCalc(prev => prev + value);
    }

    const handleDelete = () => setCalc(prev => prev.slice(0, -1));
    const handleReset = () => setCalc('');

    const handleEquals = () => {
        if (!calc) return;
        const expr = calc.replace(/x/g, '*');
        try {
            // Use Function instead of eval for a little more control
            const result = Function('"use strict"; return (' + expr + ')')();
            setCalc(String(result));
        } catch (err) {
            setCalc('Error');
        }
    }

  return (
    <article className='calculator'>
        <Screen ref={ref} Calc={calc} />
        <Keypad onKeyPress={handleKeyPress} onDelete={handleDelete} onReset={handleReset} onEquals={handleEquals} />
    </article>
  )
}
